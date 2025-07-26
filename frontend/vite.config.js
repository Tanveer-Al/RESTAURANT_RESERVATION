import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/api": "https://restaurant-reservation-8t43.onrender.com/",
  //   },
  // },
  plugins: [react()],
});
