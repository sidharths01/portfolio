/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        swiss: "-0.02em",
      },
      colors: {
        surface: {
          DEFAULT: "#0a0a0b",
          raised: "#111110",
        },
        grid: "#2a2a28",
        accent: {
          DEFAULT: "#3dffa8",
          dim: "#2dcc87",
          muted: "#5cbf94",
          subtle: "rgba(61, 255, 168, 0.1)",
        },
        ink: {
          DEFAULT: "#e8e8e6",
          muted: "#b0b0ab",
          faint: "#9a9a95",
        },
        claude: {
          border: "#c96442",
          label: "#ddb09a",
        },
      },
      maxWidth: {
        prose: "40rem",
      },
    },
  },
  plugins: [],
};