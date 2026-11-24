import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  cacheDir: ".vite",
  plugins: [tailwindcss()],
  server: { host: "127.0.0.1", port: 1420, strictPort: true },
});
