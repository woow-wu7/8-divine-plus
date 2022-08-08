<template>
  <section class="app">
    <h1>APP</h1>
    <TestDefineExposeFather />
  </section>
</template>

<script setup lang="ts">
import TestDefineExposeFather from "./component/test-define-expose-father.vue";
</script>

<style lang="scss" scoped>
.app {
  border: 1px solid black;
  padding: 30px;
}
</style>
