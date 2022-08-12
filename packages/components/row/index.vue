<template>
  <section :class="[ns.b()]"></section>
</template>

<script lang="ts">
export default {
  name: "DvRow",
};
</script>

<script setup lang="ts">
import { PropType } from "vue";
import { useNamespace } from "../../hooks/useNamespace";

const ns = useNamespace("row");

const props = defineProps({
  gutter: {
    type: Number,
    default() {
      return 0;
    },
  },
  tag: {
    type: String,
    default() {
      return "div";
    },
  },
  justify: {
    type: String as PropType<
      "start" | "end" | "center" | "space-around" | "space-between"
    >,
    default() {
      return "start";
    },
  },
  align: {
    type: String as PropType<"top" | "middle" | "bottom">,
    default() {
      return "top";
    },
  },
});
</script>
