/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        t_blue: "#c2e3f2",
        t_yellow: "#eef2c1",
        t_pink: "#fbdde2",
        t_green: "#c8e4cd",
        t_origin: "#fbdfb8",
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
};
