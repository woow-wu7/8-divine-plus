<template>
  <!-- 第一个根节点 -->
  <div class="app">
    <section class="block">
      <h4>Divider测试</h4>
      <DvDivider direction="horizontal" style="width: auto">
        <template v-slot:default>center</template>
      </DvDivider>
      <DvDivider
        direction="horizontal"
        contentPosition="left"
        borderStyle="dashed"
        style="width: auto"
      >
        <template v-slot:default>left</template>
      </DvDivider>
      <DvDivider
        direction="horizontal"
        contentPosition="right"
        style="width: auto"
      >
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
      <dv-row :gutter="20" class="layout-flex">
        <dv-col :span="6"><div class="grid-content bg-purple" /></dv-col>
        <dv-col :span="6"><div class="grid-content bg-purple" /></dv-col>
        <dv-col :span="6"><div class="grid-content bg-purple" /></dv-col>
        <dv-col :span="6"><div class="grid-content bg-purple" /></dv-col>
      </dv-row>
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

    <section class="block">
      <h4>Tag 测试</h4>

      <dv-tag class="dvTagStyle">标签一</dv-tag>
      <dv-tag type="success" class="dvTagStyle">标签二</dv-tag>
      <dv-tag type="info" class="dvTagStyle">标签三</dv-tag>
      <dv-tag type="warning" class="dvTagStyle">标签四</dv-tag>
      <dv-tag
        type="danger"
        closable
        class="dvTagStyle"
        @close="onOff"
        v-if="!off"
        >可关闭</dv-tag
      >
      <dv-tag type="primary" backgroundColor="black" class="dvTagStyle"
        >自定义背景颜色</dv-tag
      >
      <dv-tag type="success" class="dvTagStyle" hit>是否带有边框描边</dv-tag>
      <dv-tag type="success" class="dvTagStyle" hit size="small"
        >size/small</dv-tag
      >

      <div style="margin: 20px 0">
        <dv-tag type="success" class="dvTagStyle" theme="dark"
          >主题/dark</dv-tag
        >
        <dv-tag type="success" class="dvTagStyle" them="plain"
          >主题/plain</dv-tag
        >
      </div>
    </section>

    <section class="block backtop" ref="app">
      <h4 class="backtop-title">Backtop 测试</h4>
      <p>向下滚动试试</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <dv-backtop :target="app"></dv-backtop>
    </section>

    <section class="block">
      <h4>Empty 测试</h4>
      <dv-empty description="description" />
      <dv-empty :image-size="40" description="description" />
    </section>

    <section class="block">
      <h4>Watermark 测试</h4>

      <dv-watermark
        content="水印效果"
        fontsize="20px"
        fontcolor="#FFB6C1"
        z-index="-1"
        gap="20"
        :imgSrc="icon2"
        imgWidth="10"
        imgHeight="10"
      >
        <div>
          <p>文字内容1</p>
          <p>文字内容3</p>
          <button>button还能点击吗</button>
        </div>
      </dv-watermark>
    </section>

    <div>
      ----------------------------------------- 分割线
      -----------------------------------------
    </div>
    <div>
      ----------------------------------------- 分割线
      -----------------------------------------
    </div>
    <div>
      ----------------------------------------- 分割线
      -----------------------------------------
    </div>
    <div>
      ----------------------------------------- 分割线
      -----------------------------------------
    </div>
    <div>
      ----------------------------------------- 分割线
      -----------------------------------------
    </div>
    <div>
      ----------------------------------------- 分割线
      -----------------------------------------
    </div>
    <!-- ----------------------------------------- 分割线 ----------------------------------------- -->
    <!-- ----------------------------------------- 分割线 ----------------------------------------- -->
    <!-- ----------------------------------------- 分割线 ----------------------------------------- -->
    <!-- 测试 transition 内置组件 -->
    <section class="block">
      <h4>test transition</h4>

      <div class="transition">
        <p>css-transition</p>
        <transition
          name="side"
          @before-enter="onBeforeEnter"
          @enter="onEnter"
          @after-enter="onAfterEnter"
          @enter-cancelled="onEnterCancelled"
          @before-leave="onBeforeLeave"
          @leave="onLeave"
          @after-leave="onAfterLeave"
          @leave-cancelled="onLeaveCancelled"
        >
          <p v-if="state.showTestTransition">test transition</p>
        </transition>
      </div>
      <div class="transition">
        <p>css-animation</p>
        <transition name="animation-side">
          <p v-show="state.showTestTransition">test transition</p>
        </transition>
      </div>

      <button @click="toggleShowTestTransition">toggle</button>
    </section>

    <!-- 测试 md-loader 把 markdown 转成 HTML -->
    <section class="block">
      <div v-html="ContainerMd"></div>
      <highlightjs language="javascript" code="var x = 5;" />
    </section>
  </div>

  <!-- 第二个根节点 -->
  <div>
    <section class="block">vue3可以有多个根节点了</section>
  </div>

  <!-- 第三个根节点 -->
  <!-- 测试 v-model -->
  <section class="block">
    <p>vue3中v-model的改变</p>
    <VModelTestFather></VModelTestFather>
  </section>

  <!-- 第四个根节点 -->
  <!-- 测试 provide 和 inject -->
  <section class="block">
    <h3>provide 和 inject</h3>
    <ProviderTest></ProviderTest>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";
