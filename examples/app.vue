<template>
  <section class="app">
    <div class="block">
      <div>Divider测试</div>
      <DvDivider direction="horizontal">
        <template v-slot:default>center</template>
      </DvDivider>
      <DvDivider
        direction="horizontal"
        contentPosition="left"
        borderStyle="dashed"
      >
        <template v-slot:default>left</template>
      </DvDivider>
      <DvDivider direction="horizontal" contentPosition="right">
        <template v-slot:default>right</template>
      </DvDivider>
      <div>divider测试</div>
    </div>

    <div class="block">
      <div>Breadcrumb测试</div>
      <DvBreadcrumb :separator-icon="ArrowRight">
        <DvBreadcrumbItem :to="{ path: '/home' }">主页</DvBreadcrumbItem>
        <DvBreadcrumbItem><a href="/">列表</a></DvBreadcrumbItem>
        <DvBreadcrumbItem>详情</DvBreadcrumbItem>
      </DvBreadcrumb>
    </div>

    <div class="block">
      <div>Header测试</div>
      <DvContainer>
        <DvHeader>header</DvHeader>
        <DvMain>main</DvMain>
        <DvFooter>footer</DvFooter>
      </DvContainer>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.block {
  border: 1px solid red;
  padding: 20px;
  margin: 20px;
}
</style>
