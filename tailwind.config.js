/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        Tomato: "hsl(4, 100%, 67%)",
      },
      neural: {
        "Dark-Slate-Grey": "hsl(234, 29%, 20%)",
        "Charcoal-Grey;": "hsl(235, 18%, 26%)",
        Grey: "hsl(231, 7%, 60%)",
        White: "hsl(0, 0%, 100%)",
        green: "lightgreen"
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    fontWeight: {
      neutral: 400,
      bold: 700,
    },
    extend: {
      fontSize: {
        md: "16px"
      },
    },
  },
  plugins: [],
};
