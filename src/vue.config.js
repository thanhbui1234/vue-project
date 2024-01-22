// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VitePluginVueJSX from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), VitePluginVueJSX()],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
