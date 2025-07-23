import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  return {
    root: ".",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      isDev && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        input: isDev
          ? resolve(__dirname, "index.dev.html")
          : resolve(__dirname, "index.html"),
      },
    },
  };
});
