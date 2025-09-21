import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./resources/**/*.jsx",
    "./resources/**/*.tsx",

    // Laravel view cache
    "./storage/framework/views/*.php",

    // Pagination & view bawaan Laravel
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Instrument Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#1e40af", // biru indigo
        secondary: "#9333ea", // ungu
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },
  },
  plugins: [
    forms,
    typography,
    aspectRatio,
  ],
};
