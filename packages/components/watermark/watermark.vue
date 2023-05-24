<template>
  <section :class="ns.b()" ref="watermarkRef">
    <slot></slot>
  </section>
</template>

<script lang="ts">
export default {
  name: "DvWatermark",
};
</script>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useNamespace } from "@/hooks/useNamespace";
import { useCreateWatermark, watermarkProps } from "./utils";

const props = defineProps(watermarkProps);

const watermarkRef = ref<HTMLElement>();
const ns = useNamespace("watermark");
const state = useCreateWatermark(props);
let div: any;
let observer: any;

onMounted(() => {
  initObserver();
});
onUnmounted(() => {
  observer.disconnect();
});

watch(
  () => [state.watermark.base64, watermarkRef.value],
  () => paint(),
  {
    immediate: true,
  }
);

const initObserver = () => {
  const callback = (mutationsList: MutationRecord[]) => {
    const [mutation] = mutationsList;
    // 删除
    for (let i = 0; i < mutation.removedNodes.length; i++) {
      if (mutation.removedNodes[i] === div) {
        paint();
      }
    }
    // 属性修改
    if (mutation.target === div) {
      paint();
    }
  };
  observer = new MutationObserver(callback);
  watermarkRef.value &&
    observer.observe(watermarkRef.value, {
      attributes: true,
      childList: true,
      subtree: true,
    });
};

function paint() {
  if (!watermarkRef.value) return;
  if (div) div.remove();

  div = document.createElement("div");
  div.style.backgroundImage = `url(${state.watermark.base64})`;
  div.style.backgroundSize = `${state.watermark.width} ${state.watermark.height}`;

  div.style.position = "absolute";
  div.style.inset = 0;
  div.style.zIndex = props.zIndex;

  watermarkRef.value.appendChild(div);
}
</script>
