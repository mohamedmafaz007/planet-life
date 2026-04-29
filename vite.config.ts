import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
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
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (
              id.includes('/react/') ||
              id.includes('/react-dom/') ||
              id.includes('/react-router-dom/')
            ) {
              return 'vendor-react';
            }
            if (
              id.includes('/framer-motion/') ||
              id.includes('/@radix-ui/react-dialog/') ||
              id.includes('/@radix-ui/react-tabs/') ||
              id.includes('/@radix-ui/react-select/')
            ) {
              return 'vendor-ui';
            }
            if (
              id.includes('/three/') ||
              id.includes('/@react-three/fiber/') ||
              id.includes('/@react-three/drei/')
            ) {
              return 'vendor-three';
            }
          }
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
