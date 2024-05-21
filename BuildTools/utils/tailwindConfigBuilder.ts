import type { Config } from "tailwindcss";
import { makeKeyString } from "./stringUtils";
import { tokens as lightTokens } from "../../design_token_exports/light_theme/ts/tokens";

export const baseConfig: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: {
        50: "#f9fafb",
        // ...
        900: "#111827",
      },
      red: {
        50: "#fef2f2",
        // ...
        900: "#7f1d1d",
      },
      // Add more color definitions as needed
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      // ...
      96: "24rem",
    },
    // backgroundColor: (theme) => theme('colors'),
    backgroundImage: {
      none: "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      // ...
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    // Add more theme configurations as needed
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      // ...
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // ...
  ],
  corePlugins: {
    float: false,
    // ...
  },
  prefix: "",
  important: false,
  separator: ":",
  presets: [],
  darkMode: "media" || "class" || false,
};

export type typeValueRecord = Record<string, unknown> & {
  type: string;
  value: string;
};
export type typeValueRecordWithParent = typeValueRecord & {
  parent: string | null;
  keyTitle: string;
};

export type TailwindThemeConfig = {
  screens: Record<string, string>;
  colors: Record<string, string | Record<string, string>>;
  spacing: Record<string, string>;
  backgroundImage: Record<string, string>;
  backgroundSize: Record<string, string>;
  borderRadius: Record<string, string>;
  borderWidth: Record<string, string>;
  fontFamily: Record<string, string[]>;
  fontSize: Record<string, [string, { lineHeight: string }]>;
  fontWeight: Record<string, string>;
};

const baseTheme: Partial<TailwindThemeConfig> = {
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black: "#000",
    white: "#fff",
    gray: {
      50: "#f9fafb",
      // ...
      900: "#111827",
    },
    red: {
      50: "#fef2f2",
      // ...
      900: "#7f1d1d",
    },
    // Add more color definitions as needed
  },
  spacing: {
    px: "1px",
    0: "0",
    0.5: "0.125rem",
    1: "0.25rem",
    // ...
    96: "24rem",
  },
  // backgroundColor: (theme) => theme('colors'),
  backgroundImage: {
    none: "none",
    "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
    // ...
  },
  backgroundSize: {
    auto: "auto",
    cover: "cover",
    contain: "contain",
  },
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  borderWidth: {
    DEFAULT: "1px",
    0: "0px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  fontFamily: {
    sans: [
      "ui-sans-serif",
      "system-ui",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
    serif: [
      "ui-serif",
      "Georgia",
      "Cambria",
      '"Times New Roman"',
      "Times",
      "serif",
    ],
    mono: [
      "ui-monospace",
      "SFMono-Regular",
      "Menlo",
      "Monaco",
      "Consolas",
      '"Liberation Mono"',
      '"Courier New"',
      "monospace",
    ],
  },
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    sm: ["0.875rem", { lineHeight: "1.25rem" }],
    base: ["1rem", { lineHeight: "1.5rem" }],
    lg: ["1.125rem", { lineHeight: "1.75rem" }],
    xl: ["1.25rem", { lineHeight: "1.75rem" }],
    "2xl": ["1.5rem", { lineHeight: "2rem" }],
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
    "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
    "5xl": ["3rem", { lineHeight: "1" }],
    "6xl": ["3.75rem", { lineHeight: "1" }],
    "7xl": ["4.5rem", { lineHeight: "1" }],
    "8xl": ["6rem", { lineHeight: "1" }],
    "9xl": ["8rem", { lineHeight: "1" }],
  },
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
};

console.log(baseTheme);

/**
 * Recursively extracts any nested Objects that contain a specific key
 * @param obj {Record<string, unknown>} - The object to extract objects from
 * @param key {string} - The key to search for in the object. Default is "type"
 * @param accumulator {Record<string, unknown>[]} - The array to store the extracted objects in. Default is []
 * @returns {Record<string, unknown>[]} - An array of objects that contain the key
 */
