<!--
 * @Description: tip组件
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-29 13:24:30
 * @LastEditTime: 2022-11-29 13:43:26
 * @LastEditors: 安知鱼
-->
<template>
  <div class="air-conditioner-tip">
    <div class="air-conditioner-tip-icon"></div>
    <div class="air-conditioner-tip-content">Tip: 为你的夏日带去</div>
    <div class="air-conditioner-tip-highlight">清凉！</div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.air-conditioner-tip {
  margin: 1.5rem;
  $iconTip: url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' ><path fill='currentColor' d='M12 3c-.46 0-.93.04-1.4.14c-2.76.53-4.96 2.76-5.48 5.52c-.48 2.61.48 5.01 2.22 6.56c.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28a1.98 1.98 0 0 0 3.44 0H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46A6.956 6.956 0 0 0 19 10c0-3.87-3.13-7-7-7zm2 14h-4v-1h4v1zm-4 2v-1h4v1h-4zm5.31-5.26c-.09.08-.16.18-.24.26H8.92c-.08-.09-.15-.19-.24-.27c-1.32-1.18-1.91-2.94-1.59-4.7c.36-1.94 1.96-3.55 3.89-3.93c.34-.07.68-.1 1.02-.1c2.76 0 5 2.24 5 5c0 1.43-.61 2.79-1.69 3.74z'/><path fill='currentColor' d='M11.5 11h1v3h-1z'/><path fill='currentColor' d='m9.672 9.58l.707-.706l2.122 2.121l-.707.707z'/><path fill='currentColor' d='m12.208 11.712l-.707-.707l2.121-2.121l.707.707z'/></svg>")
    no-repeat;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &-icon {
    mask: $iconTip;
    mask-size: 100% 100%;
    -webkit-mask: $iconTip no-repeat;
    -webkit-mask-size: 100% 100%;
    background-color: currentColor;
    width: 1.2em;
    height: 1.2em;
    color: rgb(243, 168, 59);
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  &-highlight {
    color: #63a5ef;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>
