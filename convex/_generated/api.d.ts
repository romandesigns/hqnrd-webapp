/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as categories from "../categories.js";
import type * as fees from "../fees.js";
import type * as fields_category from "../fields/category.js";
import type * as fields_discount from "../fields/discount.js";
import type * as fields_finance from "../fields/finance.js";
import type * as fields_index from "../fields/index.js";
import type * as fields_profile from "../fields/profile.js";
import type * as profiles from "../profiles.js";
import type * as schema_index from "../schema/index.js";
import type * as tasks from "../tasks.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  categories: typeof categories;
  fees: typeof fees;
  "fields/category": typeof fields_category;
  "fields/discount": typeof fields_discount;
  "fields/finance": typeof fields_finance;
  "fields/index": typeof fields_index;
  "fields/profile": typeof fields_profile;
  profiles: typeof profiles;
  "schema/index": typeof schema_index;
  tasks: typeof tasks;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
