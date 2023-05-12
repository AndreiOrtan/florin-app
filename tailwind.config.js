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
