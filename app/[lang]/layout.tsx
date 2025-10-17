import { enUS, esES } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { i18n, type Locale } from "@/i18n-config";
import { ConvexProviderWithClerk, ThemeProvider } from "../../providers";
import "../globals.css";
import { InstallPrompt } from "@/components/features";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hqnrd.com"),
  title: {
    default: "Hotel Quinto Nivel RD",
    template: "%s | Hotel Quinto Nivel RD",
  },
  description:
    "Hotel Quinto Nivel RD — unmatched comfort, elegance, and a perfect getaway experience in Salcedo, Dominican Republic. Spacious rooms, rooftop views, and modern amenities await you.",
  applicationName: "Hotel Quinto Nivel RD",
  generator: "Next.js",
  keywords: [
    "hotel",
    "Dominican Republic",
    "Salcedo",
    "HQNRD",
    "vacation",
    "hospitality",
    "boutique hotel",
    "rooftop views",
    "travel",
    "getaway",
  ],
  authors: [{ name: "Hotel Quinto Nivel RD", url: "https://hqnrd.com" }],
  creator: "Hotel Quinto Nivel RD",
  publisher: "Hotel Quinto Nivel RD",
  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: "https://hqnrd.com",
    languages: {
      "en-US": "https://hqnrd.com/en",
      "es-DO": "https://hqnrd.com/es",
    },
  },

  icons: {
    icon: [
      { url: "/assets/brand/icons/favicon-16x16.png", sizes: "16x16" },
      { url: "/assets/brand/icons/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: [
      {
        url: "/assets/brand/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/assets/brand/icons/favicon.ico",
  },

  manifest: "/manifest.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://hqnrd.com",
    siteName: "Hotel Quinto Nivel RD",
    title: "Hotel Quinto Nivel RD",
    description:
      "Unmatched comfort, elegance, and a perfect getaway experience in Salcedo, Dominican Republic.",
    images: [
      {
        url: "/assets/brand/og/hqnrd-og.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Quinto Nivel RD - Rooftop View",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@HQNRDHotel",
    creator: "@HQNRDHotel",
    title: "Hotel Quinto Nivel RD",
    description:
      "Boutique-style hotel in Salcedo, Dominican Republic. Experience unmatched comfort and elegance.",
    images: ["/assets/brand/og/hqnrd-og.jpg"],
  },

  facebook: {
    appId: "1234567890", // placeholder, replace if you integrate FB app
  },

  pinterest: {
    richPin: true,
  },

  verification: {
    google: "google-site-verification-code", // replace with real token
    yandex: "yandex-verification-code",
    other: {
      me: ["@hqnrd", "https://hqnrd.com"],
    },
  },

  appleWebApp: {
    capable: true,
    title: "Hotel Quinto Nivel RD",
    statusBarStyle: "black-translucent",
  },

  formatDetection: {
    telephone: false,
  },

  category: "Travel & Hospitality",
  classification: "Hotel & Lodging",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${poppinsSans.variable} antialiased scroll-smooth overscroll-contain`}
      >
        <ClerkProvider
          localization={lang === "en" ? enUS : esES}
          appearance={{
            baseTheme: shadcn,
            variables: {
              fontFamily: "var(--font-poppins-sans)",
            },
            layout: {
              logoPlacement: "outside",
            },
          }}
        >
          <ConvexProviderWithClerk>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </ConvexProviderWithClerk>
        </ClerkProvider>
        <InstallPrompt />
      </body>
    </html>
  );
}
