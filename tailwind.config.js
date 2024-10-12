/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
  safelist: [
    "h-8",
    "h-9",
    "h-10",
    "h-11",
    "h-12",
    "h-14",
    "h-16",
    "h-20",
    "h-24",
    "h-28",
    "bg-[#dc2626]",
    "bg-[#d97706]",
    "bg-[#059669]",
    "bg-[#0284c7]",
    "bg-[#6366F1]",
    "bg-[#e11d48]",
    "bg-[#0891b2]",
    "bg-[#52525b]",
    "bg-[#0f172a]",
    "bg-[#6366f1]",
    "text-[#dc2626]",
    "text-[#d97706]",
    "text-[#059669]",
    "text-[#0284c7]",
    "text-[#6366F1]",
    "text-[#e11d48]",
    "text-[#0891b2]",
    "text-[#52525b]",
    "text-[#0f172a]",
    "text-[#6366f1]",
  ],
};
