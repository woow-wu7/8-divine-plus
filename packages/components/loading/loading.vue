<template>
  <transition name="dv-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="state.loading"
      :style="{ backgroundColor: background || '' }"
      :class="[ns.b('mask'), customClass, { 'is-fullscreen': fullscreen }]"
    >
      <div :class="ns.b('spinner')">
        <!-- svg图片 -->
        <svg v-if="!spinner" class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none" />
        </svg>
        <i v-else :class="spinner"></i>

        <!-- 可以加文字 -->
        <p v-if="text" :class="ns.b('text')">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { reactive, watch, watchEffect } from "vue";
import { useNamespace } from "@/hooks/useNamespace";

const ns = useNamespace("loading");

const props = defineProps<{
  text: any;
  spinner: any;
  background: any;
  fullscreen: boolean;
  visible: boolean;
  customClass: "";
}>();

const state = reactive({
  loading: false,
});

watchEffect(() => {
  state.loading = props.visible;
});

const handleAfterLeave = () => {};

const close = () => {
  state.loading = false;
};

defineExpose({
  close,
});
</script>
