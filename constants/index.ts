import { locales } from "./locales";
import { flags } from "./flags";
import { branding } from "./branding";
import { contact } from "./contact";
import { social } from "./social";
import { categories } from "./categories";
import { currencies } from "./currencies";
import { roles } from "./roles";
import { languageTag } from "./languageTag";
import { mimetypes } from "./mimetypes";
import { orientation } from "./orientation";

// Main object to be exported
export const HQNRD = {
  LOCALES: locales,
  LOCALEFLAGS: flags,
  LANGUAGETAG: languageTag,
  BRANDING: branding,
  CONTACT: contact,
  SOCIAL: social,
  CATEGORIES: categories,
  CURRENCIES: currencies,
  ROLES: roles,
  MIMETYPE: mimetypes,
  ORIENTATION: orientation,
};
