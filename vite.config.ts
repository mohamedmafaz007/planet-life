import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Increase chunk warning limit for media-heavy site
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Split vendor code and heavy pages into separate chunks
        manualChunks: {
          // Core React libs — cached separately (rarely changes)
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // UI framework
          "vendor-ui": ["framer-motion", "@radix-ui/react-dialog", "@radix-ui/react-tabs", "@radix-ui/react-select"],
          // 3D libs — only needed on specific pages
          "vendor-three": ["three", "@react-three/fiber", "@react-three/drei"],
        },
        // Organize output files by type
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || "";
          // Put videos in their own folder for easy CDN caching
          if (name.endsWith(".mp4")) {
            return "assets/videos/[name]-[hash][extname]";
          }
          // Images in their own folder
          if (/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(name)) {
            return "assets/images/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
}));
