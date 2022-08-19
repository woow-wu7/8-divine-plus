<template>
  <section class="app">
    <h1>APP</h1>
    <TestDefineExposeFather />
    <TestScrollTop />
  </section>
</template>

<script setup>
import TestDefineExposeFather from "./component/test-define-expose-father.vue";
import TestScrollTop from "./component/test-scroll-top.vue";
</script>

<style lang="scss" scoped>
.app {
  border: 1px solid black;
  padding: 30px;
}
</style>
