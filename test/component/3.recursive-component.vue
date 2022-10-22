<template>
  <div v-for="item in list">
    <h6>{{ item.name }}</h6>

    <!-- 递归组件的条件 -->
    <div v-if="item.children" style="margin-left: 30px">
      <Recursive :list="item.children" />
    </div>
  </div>
</template>

<script>
// vue 递归组件
// 1
// 应用场景
// - 树形组件
// - 菜单
// - 多级表格
export default {
  name: "Recursive",
};
</script>

<script setup>
defineProps({
  list: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<style lang="scss" scoped></style>
