<!--
 * @Description: Copyright
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-29 21:42:28
 * @LastEditTime: 2022-11-30 10:27:17
 * @LastEditors: 安知鱼
-->

<script lang="ts" setup>
import * as pkg from "../../package.json";
</script>

<template>
  <div class="copyright-box">
    <div class="copyright-p-1">
      ©
      <a :href="pkg.repository.url" target="_blank" rel="noreferrer">AnZhiYu Air Conditioner</a>
      <a class="copyright-p-1-1" href="https://sponsors.yunyoujun.cn" target="_blank" rel="noreferrer">
        <div class="copyright-p-1-1-icon" />
      </a>
      <a :href="pkg.author.url" target="_blank" rel="noreferrer">安知鱼 @{{ pkg.author.name }}</a>
    </div>
    <p>2022 - {{ new Date().getFullYear() }}</p>
  </div>
</template>

<style lang="scss" scoped>
.copyright-box {
  opacity: 0.8;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: center;
  margin-top: 2rem;
  .copyright-p-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    &-1 {
      display: inline-flex;
      color: #0078e7 !important;
      &-icon {
        margin-left: 0.25rem;
        margin-right: 0.25rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        --un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M19.35 10.03A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.03A6.004 6.004 0 0 0 0 14a6 6 0 0 0 6 6h13a5 5 0 0 0 5-5c0-2.64-2.05-4.78-4.65-4.97Z'/%3E%3C/svg%3E");
        mask: var(--un-icon) no-repeat;
        mask-size: 100% 100%;
        -webkit-mask: var(--un-icon) no-repeat;
        -webkit-mask-size: 100% 100%;
        background-color: currentColor;
        width: 1.2em;
        height: 1.2em;
      }
    }
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
}
</style>
