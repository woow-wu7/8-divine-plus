<template>
  <Wrap>
    <template v-slot:components>
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
    </template>
  </Wrap>
</template>

<script setup lang="ts">
import Wrap from "../theme/ComponentWrap.vue";

import DvDivider from "../../../packages/components/divider/index.vue";
import "../../../packages/theme-chalk/divider.scss";

import Markdown from "vue3-markdown-it";
import "highlight.js/styles/monokai.css";

const aa = `<div class="divider">
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
  </div>`;
</script>
<style>
.divider-horizontal {
  border: 1px solid #f0f0f0;
  padding: 20px;
}
</style>
