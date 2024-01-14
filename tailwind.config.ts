import type { Config } from "tailwindcss"
import files from "./files"

export default {
  content: [...files],
  theme: {
    container: {
      screens: {
        lg: "1200px",
      },
      center: true,
      padding: "1rem",
    },
    extend: {
      boxShadow: {
        card: "0px 2px 6px -4px rgba(0, 11, 67, 0.10)",
      },
      colors: {
        body: "#f6f6f6",
        brand: {
          1: "#1254ff",
        },
        dark: {
          1: "#010021",
          2: "#293356",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
