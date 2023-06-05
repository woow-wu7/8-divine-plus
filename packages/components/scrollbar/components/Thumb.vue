<template>
  <div
    v-if="direction === 'vertical'"
    :class="[ns.e('thumb'), ns.is('vertical', direction === 'vertical')]"
  />
  <div
    v-else
    :class="[ns.e('thumb'), ns.is('horizontal', direction === 'horizontal')]"
  ></div>
</template>

<script setup lang="ts">
import { useNamespace } from "@/hooks/useNamespace";
import { thumbProps } from "../utils/constant";

const ns = useNamespace("scrollbar");

const props = defineProps(thumbProps);
</script>
