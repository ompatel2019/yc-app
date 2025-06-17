// tailwind.config.js
export default {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          "work-sans": ["var(--font-work-sans)", "sans-serif"],
        },
      },
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  };
  