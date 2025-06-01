import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    /*screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },*/
    extend: {
      colors: {
        theme: {
          primary: "#FFFEFA",
          secondary: "#FFF",
          tertiary: "#FAFEFD",
        },
        none: "#ffffff",
        black: "#000000",
        white: "#ffffff",
        slate: colors.slate,
        gray: colors.gray,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "sans-serif"],
        heading: ['"Space Grotesk"', "sans-serif"],
      },
      fontSize: {
        h1: ["48px", "normal"],
        h2: ["32px", "normal"],
        h3: ["24px", "normal"],
        h4: ["20px", "normal"],
        title: ["18px", "normal"],
      },
      fontWeight: {
        normal: "400",
      },
    },
  },
  plugins: [],
};

export default config; 