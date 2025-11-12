import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { fetchMutation } from "convex/nextjs";
import type { NextRequest } from "next/server";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { HQNRD } from "../../../../constants";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const eventType = evt.type;
    switch (eventType) {
      case "user.created": {
        const payload = {
          firstName: evt.data.first_name ?? "",
          lastName: evt.data.last_name ?? "",
          username: evt.data.username ?? "",
          banned: evt.data.banned ?? false,
          createdAt: evt.data.created_at,
          email: evt.data.email_addresses[0].email_address,
          emailVerificationStatus:
            evt.data.email_addresses[0]?.verification?.status ?? "unverified",
          avatarUrl: evt.data.image_url ?? "",
          phone: evt.data.phone_numbers?.[0]?.phone_number ?? "",
          phoneVerificationStatus:
            evt.data.phone_numbers?.[0]?.verification?.status ?? "unverified",
          clerkId: evt.data.id,
          locked: false,
          status: "active",
          role: HQNRD.ROLES.GUEST,
        };
        await fetchMutation(api.profiles.createProfile, payload);
        console.log("User created:", evt.data);
        break;
      }
      case "user.updated":
        console.log("User updated:", evt.data);
        break;
      case "user.deleted":
        console.log("User deleted:", evt.data);
        break;
      default:
        console.log(`Unhandled event type: ${eventType}`);
    }
    // console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
    // console.log('Webhook payload:', evt.data)
    // console.log('Webhook email address payload:', evt.data?.email_addresses[0].verification)
    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
