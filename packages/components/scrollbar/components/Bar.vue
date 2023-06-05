<template>
  <div :class="ns.e('bar')">
    <slot></slot>

    <Thumb direction="horizontal" />
    <Thumb direction="vertical" />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@/hooks/useNamespace";
import Thumb from "./Thumb.vue";

const ns = useNamespace("scrollbar");
</script>
