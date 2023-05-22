<template>
  <section :class="ns.b()" ref="watermarkRef">
    <slot></slot>

    {{ content }}
  </section>
</template>

<script lang="ts">
export default {
  name: "DvWatermark",
};
</script>

<script setup lang="ts">
import { useNamespace } from "@/hooks/useNamespace";
import { watchEffect, ref, reactive, onMounted } from "vue";

const ns = useNamespace("watermark");
const watermarkRef = ref<any>();
let div: any;

const props = defineProps({
  content: {
    type: String,
    default() {
      return "";
    },
  },
  fontsize: {
    type: Number,
    default() {
      return 16;
    },
  },
  gap: {
    type: Number,
    default() {
      return 10;
    },
  },
});

const state = reactive({
  bg: {
    base64: "",
    size: 0,
    styleSize: 0,
  },
});

const createWatermark = (args: typeof props) => {
  const { content, fontsize, gap } = args;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;

  // const devicePixelRatio = window.devicePixelRatio;
  const font = `${fontsize} serif`;

  const { width } = ctx.measureText(content);
  const canvasSize = Math.max(100, width) + gap;
  canvas.width = canvasSize;
  canvas.height = canvasSize;

  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((-45 / 180) * Math.PI);
  ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.font = font;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(content, 0, 0);

  state.bg = {
    base64: canvas.toDataURL("image/png"),
    size: canvasSize,
    styleSize: canvasSize / devicePixelRatio,
  };
};

onMounted(() => {
  createWatermark(props);
});

watchEffect(() => {
  if (!watermarkRef.value) return;
  if (div) div.remove();

  div = document.createElement("div");
  div.style.backgroundImage = `url(${state.bg.base64})`;
  div.style.backgroundSize = `${state.bg.styleSize} ${state.bg.styleSize}`;

  div.style.position = "absolute";
  div.style.inset = 0;
  div.style.zIndex = -1;

  console.log("watermarkRef", watermarkRef);
  watermarkRef.value.appendChild(div);
});
</script>
