<template>
  <ul>
    <li v-for="item in IconJson.glyphs">
      <dv-icon :name="item.font_class" class="dv-icon__iconfont"></dv-icon>
      <div class="dv-icon-class-name">dv-icon-{{ item.font_class }}</div>
    </li>
  </ul>
</template>

<script setup>
import IconJson from "../../../packages/theme-chalk/fonts/iconfont.json";
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
  display: flex;
  flex-flow: wrap;

  border: 1px solid #eaecef;
  box-sizing: border-box;
}

li {
  width: 25%;
  border-right: 1px solid #eaecef;
  border-bottom: 1px solid #eaecef;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
}

li:hover {
  color: #409eff;
  cursor: pointer;

  .dv-icon-class-name {
    color: #409eff;
  }
}

.dv-icon__iconfont {
  font-size: 40px;
}
.dv-icon-class-name {
  color: #99a9bf;
  font-size: 14px;
}
</style>
