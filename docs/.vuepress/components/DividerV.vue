<template>
  <div class="divider-vertical">
    <span>left</span>
    <DvDivider direction="vertical"></DvDivider>
    <span>right</span>
  </div>
</template>

<script setup lang="ts">
import DvDivider from "../../../packages/components/divider/index.vue";
import "../../../packages/theme-chalk/divider.scss";
</script>
<style>
.divider-vertical {
  border: 1px solid #f0f0f0;
  padding: 20px;
}
</style>
