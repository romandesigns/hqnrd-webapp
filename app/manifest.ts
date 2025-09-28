// app/manifest.ts
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hotel Quinto Nivel RD",
    short_name: "HQNRD",
    description:
      "Hotel Quinto Nivel RD — unmatched comfort, elegance, and a perfect getaway experience in Salcedo, Dominican Republic.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    id: "/",
    dir: "ltr",
    lang: "en",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#0b0b0e",
    categories: ["hotel", "hospitality", "travel", "vacation", "tourism"],

    icons: [
      {
        src: "/assets/brand/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/brand/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/assets/brand/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/assets/brand/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/assets/brand/icons/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],

    // Multi-platform related apps
    related_applications: [
      {
        platform: "webapp",
        url: "https://hqnrd.com/manifest.webmanifest",
      },
    ],
    prefer_related_applications: false,

    // Screenshots for install prompts (optional but adds polish)
    screenshots: [
      {
        src: "/assets/brand/screenshots/homepage.jpg",
        sizes: "1280x720",
        type: "image/jpeg",
        label: "Homepage - Hotel Quinto Nivel RD",
      },
      {
        src: "/assets/brand/screenshots/rooms.jpg",
        sizes: "1280x720",
        type: "image/jpeg",
        label: "Explore Rooms & Amenities",
      },
      {
        src: "/assets/brand/screenshots/booking.jpg",
        sizes: "1280x720",
        type: "image/jpeg",
        label: "Seamless Booking Experience",
      },
    ],

    // Protocols (nice touch for future deep linking)
    protocol_handlers: [
      {
        protocol: "web+booking",
        url: "/booking?ref=%s",
      },
    ],

    // Shortcuts for frequent actions
    shortcuts: [
      {
        name: "Book a Room",
        short_name: "Book",
        description: "Reserve your stay instantly.",
        url: "/booking",
        icons: [
          {
            src: "/assets/brand/icons/shortcut-book.png",
            sizes: "96x96",
            type: "image/png",
          },
        ],
      },
      {
        name: "Explore Rooftop",
        short_name: "Rooftop",
        description: "Check out our exclusive rooftop views.",
        url: "/rooftop",
        icons: [
          {
            src: "/assets/brand/icons/shortcut-rooftop.png",
            sizes: "96x96",
            type: "image/png",
          },
        ],
      },
      {
        name: "Hotel Reviews",
        short_name: "Reviews",
        description: "See what our guests are saying.",
        url: "/reviews",
        icons: [
          {
            src: "/assets/brand/icons/shortcut-reviews.png",
            sizes: "96x96",
            type: "image/png",
          },
        ],
      },
    ],
  };
}