import ContainerMd from "../docs/components/container-code.md";
import VModelTestFather from "./components/v-model-test-father.vue";
import ProviderTest from "./components/provide-test.vue";
import icon2 from "./images/2.png";
console.log("icon2", icon2);

const state = reactive({
  showTestTransition: false,
});

const app = ref();
const off = ref(false);

const onOff = () => {
  console.log("off");
  off.value = true;
};

const toggleShowTestTransition = () => {
  state.showTestTransition = !state.showTestTransition;
};

// 在元素被插入到 DOM 之前被调用
// 用这个来设置元素的 "enter-from" 状态
const onBeforeEnter = () => {
  console.log("beforeEnter");
};

// 在元素被插入到 DOM 之后的下一帧被调用
// 用这个来开始进入动画
const onEnter = (el, done) => {
  // 调用回调函数 done 表示过渡结束
  // 如果与 CSS 结合使用，则这个回调是可选参数
  console.log("enter");
  console.log("el", el);
  done();
};

// 当进入过渡完成时调用。
const onAfterEnter = (el) => {
  console.log("afterEnter");
};
const onEnterCancelled = (el) => {
  console.log("enterCancelled");
};
// 在 leave 钩子之前调用
// 大多数时候，你应该只会用到 leave 钩子
function onBeforeLeave(el) {}
// 在离开过渡开始时调用
// 用这个来开始离开动画
function onLeave(el, done) {
  // 调用回调函数 done 表示过渡结束
  // 如果与 CSS 结合使用，则这个回调是可选参数
  done();
}

// 在离开过渡完成、
// 且元素已从 DOM 中移除时调用
function onAfterLeave(el) {}

// 仅在 v-show 过渡中可用
function onLeaveCancelled(el) {}
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
  overflow: auto;
}
.block {
  margin: 20px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid red;
  display: block;
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

<style lang="scss">
// row col
.layout-flex {
  height: 100px;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

<style lang="scss">
// transition组件
.transition {
  background-color: yellow;
  margin: 10px;
}
.side-enter-active,
.side-leave-active {
  transition: all 1s;
}
.side-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}
.side-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
// ------
.animation-side-enter-active,
.animation-side-leave-active {
  animation: s 1s;
}
@keyframes s {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<style lang="scss">
.backtop {
  height: 500px;
  overflow: auto;
}
</style>
<style>
.dvTagStyle {
  margin-right: 10px;
}
</style>
