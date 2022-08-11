<template>
  <section class="component-wrap">
    <header>
      <slot name="components"></slot>
    </header>
    <footer v-if="true" @click="visible = !visible">
      <span>查看代码</span>
    </footer>
    <main v-if="visible" v-html="md"></main>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Markdown from "vue3-markdown-it";

const visible = ref(false);

defineProps({
  code: String,
  md: String,
});
</script>

<style lang="scss" scoped>
.component-wrap {
  margin: 10px 0px;
  border: 1px solid #f0f0f0;

  header,
  main,
  footer {
    border-top: 1px solid #f0f0f0;
    padding: 20px;
  }

  header {
    border-top: 0;
  }
  footer {
    cursor: pointer;
  }
  main {
    background: rgb(66, 66, 66);
  }
}
</style>
