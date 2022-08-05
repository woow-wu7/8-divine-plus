<template>
  <Wrap>
    <template v-slot:components>
      <DvBreadcrumb :separator-icon="ArrowRight">
        <DvBreadcrumbItem :to="{ path: '/home' }">主页</DvBreadcrumbItem>
        <DvBreadcrumbItem><a href="/">列表</a></DvBreadcrumbItem>
        <DvBreadcrumbItem>详情</DvBreadcrumbItem>
      </DvBreadcrumb>
    </template>
  </Wrap>

  <Wrap>
    <template v-slot:components>
      <DvBreadcrumb>
        <DvBreadcrumbItem :to="{ path: '/home' }">主页</DvBreadcrumbItem>
        <DvBreadcrumbItem><a href="/">列表</a></DvBreadcrumbItem>
        <DvBreadcrumbItem>详情</DvBreadcrumbItem>
      </DvBreadcrumb>
    </template>
  </Wrap>
</template>

<script setup lang="ts">
import Wrap from "../theme/ComponentWrap.vue";
import { ArrowRight } from "@element-plus/icons-vue";
</script>
<style>
.divider-horizontal {
  border: 1px solid #f0f0f0;
  padding: 20px;
}
</style>
