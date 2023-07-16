<template>
  <i :class="ns.b(name)"></i>
</template>

<script lang="ts">
export default {
  name: "DvIcon",
};
</script>

<script setup lang="ts">
import { useNamespace } from "@/hooks/useNamespace";

const ns = useNamespace("icon");

defineProps({
  name: String,
});
</script>
