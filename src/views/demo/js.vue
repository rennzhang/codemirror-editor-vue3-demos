<template>
  <Codemirror
    :options="cmOptions"
    :height="300"
    :width="500"
    class="cm-component"
    @ready="onReady"
    v-model:value="code"
    :border="true"
  />
</template>
<script lang="ts">
import { ref, defineComponent, } from "vue";
import { Editor, EditorSelectionChange } from "codemirror";
import Codemirror from "codemirror-editor-vue3";
// language
import "codemirror/mode/javascript/javascript.js";
import "codemirror/addon/selection/active-line";

// theme
// import "codemirror/theme/";

export default defineComponent({
  components: {
    Codemirror,
  },
  setup() {
    const code = ref(`function findSequence(goal) {
  function find(start, history) {
    if (start == goal)
      return history;
    else if (start > goal)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}`);

    return {
      code,
      cmOptions: {
        mode: "javascript",
        lineNumbers: true,
        highlightDifferences: true,
        lineWiseCopyCut: true,
        styleActiveLine: true
      },
      onReady(cm: any) {
        const cminstance: Editor = cm;
        console.log(cminstance.getValue());
      },
    };
  },
});
</script>
<style lang="less" scoped>
.cm-component {
  font-size: 13px;
  border-radius: none;
  font-family: monospace;

}

</style>
