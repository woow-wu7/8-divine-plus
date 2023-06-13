<template>
  <transition name="dv-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
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
import { useNamespace } from "@/hooks/useNamespace";
const ns = useNamespace("loading");

const props = defineProps<{
  text: any; // 显示在加载图标下方的加载文案
  spinner: any; // 自定义加载图标类名
  background: any;
  fullscreen: boolean;
  visible: boolean;
  customClass: ""; // 	Loading 的自定义类名
}>();

const handleAfterLeave = () => {};
</script>
