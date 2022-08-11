<template>
  <section class="app">
    <section class="block">
      <h4>Divider测试</h4>
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
    </section>

    <section class="block">
      <h4>Breadcrumb测试</h4>
      <DvBreadcrumb :separator-icon="ArrowRight">
        <DvBreadcrumbItem :to="{ path: '/home' }">主页</DvBreadcrumbItem>
        <DvBreadcrumbItem><a href="/">列表</a></DvBreadcrumbItem>
        <DvBreadcrumbItem>详情</DvBreadcrumbItem>
      </DvBreadcrumb>
    </section>

    <section class="block">
      <h4>Container, Header, Aside, Main 测试</h4>
      <DvContainer>
        <DvHeader class="header">header</DvHeader>
        <DvContainer>
          <DvAside class="aside">aside</DvAside>
          <DvMain class="main">main</DvMain>
        </DvContainer>
        <DvFooter class="footer">footer</DvFooter>
      </DvContainer>
    </section>

    <section class="block">
      <h4>Badge 测试</h4>
      <DvBadge value="7">
        <button>按钮</button>
      </DvBadge>
    </section>

    <!-- 测试 md-loader 把 markdown 转成 HTML -->
    <div v-html="ContainerMd"></div>
  </section>
</template>

<script setup>
import { ArrowRight } from "@element-plus/icons-vue";
import ContainerMd from "../docs/components/container.md";
</script>

<style lang="scss" scoped>
.block {
  border: 1px solid red;
  padding: 20px;
  margin: 20px;
}

// container
.header,
.footer,
.main,
.aside {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  background: #c6e2ff;
}
.footer {
  background: #c6e2ff;
}
.main {
  height: 160px;
  background: #ecf5ff;
}
.aside {
  height: 160px;
  background: #d9ecff;
}
</style>
