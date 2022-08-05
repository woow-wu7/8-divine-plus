<template>
  <section class="app">
    <div class="divider">
      <div>divider测试</div>
      <DvDivider direction="horizontal">
        <template v-slot:default>center</template>
      </DvDivider>
      <DvDivider
        direction="horizontal"
        contentPosition="left"
        borderStyle="dashed"
      >
        <template v-slot:default>left</template>
      </DvDivider>
      <DvDivider direction="horizontal" contentPosition="right">
        <template v-slot:default>right</template>
      </DvDivider>
      <div>divider测试</div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
