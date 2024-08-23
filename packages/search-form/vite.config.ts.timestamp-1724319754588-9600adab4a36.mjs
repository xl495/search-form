// vite.config.ts
import { defineConfig } from "file:///Users/huangxinliang/web/search-form/node_modules/.pnpm/vite@4.5.0_sass@1.69.5/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/huangxinliang/web/search-form/node_modules/.pnpm/@vitejs+plugin-vue@4.4.0_vite@4.5.0_sass@1.69.5__vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import dts from "file:///Users/huangxinliang/web/search-form/node_modules/.pnpm/vite-plugin-dts@3.7.3_rollup@3.29.4_typescript@5.0.2_vite@4.5.0_sass@1.69.5_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/huangxinliang/web/search-form/packages/search-form";
var vite_config_default = defineConfig({
  plugins: [
    dts({
      outDir: ["./dts"],
      include: ["./src/"]
    }),
    vue()
  ],
  base: "./",
  build: {
    target: "modules",
    //打包文件目录
    outDir: "es",
    //压缩
    minify: true,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue、element-plus
      external: ["vue", "element-plus"],
      input: ["./src/search-form/index.ts"],
      output: [
        {
          format: "es",
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: resolve(__vite_injected_original_dirname, "./ui/es")
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: resolve(__vite_injected_original_dirname, "./ui/lib")
        }
      ]
    },
    lib: {
      entry: "./index.js",
      formats: ["es", "cjs"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaHVhbmd4aW5saWFuZy93ZWIvc2VhcmNoLWZvcm0vcGFja2FnZXMvc2VhcmNoLWZvcm1cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9odWFuZ3hpbmxpYW5nL3dlYi9zZWFyY2gtZm9ybS9wYWNrYWdlcy9zZWFyY2gtZm9ybS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvaHVhbmd4aW5saWFuZy93ZWIvc2VhcmNoLWZvcm0vcGFja2FnZXMvc2VhcmNoLWZvcm0vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBVc2VyQ29uZmlnLCBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBkdHMoe1xuICAgICAgb3V0RGlyOiBbJy4vZHRzJ10sXG4gICAgICBpbmNsdWRlOiBbJy4vc3JjLyddLFxuICAgIH0pLFxuICAgIHZ1ZSgpXG4gIF0sXG4gIGJhc2U6ICcuLycsXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnbW9kdWxlcycsXG4gICAgLy9cdTYyNTNcdTUzMDVcdTY1ODdcdTRFRjZcdTc2RUVcdTVGNTVcbiAgICBvdXREaXI6ICdlcycsXG4gICAgLy9cdTUzOEJcdTdGMjlcbiAgICBtaW5pZnk6IHRydWUsXG4gICAgLy9jc3NcdTUyMDZcdTc5QkJcbiAgICAvL2Nzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvL1x1NUZGRFx1NzU2NVx1NjI1M1x1NTMwNXZ1ZVx1MzAwMWVsZW1lbnQtcGx1c1xuICAgICAgZXh0ZXJuYWw6IFsndnVlJywgJ2VsZW1lbnQtcGx1cyddLFxuICAgICAgaW5wdXQ6IFsnLi9zcmMvc2VhcmNoLWZvcm0vaW5kZXgudHMnXSxcbiAgICAgIG91dHB1dDogW1xuICAgICAgICB7XG4gICAgICAgICAgZm9ybWF0OiAnZXMnLFxuICAgICAgICAgIC8vXHU0RTBEXHU3NTI4XHU2MjUzXHU1MzA1XHU2MjEwLmVzLmpzLFx1OEZEOVx1OTFDQ1x1NjIxMVx1NEVFQ1x1NjBGM1x1NjI4QVx1NUI4M1x1NjI1M1x1NTMwNVx1NjIxMC5qc1xuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmpzJyxcbiAgICAgICAgICAvL1x1OEJBOVx1NjI1M1x1NTMwNVx1NzZFRVx1NUY1NVx1NTQ4Q1x1NjIxMVx1NEVFQ1x1NzZFRVx1NUY1NVx1NUJGOVx1NUU5NFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICAgIC8vXHU5MTREXHU3RjZFXHU2MjUzXHU1MzA1XHU2ODM5XHU3NkVFXHU1RjU1XG4gICAgICAgICAgZGlyOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vdWkvZXMnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZvcm1hdDogJ2NqcycsXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxuICAgICAgICAgIC8vXHU4QkE5XHU2MjUzXHU1MzA1XHU3NkVFXHU1RjU1XHU1NDhDXHU2MjExXHU0RUVDXHU3NkVFXHU1RjU1XHU1QkY5XHU1RTk0XG4gICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXG4gICAgICAgICAgLy9cdTkxNERcdTdGNkVcdTYyNTNcdTUzMDVcdTY4MzlcdTc2RUVcdTVGNTVcbiAgICAgICAgICBkaXI6IHJlc29sdmUoX19kaXJuYW1lLCAnLi91aS9saWInKSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiAnLi9pbmRleC5qcycsXG4gICAgICBmb3JtYXRzOiBbJ2VzJywgJ2NqcyddLFxuICAgIH0sXG4gIH1cbn0pIGFzIFVzZXJDb25maWdcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlYsU0FBcUIsb0JBQW9CO0FBQ3RZLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBSGhCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLFFBQVEsQ0FBQyxPQUFPO0FBQUEsTUFDaEIsU0FBUyxDQUFDLFFBQVE7QUFBQSxJQUNwQixDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsRUFDTjtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBO0FBQUEsSUFFUixRQUFRO0FBQUE7QUFBQSxJQUVSLFFBQVE7QUFBQTtBQUFBO0FBQUEsSUFHUixlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQyxPQUFPLGNBQWM7QUFBQSxNQUNoQyxPQUFPLENBQUMsNEJBQTRCO0FBQUEsTUFDcEMsUUFBUTtBQUFBLFFBQ047QUFBQSxVQUNFLFFBQVE7QUFBQTtBQUFBLFVBRVIsZ0JBQWdCO0FBQUE7QUFBQSxVQUVoQixpQkFBaUI7QUFBQSxVQUNqQixTQUFTO0FBQUE7QUFBQSxVQUVULEtBQUssUUFBUSxrQ0FBVyxTQUFTO0FBQUEsUUFDbkM7QUFBQSxRQUNBO0FBQUEsVUFDRSxRQUFRO0FBQUEsVUFDUixnQkFBZ0I7QUFBQTtBQUFBLFVBRWhCLGlCQUFpQjtBQUFBLFVBQ2pCLFNBQVM7QUFBQTtBQUFBLFVBRVQsS0FBSyxRQUFRLGtDQUFXLFVBQVU7QUFBQSxRQUNwQztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsSUFDdkI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
