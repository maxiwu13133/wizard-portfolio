/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        muted: "rgb(var(--muted))",
        accent: "rgb(var(--accent))",
      },
      backgroundImage: {
        "firefly-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(253, 253, 80, 0.5) 0%, rgba(217, 217, 217, 0) 100%)",
      },
      boxShadow: {
        "glass-inset": "inset 0 17px 5px -9px rgba(254, 254, 91, 0.05)",
        "glass-sm": "5px 5px 20px 0px rgba(254, 254, 91, 0.03)",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        firefly: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-slow-reverse": "spin-reverse 40s linear infinite",
        firefly: "firefly 3s infinite ease-in-out alternate"
      },
    },
  },
  plugins: [],
};
