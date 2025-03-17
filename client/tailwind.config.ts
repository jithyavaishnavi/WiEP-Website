module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "jithya24wixstudiocomblack-charcoal":
          "var(--jithya24wixstudiocomblack-charcoal)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "jithya24-wixstudio-com-gloock-regular":
          "var(--jithya24-wixstudio-com-gloock-regular-font-family)",
        "jithya24-wixstudio-com-inter-bold":
          "var(--jithya24-wixstudio-com-inter-bold-font-family)",
        "jithya24-wixstudio-com-inter-regular":
          "var(--jithya24-wixstudio-com-inter-regular-font-family)",
        "jithya24-wixstudio-com-montserrat-regular":
          "var(--jithya24-wixstudio-com-montserrat-regular-font-family)",
        "jithya24-wixstudio-com-playfair-display-regular":
          "var(--jithya24-wixstudio-com-playfair-display-regular-font-family)",
        "jithya24-wixstudio-com-semantic-heading-1":
          "var(--jithya24-wixstudio-com-semantic-heading-1-font-family)",
        "jithya24-wixstudio-com-semantic-heading-2":
          "var(--jithya24-wixstudio-com-semantic-heading-2-font-family)",
        "jithya24-wixstudio-com-semantic-heading-3":
          "var(--jithya24-wixstudio-com-semantic-heading-3-font-family)",
        "jithya24-wixstudio-com-semantic-label":
          "var(--jithya24-wixstudio-com-semantic-label-font-family)",
        "jithya24-wixstudio-com-semantic-link":
          "var(--jithya24-wixstudio-com-semantic-link-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
