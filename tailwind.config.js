/*
|-------------------------------------------------------------------------------
| Tailwind – The Utility-First CSS Framework
|-------------------------------------------------------------------------------
|
| Documentation at https://tailwindcss.com
|
*/

/**
 * Global Styles Plugin
 *
 * This plugin modifies Tailwind’s base styles using values from the theme.
 * https://tailwindcss.com/docs/adding-base-styles#using-a-plugin
 */

const globalStyles = ({ addBase, config, theme }) => {
  addBase({
    "p, a, li": {
      fontSize: config("theme.fontSize.base[0]"),
      lineHeight: config("theme.fontSize.base[1]"),
      color: config("theme.colors.blue.DEFAULT"),
    },
    "h1, .text-h1, h2, .text-h2, h3, .text-h3, h4, .text-h4, h5, .text-h5, .text-h1-mobile":
      {
        color: config("theme.colors.blue.DEFAULT"),
        marginBottom: config("theme.margin.5"),
        hyphens: config("theme.hyphens.auto"),
      },
    "h1, .text-h1": {
      fontSize: config("theme.fontSize.h1[0]"),
      lineHeight: config("theme.fontSize.h1[1]"),
      fontFamily: config("theme.fontFamily.serif"),
    },
    ".text-h1-mobile": {
      fontSize: theme("fontSize.h1mobile[0]"),
      lineHeight: theme("fontSize.h1mobile[1]"),
      fontFamily: config("theme.fontFamily.serif"),
    },
    ".text-h2-mobile": {
      fontSize: theme("fontSize.h1mobile[0]"),
      lineHeight: theme("fontSize.h1mobile[1]"),
      fontFamily: config("theme.fontFamily.sans"),
      fontWeight: config("theme.fontWeight.bold"),
    },
    "h2, .text-h2": {
      fontSize: config("theme.fontSize.h2[0]"),
      lineHeight: config("theme.fontSize.h2[1]"),
      fontFamily: config("theme.fontFamily.sans"),
      fontWeight: config("theme.fontWeight.bold"),
    },
    "h3, .text-h3": {
      fontSize: config("theme.fontSize.h3[0]"),
      lineHeight: config("theme.fontSize.h3[1]"),
      fontFamily: config("theme.fontFamily.sans"),
      fontWeight: config("theme.fontWeight.bold"),
    },
    "h4, .text-h4": {
      fontSize: config("theme.fontSize.h4[0]"),
      lineHeight: config("theme.fontSize.h4[1]"),
      fontFamily: config("theme.fontFamily.sans"),
      fontWeight: config("theme.fontWeight.bold"),
    },
    "h5, .text-h5": {
      fontSize: config("theme.fontSize.h5[0]"),
      lineHeight: config("theme.fontSize.h5[1]"),
      fontFamily: config("theme.fontFamily.sans"),
      fontWeight: config("theme.fontWeight.bold"),
    },
    "h6, .text-h6": {
      fontSize: config("theme.fontSize.h6[0]"),
      lineHeight: config("theme.fontSize.h6[1]"),
      fontFamily: config("theme.fontFamily.sans"),
      fontWeight: config("theme.fontWeight.bold"),
    },
    ".item, .text-item": {
      fontSize: config("theme.fontSize.item[0]"),
      lineHeight: config("theme.fontSize.item[1]"),
      fontFamily: config("theme.fontFamily.sans"),
    },
    ".overline, .text-overline": {
      fontSize: config("theme.fontSize.overline[0]"),
      lineHeight: config("theme.fontSize.overline[1]"),
      fontFamily: config("theme.fontFamily.sans"),
      textTransform: "uppercase",
      letterSpacing: config("theme.letterSpacing.tight"),
    },
    ".caption, .text-caption": {
      fontSize: config("theme.fontSize.caption[0]"),
      lineHeight: config("theme.fontSize.caption[1]"),
      fontFamily: config("theme.fontFamily.sans"),
    },
    ".huge, .text-huge": {
      fontSize: config("theme.fontSize.huge[0]"),
      lineHeight: config("theme.fontSize.huge[1]"),
      fontFamily: config("theme.fontFamily.sans"),
    },
    ".button, .text-button, .btn": {
      fontSize: config("theme.fontSize.base[0]"),
      lineHeight: config("theme.fontSize.base[1]"),
      fontFamily: config("theme.fontFamily.sans"),
      fontWeight: config("theme.fontWeight.bold"),
    },
    ".button-small, .text-button-small": {
      fontSize: config("theme.fontSize.buttonsmall[0]"),
      lineHeight: config("theme.fontSize.buttonsmall[1]"),
      fontFamily: config("theme.fontFamily.sans"),
      fontWeight: config("theme.fontWeight.bold"),
      textTransform: "uppercase",
    },
    ol: { listStyleType: "decimal" },
    ul: { listStyleType: "disc" },
    "ol, ul": {
      paddingLeft: config("theme.padding.2"),
      marginBottom: config("theme.margin.2"),
    },
    li: {
      paddingLeft: config("theme.padding.1"),
      marginBottom: config("theme.margin.1"),
    },
    figcaption: {
      color: config("theme.colors.blue.500"),
      fontFamily: config("theme.fontFamily.sans"),
    },
  });
};

