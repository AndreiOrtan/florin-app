/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // extend: {
    //   backgroundImage: {
    //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //     "gradient-conic":
    //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    //   },
    // },
    screens: {
      sm: "500px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      body: ["Roboto"],
    },
    colors: {
      green: "#C9E6C7",
      blue: "#C2D9EF",
      lightgray: "#EFEFEF",
      offwhite: "#F9F9F9",
      lightblue: "#C2D9EF",
      lightgreen: "#C9E6C7",
      gray900: "#111827",
      gray100: "#f3f4f6",
      transparent: "transparent",
      blue700: "#3987F1",
      white: "white",
    },
  },
  plugins: [],
};
