import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
import { api } from "@/convex/_generated/api";
import { fetchMutation } from "convex/nextjs";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req, {
      signingSecret: process.env.CLERK_WEBHOOK_SIGNING_SECRET!,
    });

    const { id } = evt.data;
    const eventType = evt.type;

    // console.log(`✅ Webhook received: ID ${id}, Type ${eventType}`)
    // console.log('📦 Payload:', evt.data)

    switch (eventType) {
      case "user.created":
        const user = evt.data;
        // Get primary email and phone number
        const primaryEmail =
          user.email_addresses.find(
            (email) => email.id === user.primary_email_address_id,
          )?.email_address || "";

        const primaryPhone =
          user.phone_numbers.find(
            (phone) => phone.id === user.primary_phone_number_id,
          )?.phone_number || "";

        const payload = {
          clerkId: user.id,
          imageUrl: user.image_url,
          email: primaryEmail,
          phoneNumber: primaryPhone,
          username: user.username ?? "",
          createdAt: user.created_at,
        };
        const newUser = await fetchMutation(api.users.create, payload);
        await fetchMutation(api.users.createUserProfile, {
          clerkId: newUser.clerkId,
          createdAt: newUser.createdAt,
          email: newUser.email,
          imageUrl: newUser.imageUrl,
          phoneNumber: newUser.phoneNumber,
          username: newUser.username,
          role: "guest",
        });
        console.log("🎉 New user created:", newUser);
        break;

      case "user.updated":
        console.log("🔄 User updated:", evt.data.id);
        break;

      case "user.deleted":
        console.log("🗑️ User deleted:", evt.data.id);
        break;

      default:
        console.log("ℹ️ Unhandled event type:", eventType);
        break;
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("❌ Webhook verification failed:", err);
    return new Response("Webhook verification failed", { status: 400 });
  }
}
