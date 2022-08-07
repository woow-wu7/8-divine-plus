<template>
  <section :class="[ns.b(), ns.is('vertical', isVertical)]">
    <slot></slot>
  </section>
</template>

<script lang="ts">
export default {
  name: "DvContainer",
};
</script>
<script setup lang="ts">
import { PropType, useSlots, computed } from "vue";
import { useNamespace } from "../../hooks/useNamespace";
import type { PropsDirectionType } from "./constant";
import type { VNode, Component } from "vue";

const ns = useNamespace("container");

const slots: any = useSlots();

const props = defineProps({
  direction: {
    type: String as PropType<PropsDirectionType>,
  },
});

const isVertical = computed(() => {
  if (props.direction === "vertical") {
    return true;
  } else if (props.direction === "horizontal") {
    return false;
  }

  if (slots && slots.default) {
    const vNodes: VNode[] = slots.default();

    return vNodes.some((vNode) => {
      const tag = (vNode.type as Component).name;
      return tag === "DvHeader" || tag === "DvFooter";
    });
  }
});
</script>
