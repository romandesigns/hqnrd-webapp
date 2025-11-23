"use server";

import type { Id } from "@/convex/_generated/dataModel";

export async function createReservation(formData: FormData) {
  // Reservation form data
  const reservationData = {
    roomId: formData.get("roomId") as Id<"rooms">,
    slug: formData.get("slug") as string,
    locale: formData.get("lang") as string,
    adults: Number(formData.get("adults") as string),
    children: Number(formData.get("children") as string),
    checkIn: formData.get("checkIn") as string,
    checkOut: formData.get("checkOut") as string,
    message: formData.get("message") as string,
  };
// Save reservation data in browsers's database to perform the following
    // 1 - Store data in browsers db
    // 2 - Read db data to render sheet items count
        // 2.1 - Update sheet items count when user adds/removes items
        // 2.2 - Render a mini cart with the items added
    // 3 - Iterate through Items to provide full reservation details
    // 4 - If user is not signed in, prompt sign-in/sign-up flow
    // 5 - On successful sign-in/sign-up proceed to payment gateway
        // 5.1 Show button to allow user to proceed to payment gateway
        // 5.2 Up on payment completion, store information in remote db
    // 6 - If not signed in, read browser data to send a reminder email or notification with reservation details
  console.log(reservationData);
}
