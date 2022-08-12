<template>
  <section :class="[ns.b()]"></section>
</template>

<script lang="ts">
export default {
  name: "DvCol",
};
</script>

<script setup lang="ts">
import { useNamespace } from "../../hooks/useNamespace";

const ns = useNamespace("col");

const props = defineProps({
  span: {
    type: Number,
    default: 24,
  },
  tag: {
    type: String,
    default: "div",
  },
  offset: Number,
  pull: Number,
  push: Number,
  xs: [Number, Object],
  sm: [Number, Object],
  md: [Number, Object],
  lg: [Number, Object],
  xl: [Number, Object],
});
</script>
