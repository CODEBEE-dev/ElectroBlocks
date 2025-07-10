import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import commonjs from "@rollup/plugin-commonjs"; // Import the plugin

export default defineConfig(({ mode, command }) => {
  const isBuild = command === "build";
  return {
    plugins: [commonjs({ sourceMap: true }), sveltekit()],
    base: isBuild ? "/editor/arduino/" : "/",
  };
});
