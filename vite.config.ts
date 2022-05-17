// https://vitejs.dev/config/
import { resolve } from "path";
import { defineConfig } from "vite";
import { getPlugins } from "./build/vite.dev";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}
export default ({ mode }: any) => {
  return defineConfig({
    plugins: getPlugins(mode),
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve("src") + "/",
        },
      ],
    },
    css: {
      preprocessorOptions: {
        less: {
          // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
          // 给导入的路径最后加上 ;
          // additionalData: "@import './src/common/theme/vars.less'; @import './src/style/var.less';",
          javascriptEnabled: true,
        },
      },
    },
    server: {
      host: "::",
      open: true,
      port: 3004,
      https: false,
      // 代理配置
      proxy: {
        "/api": {
          target: "http://172.24.15.10:9999",
          changeOrigin: true,
          rewrite: (url) => url.replace(/^\/api/, ""),
        },
      },
    },
    // 生产环境路径，类似webpack的assetsPath
    base: "./",
  });
};
