<!--
 * @Description: APP
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-10-31 13:27:51
 * @LastEditTime: 2022-11-28 20:37:52
 * @LastEditors: 安知鱼
-->
<script setup lang="ts">
import MainTop from "./components/main-top.vue";
</script>

<template>
  <!-- 命名空间防止elment样式冲突 -->
  <el-config-provider namespace="anzhiyu-air-conditioner">
    <main class="air-conditioner-vue">
      <MainTop />
    </main>
  </el-config-provider>
</template>

<style scoped lang="scss">
.air-conditioner-vue {
  display: flex;
  flex-direction: column;
  flex: 1 auto;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  padding-top: 1.5rem;
}
</style>
