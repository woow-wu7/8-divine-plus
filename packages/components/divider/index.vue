<template>
  <section :class="[ns.b()]">divider</section>
</template>

<script lang="ts">
export default {
  name: "DvDivider",
};
</script>

<script setup lang="ts">
import { useNamespace } from "../../hooks/useNamespace";
const ns = useNamespace("divider");
</script>
