import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@softium/core": resolve(__dirname, "../../packages/core/src"),
      "@softium/button": resolve(__dirname, "../../packages/button/src"),
      "@softium/input": resolve(__dirname, "../../packages/input/src"),
    },
  },
});
