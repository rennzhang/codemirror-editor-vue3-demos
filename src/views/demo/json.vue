<template>
  <Codemirror
    :options="cmOptions"
    :height="300"
    class="cm-component"
    @ready="onReady"
    v-model:value="code"
    :border="false"
  />
</template>
<script lang="ts">
import { ref, defineComponent, } from "vue";
import { Editor, EditorSelectionChange } from "codemirror";
import Codemirror from "codemirror-editor-vue3";

export default defineComponent({
  components: {
    Codemirror,
  },
  setup() {
    const code = ref(`{
  "name": "vue-project",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview --port 5050"
  },
  "dependencies": {
    "@ant-design/icons-vue": "^6.1.0",
    "@codemirror/lang-javascript": "^0.19.7",
    "@codemirror/language": "^0.19.8",
    "ant-design-vue": "^3.0.0-alpha.14",
    "codemirror": "^5.65.2",
    "codemirror-editor-vue3": "2.4.0",
    "pinia": "^2.0.6",
    "vue": "^3.2.26",
    "vue-router": "^4.0.12",
    "windicss": "^3.5.1"
  },
  "devDependencies": {
    "@types/codemirror": "^5.60.5",
    "@types/node": "^16.11.12",
    "@vitejs/plugin-vue": "^2.0.0",
    "@vitejs/plugin-vue-jsx": "^1.3.1",
    "codesandbox": "^2.2.3",
    "less": "^4.1.2",
    "typescript": "~4.5.3",
    "unplugin-auto-import": "latest",
    "unplugin-vue-components": "latest",
    "vite": "latest",
    "vite-plugin-pages": "^0.22.0",
    "vite-plugin-windicss": "^1.8.3",
    "vue-tsc": "latest"
  }
}`);

    return {
      code,
      cmOptions: {
        value: code.value,
        mode: "application/json",
        lineNumbers: true,
        highlightDifferences: true,
        theme: 'default',
        lineWrapping: true,
      },
      onReady(cm: any) {
        const cminstance: Editor = cm;
        console.log(cminstance.getValue());
      },
    };
  },
});
</script>
