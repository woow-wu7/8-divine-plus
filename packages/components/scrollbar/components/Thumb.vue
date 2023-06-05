<template>
  <div>
    <div
      v-if="direction === 'vertical'"
      :class="[ns.e('thumb'), ns.is('vertical', direction === 'vertical')]"
      ref="refThumbVertical"
    ></div>
    <div
      v-else
      :class="[ns.e('thumb'), ns.is('horizontal', direction === 'horizontal')]"
      ref="refThumbHorizontal"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useNamespace } from "@/hooks/useNamespace";
import { thumbProps } from "../utils/constant";

const ns = useNamespace("scrollbar");
const props = defineProps(thumbProps);
const refThumbVertical = ref<HTMLDivElement>();
const refThumbHorizontal = ref<HTMLDivElement>();

defineExpose({
  refThumbVertical,
  refThumbHorizontal,
});
</script>
