import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // index.html out file will start with a relative path for script
  base: "./",
  server: {
    port: 3000,
  },
  build: {
    // disable this for low bundle sizes
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          kaplay: ["kaplay"],
        },
      },
    },
  },
  plugins: [tsconfigPaths()],
});
