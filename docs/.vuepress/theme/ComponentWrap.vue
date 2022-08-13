<template>
  <section class="component-wrap">
    <header v-if="slots?.title || slot?.subtitle">
      <div class="header__title">
        <slot name="title"> </slot>
      </div>
      <div class="header__subtitle">
        <slot name="subtitle"></slot>
      </div>
    </header>

    <main>
      <slot name="components"></slot>
    </main>

    <footer>
      <div class="footer__tool" v-if="true" @click="visible = !visible">
        <span>查看代码</span>
        <component
          :is="ArrowRight"
          :class="['arrow', { 'is-down': visible }]"
        ></component>
      </div>
      <div class="footer__code" v-if="visible">
        <template v-if="hasMd">
          <slot name="md"></slot>
        </template>
        <div v-else v-html="md"></div>
      </div>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { ref, useSlots, computed } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";

const visible = ref(false);
const slots = useSlots();
const hasMd = computed(() => slots?.md?.()?.length);

defineProps({
  code: String,
  md: String,
});
</script>

<style lang="scss" scoped>
.component-wrap {
  margin: 10px 0px;
  border: 1px solid #f0f0f0;

  header,
  main,
  footer {
    border-top: 1px solid #f0f0f0;
    padding: 20px;
  }

  header {
    padding-bottom: 0px;

    .header__title {
      font-size: 18px;
      font-weight: 700;
      color: #3eaf7c;
    }
    .header__subtitle {
      margin-top: 20px;
    }
  }

  main {
    border-top: 0;
  }

  footer {
    .footer__tool {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .footer__code {
      background: #141414;
    }
  }

  .arrow {
    margin-left: 10px;
    height: 16px;
    width: 16px;
    transition: all 0.3s;
  }

  .is-down {
    transform: rotate(90deg);
  }
}
</style>
