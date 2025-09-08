import { HQNRD } from "./constants";

export const i18n = {
  defaultLocale: HQNRD.LOCALES[1],
  locales: HQNRD.LOCALES,
} as const;

export type Locale = (typeof i18n)["locales"][number];
