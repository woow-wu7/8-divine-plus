<template>
  <Wrap :md="html">
    <template v-slot:components>
      <div>
        <p>v-loading</p>
        <p>v-loading</p>
        <p>v-loading</p>
        <p>v-loading</p>
      </div>
      <button @click="onShow">触发loading动画</button>
    </template>
  </Wrap>
</template>

<script setup>
import { getCurrentInstance, reactive } from "vue";

import Wrap from "../theme/ComponentWrap.vue";
import { html } from "../../components/loading-server-code.md";

const state = reactive({
  loadingInstance: null,
});

const instance = getCurrentInstance();

const onShow = () => {
  console.log("first", instance);

  state.loadingInstance = instance.appContext.config.globalProperties.$loading({
    text: "loading...",
    background: "rgba(255,182,193,0.2)",
  });

  setTimeout(() => {
    state.loadingInstance.close();
  }, 1000);
};
</script>
