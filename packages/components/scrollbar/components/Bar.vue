<template>
  <Thumb direction="horizontal" ref="refHThumb" />
  <Thumb direction="vertical" ref="refVThumb" @mousedown="onMouseDown" />
</template>

<script setup lang="ts">
import { inject, reactive, onMounted, ref } from "vue";
import type { Ref } from "vue";
import Thumb from "./Thumb.vue";

const refHThumb = ref();
const refVThumb = ref();
const refWrap = inject<Ref<HTMLDivElement>>("refWrap");
const ratio = inject<any>("ratio");

const state = reactive({ isDown: false, mouseOffset: 0 });

const onMouseDown = (e: any) => {
  state.isDown = true;
  state.mouseOffset =
    e.clientY - refVThumb.value?.refVThumbRoot.getBoundingClientRect().top;
};

onMounted(() => {
  document.addEventListener("mousemove", onMouseMove, false);
  document.addEventListener("mouseup", onMouseUp, false);
});

const onMouseMove = (e: any) => {
  if (!refWrap?.value || !refVThumb.value?.refVThumbRoot) return;

  if (state.isDown) {
    const barScrollDistance =
      e.clientY -
      refWrap?.value.getBoundingClientRect().top! -
      state.mouseOffset;

    if (
      barScrollDistance <= 0 ||
      barScrollDistance >=
        refWrap!.value.offsetHeight -
          refVThumb.value?.refVThumbRoot.offsetHeight
    ) {
      return;
    }

    refWrap.value.scrollTop = barScrollDistance * ratio.value?.ratioY!;
    refVThumb.value.refVThumbRoot.style.transform = `translateY(${barScrollDistance}px)`;
  }
};

const onMouseUp = () => {
  state.isDown = false;
};

defineExpose({
  refHThumb,
  refVThumb,
});
</script>
