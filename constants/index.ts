import { bedTypes } from "./bedsTypes";
import { branding } from "./branding";
import { categories } from "./categories";
import { contact } from "./contact";
import { currencies } from "./currencies";
import { flags } from "./flags";
import { languageTag } from "./languageTag";
import { locales } from "./locales";
import { mimetypes } from "./mimetypes";
import { orientation } from "./orientation";
import { roles } from "./roles";
import { social } from "./social";

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
  BEDTYPES: bedTypes,
};
