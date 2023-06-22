<template>
  <div :class="ns.b('item')">collapse-item</div>
</template>

<script lang="ts">
export default {
  name: "DvCollapseItem",
};
</script>
<script setup lang="ts">
import { useNamespace } from "@/hooks/useNamespace";
import { COLLAPSE } from "./utils";
import { inject } from "vue";

const ns = useNamespace("collapse");

const props = defineProps({});

const collapse = inject(COLLAPSE);
</script>
