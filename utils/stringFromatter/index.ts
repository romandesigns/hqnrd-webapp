export enum CaseType {
  Title = "title",
  Kebab = "kebab",
  Snake = "snake",
  Camel = "camel",
  Pascal = "pascal",
  Lowercase = "lowercase",
  Uppercase = "uppercase",
}

export const stringFormatter = {
  // Capitalize the first letter of each word (handles spaces, hyphens, and other word boundaries)
  firstLetterCapitalized: (str: string) =>
    str.replace(/\b\w/g, (char) => char.toUpperCase()),

  // Convert to title case with spaces (doble cama -> Doble Cama, basica -> Basica)
  titleCase: (str: string) =>
    str
      .toLowerCase()
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()),

  // Convert to plural title case (doble cama -> Doble Camas, basica -> Basicas)
  titleCasePlural: (str: string) => {
    const formatted = str
      .toLowerCase()
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
    return formatted.endsWith("s") ? formatted : formatted + "s";
  },

  // Convert to kebab case (Doble Cama -> doble-cama, basica -> basica)
  kebabCase: (str: string) =>
    str.toLowerCase().replace(/\s+/g, "-").replace(/[_]/g, "-"),

  // Convert to plural kebab case (Doble Cama -> doble-camas, basica -> basicas)
  kebabCasePlural: (str: string) => {
    const formatted = str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[_]/g, "-");
    return formatted.endsWith("s") ? formatted : formatted + "s";
  },

  // Convert to snake case (Doble Cama -> doble_cama, basica -> basica)
  snakeCase: (str: string) =>
    str.toLowerCase().replace(/\s+/g, "_").replace(/[-]/g, "_"),

  // Convert to plural snake case (Doble Cama -> doble_camas, basica -> basicas)
  snakeCasePlural: (str: string) => {
    const formatted = str
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[-]/g, "_");
    return formatted.endsWith("s") ? formatted : formatted + "s";
  },

  // Convert to camel case (doble cama -> dobleCama, basica -> basica)
  camelCase: (str: string) => {
    const normalized = str.toLowerCase().trim();
    return normalized.replace(/[-_\s]+(.)/g, (_, char) => char.toUpperCase());
  },

  // Convert to plural camel case (doble cama -> dobleCamas, basica -> basicas)
  camelCasePlural: (str: string) => {
    const normalized = str.toLowerCase().trim();
    const formatted = normalized.replace(/[-_\s]+(.)/g, (_, char) =>
      char.toUpperCase(),
    );
    return formatted.endsWith("s") ? formatted : formatted + "s";
  },

  // Convert to pascal case (doble cama -> DobleCama, basica -> Basica)
  pascalCase: (str: string) => {
    const normalized = str.toLowerCase().trim();
    return (
      normalized.charAt(0).toUpperCase() +
      normalized
        .slice(1)
        .replace(/[-_\s]+(.)/g, (_, char) => char.toUpperCase())
    );
  },

  // Convert to plural pascal case (doble cama -> DobleCamas, basica -> Basicas)
  pascalCasePlural: (str: string) => {
    const normalized = str.toLowerCase().trim();
    const formatted =
      normalized.charAt(0).toUpperCase() +
      normalized
        .slice(1)
        .replace(/[-_\s]+(.)/g, (_, char) => char.toUpperCase());
    return formatted.endsWith("s") ? formatted : formatted + "s";
  },

  // Normalize spaces (remove extra spaces and trim)
  normalizeSpaces: (str: string) => str.replace(/\s+/g, " ").trim(),

  // Convert to lowercase with spaces (basica -> basica, doble-cama -> doble cama)
  lowercase: (str: string) =>
    str.replace(/[-_]/g, " ").toLowerCase().replace(/\s+/g, " ").trim(),

  // Convert to plural lowercase with spaces (basica -> basicas, doble-cama -> doble camas)
  lowercasePlural: (str: string) => {
    const formatted = str
      .replace(/[-_]/g, " ")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
    return formatted.endsWith("s") ? formatted : formatted + "s";
  },

  // Convert to uppercase with spaces (basica -> BASICA, doble-cama -> DOBLE CAMA)
  uppercase: (str: string) =>
    str.replace(/[-_]/g, " ").toUpperCase().replace(/\s+/g, " ").trim(),

  // Convert to plural uppercase with spaces (basica -> BASICAS, doble-cama -> DOBLE CAMAS)
  uppercasePlural: (str: string) => {
    const formatted = str
      .replace(/[-_]/g, " ")
      .toUpperCase()
      .replace(/\s+/g, " ")
      .trim();
    return formatted.endsWith("S") ? formatted : formatted + "S";
  },

  // Hotel room category formatter - handles specific room type categories
  categoryFormatter: (
    str: string,
    format:
      | "title"
      | "kebab"
      | "snake"
      | "camel"
      | "pascal"
      | "lowercase"
      | "uppercase" = "title",
    plural: boolean = false,
  ) => {
    // Normalize the input
    const normalized = str
      .toLowerCase()
      .replace(/[-_]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    // Category mappings for proper formatting (including plural forms)
    const categoryMappings: Record<
      string,
      { singular: string; plural: string; isPlural: boolean }
    > = {
      basica: { singular: "básica", plural: "básicas", isPlural: false },
      basicas: { singular: "básica", plural: "básicas", isPlural: true },
      standard: { singular: "estándar", plural: "estándares", isPlural: false },
      estandar: { singular: "estándar", plural: "estándares", isPlural: false },
      estandares: {
        singular: "estándar",
        plural: "estándares",
        isPlural: true,
      },
      "cama doble": {
        singular: "cama doble",
        plural: "camas dobles",
        isPlural: false,
      },
      "camas dobles": {
        singular: "cama doble",
        plural: "camas dobles",
        isPlural: true,
      },
      doble: { singular: "doble", plural: "dobles", isPlural: false },
      dobles: { singular: "doble", plural: "dobles", isPlural: true },
      familiar: { singular: "familiar", plural: "familiares", isPlural: false },
      familiares: {
        singular: "familiar",
        plural: "familiares",
        isPlural: true,
      },
      ejecutiva: {
        singular: "ejecutiva",
        plural: "ejecutivas",
        isPlural: false,
      },
      ejecutivas: {
        singular: "ejecutiva",
        plural: "ejecutivas",
        isPlural: true,
      },
    };

    // Get the category mapping or create a fallback with proper Spanish plural rules
    const categoryMapping =
      categoryMappings[normalized] ||
      (() => {
        let singular: string;
        let plural: string;
        let isPlural: boolean;

        if (normalized.endsWith("es") && !normalized.endsWith("ses")) {
          // Likely plural form ending in -es
          singular = normalized.slice(0, -2);
          plural = normalized;
          isPlural = true;
        } else if (normalized.endsWith("s") && !normalized.endsWith("es")) {
          // Likely plural form ending in -s
          singular = normalized.slice(0, -1);
          plural = normalized;
          isPlural = true;
        } else {
          // Singular form - apply proper Spanish pluralization rules
          singular = normalized;
          isPlural = false;

          if (
            normalized.endsWith("ar") ||
            normalized.endsWith("er") ||
            normalized.endsWith("ir")
          ) {
            // Words ending in -ar, -er, -ir add -es
            plural = normalized + "es";
          } else if (normalized.endsWith("z")) {
            // Words ending in -z change to -ces
            plural = normalized.slice(0, -1) + "ces";
          } else if (normalized.endsWith("í") || normalized.endsWith("ú")) {
            // Words ending in stressed í or ú add -es
            plural = normalized + "es";
          } else {
            // Most other words just add -s
            plural = normalized + "s";
          }
        }

        return { singular, plural, isPlural };
      })();

    // Determine the final category based on plural parameter
    const finalCategory = plural
      ? categoryMapping.plural
      : categoryMapping.singular;

    // Apply the requested format
    switch (format) {
      case "title":
        return finalCategory.replace(
          /(^|\s)([a-záéíóúüñ])/g,
          (_, prefix, char) => prefix + char.toUpperCase(),
        );
      case "kebab":
        return finalCategory.replace(/\s+/g, "-");
      case "snake":
        return finalCategory.replace(/\s+/g, "_");
      case "camel":
        return finalCategory.replace(/\s+(.)/g, (_, char) =>
          char.toUpperCase(),
        );
      case "pascal":
        return (
          finalCategory.charAt(0).toUpperCase() +
          finalCategory
            .slice(1)
            .replace(/\s+(.)/g, (_, char) => char.toUpperCase())
        );
      case "uppercase":
        return finalCategory.toUpperCase();
      case "lowercase":
      default:
        return finalCategory;
    }
  },
};
