<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";

const state = ref({
  obj: {
    name: "",
  },
});

const {
  obj: { name },
} = state.value;
console.log(name);
</script>

<template>
  <router-view />
</template>

<style>
@import "@/assets/base.css";

#app {
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  width: 90vw;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
