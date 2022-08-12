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
      <DvBreadcrumb style="margin-top: 18px">
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
      <h4>Row,Col 测试</h4>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
      </el-row>
    </section>

    <section class="block">
      <h4>Badge 测试</h4>
      <dv-badge :value="12" class="item">
        <button size="small">评论</button>
      </dv-badge>
      <dv-badge :value="199" :max="88" class="item">
        <button size="small">评论</button>
      </dv-badge>
      <dv-badge :value="199" :max="88" isDot class="item">
        <button size="small">评论</button>
      </dv-badge>
      <dv-badge :value="199" :max="88" type="primary" class="item">
        <button size="small">评论</button>
      </dv-badge>
      <dv-badge :value="199" :max="88" type="success" class="item">
        <button size="small">评论</button>
      </dv-badge>
      <dv-badge value="文本" :max="88" type="warning" class="item">
        <button size="small">评论</button>
      </dv-badge>
    </section>

    <!-- 测试 md-loader 把 markdown 转成 HTML -->
    <section>
      <div v-html="ContainerMd"></div>
      <highlightjs language="javascript" code="var x = 5;" />
    </section>
  </section>
</template>

<script setup>
import { ArrowRight } from "@element-plus/icons-vue";
import ContainerMd from "../docs/components/container-code.md";
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

.item {
  margin-right: 30px;
}
</style>
