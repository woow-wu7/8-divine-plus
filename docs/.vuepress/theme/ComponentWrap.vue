<template>
  <section class="component-wrap">
    <header>
      <slot name="components"></slot>
    </header>
    <main v-if="visible">
      <slot name="md"></slot>
    </main>
    <footer v-if="false" @click="visible = !visible">查看代码</footer>
  </section>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);

defineProps({
  code: String,
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
}
</style>
