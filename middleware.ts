// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { i18n } from "./i18n-config";

const LOCALE_COOKIE = "NEXT_LOCALE";
const LOCALE_RE = `(${i18n.locales.join("|")})`; // e.g. (en|es)
const PUBLIC_FILE = /\.(.*)$/;

// Public routes with an **optional** leading locale segment:
//   "/" or "/en"
//   "/crear-cuenta" or "/en/crear-cuenta", etc.
const isPublicRoute = createRouteMatcher([
  `/:locale${LOCALE_RE}?`,
  `/:locale${LOCALE_RE}?/iniciar-sesion(.*)`,
  `/:locale${LOCALE_RE}?/crear-cuenta(.*)`,
  `/:locale${LOCALE_RE}?/habitaciones(.*)`,
  "/api/webhooks/auth",
]);

function detectLocale(req: NextRequest) {
  const accept = req.headers.get("accept-language") ?? "";
  const first = accept.split(",")[0]?.toLowerCase() || "";
  const short = first.split("-")[0] || "";
  return (
    [first, short].find((l) => i18n.locales.includes(l)) ?? i18n.defaultLocale
  );
}

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { pathname } = req.nextUrl;

  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  // Skip internals, static assets, and API/TRPC
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/trpc") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Already locale-scoped?
  const hasLocale = i18n.locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  // Cookie → fallback to Accept-Language
  const saved = req.cookies.get(LOCALE_COOKIE)?.value;
  const chosen =
    saved && i18n.locales.includes(saved) ? saved : detectLocale(req);

  const res = NextResponse.redirect(new URL(`/${chosen}${pathname}`, req.url));
  res.cookies.set(LOCALE_COOKIE, chosen, {
    path: "/",
    maxAge: 60 * 60 * 24 * 180,
  });
  return res;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
