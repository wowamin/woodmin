// vite.config.js
import { defineConfig } from "file:///Users/linmin/Desktop/woodmin/node_modules/vite/dist/node/index.js";
import { ViteEjsPlugin } from "file:///Users/linmin/Desktop/woodmin/node_modules/vite-plugin-ejs/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "file:///Users/linmin/Desktop/woodmin/node_modules/glob/dist/mjs/index.js";
import liveReload from "file:///Users/linmin/Desktop/woodmin/node_modules/vite-plugin-live-reload/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///Users/linmin/Desktop/woodmin/vite.config.js";
function moveOutputPlugin() {
  return {
    name: "move-output",
    enforce: "post",
    apply: "build",
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith("pages/")) {
          const newFileName = fileName.slice("pages/".length);
          bundle[fileName].fileName = newFileName;
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: "/woodmin/",
  plugins: [
    liveReload(["./layout/**/*.ejs", "./pages/**/*.ejs", "./pages/**/*.html"]),
    ViteEjsPlugin(),
    moveOutputPlugin()
  ],
  server: {
    // 啟動 server 時預設開啟的頁面
    open: "pages/index.html"
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync("pages/**/*.html").map((file) => [
          path.relative("pages", file.slice(0, file.length - path.extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      )
    },
    outDir: "dist"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGlubWluL0Rlc2t0b3Avd29vZG1pblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2xpbm1pbi9EZXNrdG9wL3dvb2RtaW4vdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2xpbm1pbi9EZXNrdG9wL3dvb2RtaW4vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IFZpdGVFanNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1lanMnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgeyBnbG9iIH0gZnJvbSAnZ2xvYic7XG5cbmltcG9ydCBsaXZlUmVsb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLWxpdmUtcmVsb2FkJztcblxuZnVuY3Rpb24gbW92ZU91dHB1dFBsdWdpbigpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnbW92ZS1vdXRwdXQnLFxuICAgIGVuZm9yY2U6ICdwb3N0JyxcbiAgICBhcHBseTogJ2J1aWxkJyxcbiAgICBhc3luYyBnZW5lcmF0ZUJ1bmRsZShvcHRpb25zLCBidW5kbGUpIHtcbiAgICAgIGZvciAoY29uc3QgZmlsZU5hbWUgaW4gYnVuZGxlKSB7XG4gICAgICAgIGlmIChmaWxlTmFtZS5zdGFydHNXaXRoKCdwYWdlcy8nKSkge1xuICAgICAgICAgIGNvbnN0IG5ld0ZpbGVOYW1lID0gZmlsZU5hbWUuc2xpY2UoJ3BhZ2VzLycubGVuZ3RoKTtcbiAgICAgICAgICBidW5kbGVbZmlsZU5hbWVdLmZpbGVOYW1lID0gbmV3RmlsZU5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAvLyBiYXNlIFx1NzY4NFx1NUJFQlx1NkNENVx1RkYxQVxuICAvLyBiYXNlOiAnL1JlcG9zaXRvcnkgXHU3Njg0XHU1NDBEXHU3QTMxLydcbiAgYmFzZTogJy93b29kbWluLycsXG4gIHBsdWdpbnM6IFtcbiAgICBsaXZlUmVsb2FkKFsnLi9sYXlvdXQvKiovKi5lanMnLCAnLi9wYWdlcy8qKi8qLmVqcycsICcuL3BhZ2VzLyoqLyouaHRtbCddKSxcbiAgICBWaXRlRWpzUGx1Z2luKCksXG4gICAgbW92ZU91dHB1dFBsdWdpbigpLFxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICAvLyBcdTU1NUZcdTUyRDUgc2VydmVyIFx1NjY0Mlx1OTgxMFx1OEEyRFx1OTU4Qlx1NTU1Rlx1NzY4NFx1OTgwMVx1OTc2MlxuICAgIG9wZW46ICdwYWdlcy9pbmRleC5odG1sJyxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDogT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgICBnbG9iXG4gICAgICAgICAgLnN5bmMoJ3BhZ2VzLyoqLyouaHRtbCcpXG4gICAgICAgICAgLm1hcCgoZmlsZSkgPT4gW1xuICAgICAgICAgICAgcGF0aC5yZWxhdGl2ZSgncGFnZXMnLCBmaWxlLnNsaWNlKDAsIGZpbGUubGVuZ3RoIC0gcGF0aC5leHRuYW1lKGZpbGUpLmxlbmd0aCkpLFxuICAgICAgICAgICAgZmlsZVVSTFRvUGF0aChuZXcgVVJMKGZpbGUsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAgIF0pXG4gICAgICApLFxuICAgIH0sXG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVEsU0FBUyxvQkFBb0I7QUFDdFMsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsWUFBWTtBQUVyQixPQUFPLGdCQUFnQjtBQU4ySSxJQUFNLDJDQUEyQztBQVFuTixTQUFTLG1CQUFtQjtBQUMxQixTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxNQUFNLGVBQWUsU0FBUyxRQUFRO0FBQ3BDLGlCQUFXLFlBQVksUUFBUTtBQUM3QixZQUFJLFNBQVMsV0FBVyxRQUFRLEdBQUc7QUFDakMsZ0JBQU0sY0FBYyxTQUFTLE1BQU0sU0FBUyxNQUFNO0FBQ2xELGlCQUFPLFFBQVEsRUFBRSxXQUFXO0FBQUEsUUFDOUI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBO0FBQUE7QUFBQSxFQUcxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxXQUFXLENBQUMscUJBQXFCLG9CQUFvQixtQkFBbUIsQ0FBQztBQUFBLElBQ3pFLGNBQWM7QUFBQSxJQUNkLGlCQUFpQjtBQUFBLEVBQ25CO0FBQUEsRUFDQSxRQUFRO0FBQUE7QUFBQSxJQUVOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixPQUFPLE9BQU87QUFBQSxRQUNaLEtBQ0csS0FBSyxpQkFBaUIsRUFDdEIsSUFBSSxDQUFDLFNBQVM7QUFBQSxVQUNiLEtBQUssU0FBUyxTQUFTLEtBQUssTUFBTSxHQUFHLEtBQUssU0FBUyxLQUFLLFFBQVEsSUFBSSxFQUFFLE1BQU0sQ0FBQztBQUFBLFVBQzdFLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLFFBQzlDLENBQUM7QUFBQSxNQUNMO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLEVBQ1Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
