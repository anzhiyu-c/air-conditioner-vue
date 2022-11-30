<!--
 * @Description: APP
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-10-31 13:27:51
 * @LastEditTime: 2022-11-30 08:51:24
 * @LastEditors: 安知鱼
-->
<script setup lang="ts">
import MainTop from "./components/main-top.vue";
import MainContent from "./components/main-content.vue";
import Controller from "./components/controller.vue";
import Tip from "./components/tip.vue";
import Copyright from "./components/copyright.vue";
</script>

<template>
  <main class="air-conditioner-vue">
    <MainTop />
    <Tip />
    <MainContent />
    <Controller />
    <Copyright />
  </main>
</template>

<style scoped lang="scss">
.air-conditioner-vue {
  display: flex;
  flex-direction: column;
  flex: 1 auto;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  padding: 1.5rem 10px 10px;
}
</style>
