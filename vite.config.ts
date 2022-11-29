/*
 * @Description: vite配置文件
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-28 13:27:51
 * @LastEditTime: 2022-11-29 20:23:40
 * @LastEditors: 安知鱼
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: ["chrome58"],
    minify: "terser",
    rollupOptions: {
      output: {
        format: "iife",
        name: "output.js",
      },
    },
    sourcemap: false,
    assetsInlineLimit: 4096,
    terserOptions: {
      compress: {
        // 打包自动删除console
        drop_console: true,
        drop_debugger: true,
      },
      keep_classnames: true,
      toplevel: true,
      ie8: true,
    },
  },
});
