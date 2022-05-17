import vue from "@vitejs/plugin-vue";

// 自动引入 components
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// 自动引入 api
import AutoImport from "unplugin-auto-import/vite";

// windicss
import WindiCSS from "vite-plugin-windicss";
import Pages from "vite-plugin-pages";

export const getPlugins = (mode: string) => {
  const isDev = mode == "development";
  return [
    vue(),
    WindiCSS(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          // 按需加载时使用less文件的样式,用于主题色更改
          importStyle: isDev ? false : "less",
          resolveIcons: true,
        }),
      ],
      dirs: ["src/components", "src/common/components"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "./types/components.d.ts",
    }),

    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
      ],
      // global imports to register
      imports: [
        // presets
        "vue",
        "vue-router",
        // custom
        {
          // 自定义配置引入，比如引入 ant-design 的 message
          "ant-design-vue": ["message"],
          // "@/common/utils/storage": ["storage"],
          // '@vueuse/core': [
          //   'useMouse'
          // ],
          // '[package-name]': [
          //   '[import-names]',
          //   // alias
          //   ['[from]', '[alias]']
          // ]
        },
      ],
      dts: "./types/auto-imports.d.ts",
      // custom resolvers
      // see https://github.com/antfu/unplugin-auto-import/pull/23/
      resolvers: [],
    }),
    Pages({
      dirs: [
        {
          dir: "src/views/demo",
          baseRoute: "demo",
        },
      ],
    }),
  ];
};
