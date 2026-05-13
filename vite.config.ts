import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ isSsrBuild }) => ({
  build: {
    rollupOptions: isSsrBuild
      ? {
          input: "./server/app.ts",
        }
      : undefined,
  },
  // GSAP and Lenis ship as CJS; tell Vite to bundle them for SSR so their
  // named exports (e.g. `ScrollTrigger`) are interop-converted properly.
  ssr: {
    noExternal: ["gsap", "lenis"],
  },
  optimizeDeps: {
    include: ["gsap", "gsap/ScrollTrigger", "lenis"],
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
}));
