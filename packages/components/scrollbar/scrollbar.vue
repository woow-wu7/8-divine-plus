<template>
  <section :class="ns.b()" :style="scrollbarStyle">
    <div v-if="!native" :class="ns.e('container')">
      <div :class="ns.e('view')">
        <Bar> <slot></slot> </Bar>
      </div>
    </div>

    <div v-if="native" :class="ns.e('native')">
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
import { computed } from "vue";
import { useNamespace } from "@/hooks/useNamespace";
import { scrollbarProps } from "./utils/constant";
import { processUnit } from "@/utils";
import Bar from "./components/Bar.vue";

const ns = useNamespace("scrollbar");
const props = defineProps(scrollbarProps);

const scrollbarStyle = computed(() => [
  {
    height: processUnit(props.height),
    maxHeight: processUnit(props.maxHeight),
  },
  props.wrapStyle,
]);
</script>
