<template>
  <section :class="ns.b()" :style="scrollbarStyle">
    <div :class="ns.e('wrap-out')" v-if="!native">
      <div :class="ns.e('wrap-in')" ref="refWrap">
        <slot></slot>
        <Bar></Bar>
      </div>
    </div>

    <div :class="ns.e('native')" v-if="native">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "DvScrollbar",
};
</script>

<script setup lang="ts">
import { computed, ref, provide } from "vue";
import { useNamespace } from "@/hooks/useNamespace";
import { scrollbarProps } from "./utils/constant";
import { processUnit } from "@/utils";
import Bar from "./components/Bar.vue";

const ns = useNamespace("scrollbar");
const props = defineProps(scrollbarProps);

const refWrap = ref<HTMLDivElement>();
provide("refWrap", refWrap);

const scrollbarStyle = computed(() => [
  {
    height: processUnit(props.height),
    maxHeight: processUnit(props.maxHeight),
  },
  props.wrapStyle,
]);
</script>
