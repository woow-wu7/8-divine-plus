<template>
  <Thumb direction="horizontal" ref="refHThumb" />
  <Thumb direction="vertical" ref="refVThumb" />
</template>

<script setup lang="ts">
import { inject, reactive, onMounted, ref } from "vue";
import type { Ref } from "vue";
import { useNamespace } from "@/hooks/useNamespace";
import Thumb from "./Thumb.vue";

const ns = useNamespace("scrollbar");

const refHThumb = ref();
const refVThumb = ref();
const refWrap = inject<Ref<HTMLDivElement>>("refWrap");
const state = reactive({ ratio: 0 });

onMounted(() => {
  processRatio();
});

const processRatio = () => {
  state.ratio =
    (refWrap?.value.scrollHeight! - refWrap?.value.offsetHeight!) /
    (refWrap?.value.offsetHeight! -
      refVThumb?.value.refThumbVertical.offsetHeight!);
};
</script>
