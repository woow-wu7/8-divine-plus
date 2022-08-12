<template>
  <section class="component-wrap">
    <header>
      <slot name="components"></slot>
    </header>
    <footer v-if="true" @click="visible = !visible">
      <span>查看代码</span>
      <component
        :is="ArrowRight"
        :class="['arrow', { 'is-down': visible }]"
      ></component>
    </footer>

    <main v-if="visible">
      <template v-if="hasMd">
        <slot name="md"></slot>
      </template>
      <div v-else v-html="md"></div>
    </main>
  </section>
</template>

<script setup lang="ts">
import { ref, useSlots, computed } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";

const visible = ref(false);
const slots = useSlots();
const hasMd = computed(() => slots?.md?.()?.length);

defineProps({
  code: String,
  md: String,
});
</script>

<style lang="scss" scoped>
.component-wrap {
  margin: 10px 0px;
  border: 1px solid #f0f0f0;

  header,
  main,
  footer {
    border-top: 1px solid #f0f0f0;
    padding: 20px;
  }

  header {
    border-top: 0;
  }
  footer {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  main {
    background: #141414;
  }

  .arrow {
    margin-left: 10px;
    height: 16px;
    width: 16px;
    transition: all 0.3s;
  }
  .is-down {
    transform: rotate(90deg);
  }
}
</style>
