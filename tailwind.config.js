/** @type {import('tailwindcss').Config} */

const backgroundColors = {
  brand: "hsl(var(--color-bg-brand) / <alpha-value>)",
  "brand-hovered": "hsl(var(--color-bg-brand-hovered) / <alpha-value>)",
  subtle: "hsl(var(--color-bg-subtle) / <alpha-value>)",
  success: "hsl(var(--color-bg-success) / <alpha-value>)",
  surface: "hsl(var(--elevation-surface) / <alpha-value>)",
};

const textColors = {
  neutral: {
    DEFAULT: "hsl(var(--color-text-neutral) / <alpha-value>)",
    inverse: "hsl(var(--color-text-inverse) / <alpha-value>)",
  },
  subtle: "hsl(var(--color-text-subtle) / <alpha-value>)",
  optional: "hsl(var(--color-text-optional) / <alpha-value>)",
  danger: "hsl(var(--color-text-danger) / <alpha-value>)",
};

const borderColors = {
  subtle: "hsl(var(--color-border-subtle) / <alpha-value>)",
  focused: "hsl(var(--color-border-focused) / <alpha-value>)",
  danger: "hsl(var(--color-border-danger) / <alpha-value>)",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
    },
    fontSize: {
      "body-sm": ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
      "body-md-regular": ["1.125rem", { lineHeight: "1.5", fontWeight: "400" }],
      "body-md-bold": ["1.125rem", { lineHeight: "1.5", fontWeight: "700" }],
      heading: [
        "2rem",
        { lineHeight: "1", fontWeight: "700", letterSpacing: "-1px" },
      ],
    },
    spacing: {
      0: "0",
      100: "0.5rem",
      150: "0.75rem",
      200: "1rem",
      300: "1.5rem",
      400: "2rem",
      500: "2.5rem",
      1600: "8rem",
    },
    borderRadius: {
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
    },
    extend: {
      aria: {
        invalid: "invalid=true",
      },
      // Background concerns
      backgroundColor: backgroundColors,
      gradientColorStops: backgroundColors,
      // ...

      // Border concerns
      borderColor: borderColors,
      stroke: borderColors,
      outlineColor: borderColors,
      ringColor: borderColors,
      // ...

      textColor: textColors,
      accentColor: backgroundColors,
      fill: textColors,
      // ...
    },
  },
  plugins: [],
};
