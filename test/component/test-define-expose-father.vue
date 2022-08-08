<template>
  <section class="define-expose-father">
    <h4>测试 defineExpose</h4>
    <button @click="getChildData">获取子组件中的数据</button>
    <TestDefinePropsChild ref="ChildComponentRef" />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TestDefinePropsChild from "./test-define-expose-child.vue";

const ChildComponentRef = ref<any>();

const getChildData = () => {
  console.log("count", ChildComponentRef.value.count);
  console.log("doubleCount", ChildComponentRef.value.state.doubleCount);
};
</script>

<style lang="scss" scoped>
.define-expose-father {
  border: 1px solid red;
  padding: 10px;
}
</style>
