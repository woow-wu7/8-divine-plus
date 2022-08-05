<template>
  <span :class="[ns.e('item')]">
    <span :class="[ns.e('inner'), ns.is('link', !!to)]" @click="onClick">
      <slot></slot>
    </span>
    <span v-if="separatorIcon" :class="ns.e('separator')">
      <component
        :is="separatorIcon"
        style="width: 14px; height: 14px; display: inline-block"
      ></component>
    </span>
    <span v-else :class="ns.e('separator')">{{ separator }}</span>
  </span>
</template>

<script lang="ts">
export default {
  name: "DvBreadcrumbItem",
};
</script>

<script setup lang="ts">
import { inject, toRefs, getCurrentInstance } from "vue";
import { useNamespace } from "../../hooks/useNamespace";
import { breadcrumbKey } from "./constant";
import type { Router } from "vue-router";

const ns = useNamespace("breadcrumb");

const breadcrumbContext = inject(breadcrumbKey) as any;
const { separator, separatorIcon } = toRefs(breadcrumbContext); // 保持响应式

const props = defineProps({
  to: {
    type: [String, Object],
  },
  replace: {
    type: String,
  },
});

const instance = getCurrentInstance()!;
const router = instance.appContext.config?.globalProperties?.$router as Router;

const onClick = () => {
  if (!props.to || !router) return;
  props.replace ? router.replace(props.to) : router.push(props.to);
};
</script>

<style lang="scss" scoped></style>
