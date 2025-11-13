import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "#FF8A00",
          green: "#3FAF3D"
        },
        warm: {
          white: "#FFF9F3"
        },
        neutral: {
          light: "#F2F2F2",
          dark: "#333333"
        },
        feedback: {
          error: "#FF3B30",
          success: "#3FAF3D"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      fontSize: {
        h1: ["24px", { lineHeight: "32px", fontWeight: "600" }],
        h2: ["20px", { lineHeight: "28px", fontWeight: "500" }],
        body: ["16px", { lineHeight: "24px", fontWeight: "400" }],
        small: ["13px", { lineHeight: "20px", fontWeight: "400" }]
      },
      spacing: {
        s: "8px",
        m: "16px",
        l: "24px",
        xl: "32px"
      },
      borderRadius: {
        pill: "9999px"
      },
      boxShadow: {
        card: "0 12px 24px -12px rgba(51, 51, 51, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