module.exports = {
  mode: "jit",
  purge: {
    content: [
      // relative path globs to template files
      "./src/**/*.{html,ts}",
    ],
    options: {
      whitelist: [],
      // purgecss options (e.g. whitelist: [], etc.)
    },
  },
  theme: {
    colors: {
      blue: {
        DEFAULT: "#2e4158",
        100: "#c2d5e0",
        200: "#283042",
        300: "#21263c",
        400: "#0f152c",
      },

      black: "#212121",
      white: "#ffffff",
      orange: "#db7a2b",
      transparent: "transparent",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      sans: "century-gothic, sans-serif",
      serif: '"Libre Baskerville", serif',
    },
    fontSize: {
      h1: ["3rem", { lineHeight: "3.5rem" }],
      h2: ["3rem", { lineHeight: "3rem" }],
      h3: ["2rem", { lineHeight: "2.5rem" }],
      h4: ["1.5rem", { lineHeight: "2rem" }],
      h5: ["1.125rem", { lineHeight: "1.5rem" }],
      h6: ["0.875rem", { lineHeight: "1rem" }],
      h1mobile: ["2.5rem", { lineHeight: "3.0rem" }],
      base: ["0.9375rem", { lineHeight: "1.5rem" }],
      item: ["0.875rem", { lineHeight: "1rem" }],
      button: ["0.9375rem", { lineHeight: "1.5rem" }],
      buttonsmall: ["0.875rem", { lineHeight: "1rem" }],
      overline: ["0.75rem", { lineHeight: "1rem" }],
      label: ["0.75rem", { lineHeight: "1rem" }],
      caption: ["0.625rem", { lineHeight: "1rem" }],
      huge: ["4.5rem", { lineHeight: "4.5rem" }],
    },
    fontWeight: {
      light: "300",
      normal: "400",
      semibold: "600",
      bold: "700",
    },
    spacing: {
      px: "1px",
      "2px": "2px",
      0: "0px",
      0.25: "2px",
      0.5: "4px",
      0.75: "6px",
      1: "8px",
      1.5: "12px",
      2: "16px",
      2.5: "20px",
      3: "24px",
      3.5: "28px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "56px",
      8: "64px",
      9: "72px",
      10: "80px",
      11: "88px",
      12: "96px",
      13: "104px",
      14: "112px",
      15: "120px",
      16: "128px",
      18: "144px",
      20: "160px",
      21: "168px",
      24: "192px",
      32: "256px",
      35: "280px",
      36: "288px",
      40: "320px",
      48: "384px",
      56: "448px",
      64: "512px",
      68: "544px",
      78: "624px",
      90: "720px",
      96: "768px",
      120: "960px",
      128: "1024px",
      150: "1200px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
    },
    borderRadius: {
      DEFAULT: "16px",
      null: "0px",
      smaller: "2px",
      button: "4px",
      small: "8px",
      searchbar: "28px",
      full: "9999px",
    },
    boxShadow: {
      px: "0px 0px 0px 1px #E0DED8",
      small: "0px 4px 16px rgba(17, 17, 17, 0.08)",
      large: "0px 24px 32px rgba(17, 17, 17, 0.08);",
    },
    hyphens: {
      auto: "auto",
      none: "none",
    },
    extend: {
      maxWidth: {
        container: "1440px",
        32: "256px",
      },
      minHeight: {
        0: "0",
        15: "120px",
        48: "384px",
        full: "100%",
        screen: "100vh",
      },
      maxHeight: {
        99999: "99999px",
      },
    },
  },
  variants: {
    // Define variants
  },
  plugins: [globalStyles],
};
