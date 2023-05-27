<template>
  <transition name="dv-message">
    <section
      v-show="state.visible"
      :class="[ns.b(), { [ns.m(type)]: type }, ns.is('show-close', showClose)]"
    >
      {{ message }}

      <img :src="closeIconSvg" alt="" :class="ns.e('closeBtn')" />
    </section>
  </transition>
</template>

<script lang="ts">
export default {
  name: "DvMessage",
};
</script>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useNamespace } from "@/hooks/useNamespace";
import { definePropType } from "@/utils/index";
import closeIconSvg from "./static/close.svg";

const ns = useNamespace("message");

const props = defineProps({
  message: String || Object,
  // type: {
  //   type: String,
  //   values: ["success", "warning", "info", "error"],
  //   default: "info",
  // },
  type: {
    type: definePropType<"success" | "warning" | "info" | "error">(String),
    default: "info",
  },
  duration: {
    type: Number,
    default: 3000,
  },
  showClose: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  visible: false,
});

onMounted(() => {
  show();
  runTimer();
});

const show = () => (state.visible = true);
const close = () => (state.visible = false);

const runTimer = () => {
  if (!props.duration) return;
  setTimeout(() => {
    close();
  }, props.duration);
};
</script>