export const extractObjectsWithKeys = (
  obj: Record<string, unknown>,
  key: string = "type",
  keyTitle: string = "",
  accumulator: Record<string, unknown>[] = []
): Record<string, unknown>[] => {
  if (Object.keys(obj).includes(key)) {
    accumulator.push({ ...obj, keyTitle });
    return accumulator;
  } else {
    Object.entries(obj).forEach(([keyTitle, value]) => {
      if (keyTitle && typeof value === "object") {
        extractObjectsWithKeys(
          value as Record<string, unknown>,
          key,
          keyTitle,
          accumulator
        );
      }
    });
  }
  return accumulator;
};

/**
 * Recursively extracts nested elements from an object with a key matching the key argument passed. The default key is "type".
 * @param obj {Record<string, unknown>} - The object to extract top level elements from
 * @param key {string} - The key to search for in the object. Default is "type"
 * @returns {typeValueRecordWithParent[]}
 */
export const extractTopLevelElements = (
  obj: Record<string, unknown>,
  key: string = "type"
): typeValueRecordWithParent[] => {
  return Object.entries(obj)
    .map(([keyTitle, value]) => {
      if (
        keyTitle &&
        typeof value === "object" &&
        !Array.isArray(value) &&
        value &&
        !Object.keys(value).includes(key)
      ) {
        return extractObjectsWithKeys(
          value as Record<string, unknown>,
          key,
          keyTitle
        ).map((item) => {
          return {
            parent: keyTitle,
            ...item,
          } as typeValueRecordWithParent;
        });
      }
      return [
        {
          parent: null,
          keyTitle,
          ...(value as Record<string, unknown>),
        } as typeValueRecordWithParent,
      ];
    })
    .flat();
};

/**
 * Extracts all elements with a 'type' value matching the argument from an object.
 * @param obj {Record<string, unknown>} - The theme object to extract types from
 * @param type {string} - The type to extract from the theme object. Default is "color"
 * @returns {typeValueRecord[]}
 */
export const extractTypes = (
  obj: Record<string, unknown>,
  type: string = "color"
): typeValueRecordWithParent[] =>
  extractTopLevelElements(obj).filter(
    (item) => "type" in item && item.type === type
  ) as typeValueRecordWithParent[];


  /**
   * 
   * @param items 
   * @returns 
   */
export const groupItemsByParent = (
  items: typeValueRecordWithParent[]
): Record<
  string,
  Record<string, typeValueRecord> | string | typeValueRecordWithParent
> => {
  return items.reduce((acc: Record<string, any>, item) => {
    if (item.parent) {
      if (!acc[makeKeyString(item.parent)]) {
        acc[makeKeyString(item.parent)] = {};
      }
      acc[makeKeyString(item.parent)][
        makeKeyString(item.keyTitle, item.parent)
      ] = item.value;
    } else {
      acc[makeKeyString(item.keyTitle)] = item.value;
    }
    return acc;
  }, {});
};

export const tailwindConfigThemeBuilder = (
  config: Partial<TailwindThemeConfig>
) => {
  return {
    ...baseConfig,
    ...config,
  };
};

const figmaToTailwindDictionary: Record<string, string> = {
  color: "colors",
  textCase: "textTransform",
  dimension: "spacing",
  typography: "fontSize",
};

/**
 * Extracts the theme from the tokens and builds a tailwind config object for an individual key
 * @param tokens {Record<string, unknown>} - The tokens to extract the theme from. Default is the mocked lightTokens
 * @param key {string} - The key to extract from the tokens. Default is "color"
 * @returns
 */
export const tailwindConfigBuilder = (
  tokens: Record<string, unknown> = lightTokens,
  key = "color"
) => {
  const colors = groupItemsByParent(extractTypes(tokens, key));
  console.log("EXTRACTED COLOURS ", colors);
  return { [figmaToTailwindDictionary[key] || key]: colors };
  // return tailwindConfigThemeBuilder({
  //     ...baseTheme,
  //     ...colors,
  // });
};
