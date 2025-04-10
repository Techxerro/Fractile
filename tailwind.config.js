/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-", // Add the prefix here
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        md: ["Gt-America-Medium-trial", "sans-serif"],
        reg: ["Gt-America-Regular-trial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
