import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
import { api } from "@/convex/_generated/api";
import { fetchMutation } from "convex/nextjs";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req, {
      signingSecret: process.env.CLERK_WEBHOOK_SIGNING_SECRET!,
    });

    const eventType = evt.type;

    switch (eventType) {
      case "user.created":
        console.log("🎉 New user created:", evt.data.id);
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
