// client/vite.config.js
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default ({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    // Ensure react() is always the first plugin in the array
    react(),
    // componentTagger is only active in development mode, place it after react()
    mode === "development" && componentTagger(),
  ].filter(Boolean), // .filter(Boolean) removes any falsey values
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
