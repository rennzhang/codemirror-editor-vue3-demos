import { createApp } from "vue";
import { createPinia } from "pinia";

// import { GlobalCmComponent } from "codemirror-editor-vue3";
import App from "./App.vue";
import router from "./router";
// 如果当前为开发环境，则全量引入样式，避免自动引入样式慢的问题
import.meta.env.DEV &&
  setTimeout(() => import("ant-design-vue/dist/antd.less"));
import "virtual:windi.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(GlobalCmComponent, { componentName: "Codemirror" });
app.mount("#app");
// import Codemirror from "../../codemirror-editor-vue3-pkg/dist/codemirror-editor-vue3.es";
