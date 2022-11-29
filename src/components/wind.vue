<!--
 * @Description: 
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-29 15:10:55
 * @LastEditTime: 2022-11-29 20:10:40
 * @LastEditors: 安知鱼
-->
<template>
  <div :class="status ? 'air-conditioner-wind windRunningAnimation' : 'air-conditioner-wind'">
    <div class="wind-line-1 size25Rem"></div>
    <div class="wind-line-2 size25Rem"></div>
    <div class="wind-line-3 size25Rem"></div>
  </div>
</template>

<script lang="ts" setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();

let { status } = storeToRefs(homeStore) as any;
</script>

<style scoped lang="scss">
.windRunningAnimation {
  animation: windRunningAnimation 8s ease-out 3s infinite alternate forwards;
}
.air-conditioner-wind {
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  transition: opacity 1500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  opacity: 0.3;
  .size25Rem {
    width: 0.25rem;
    height: 2.5rem;
  }
  .wind-line-1 {
    background-color: rgb(187, 187, 187);
    transform: rotate(10deg);
  }
  .wind-line-2 {
    background-color: rgb(187, 187, 187);
    margin-left: 5rem;
    margin-right: 5rem;
  }
  .wind-line-3 {
    background-color: rgb(187, 187, 187);
    transform: rotate(-10deg);
  }
}
@keyframes windRunningAnimation {
  0% {
    transform: scale(1);
    opacity: 0.3;
  }

  30% {
    opacity: 0.8;
    transform: scale(1.02);
  }

  50% {
    transform: scale(1);
    opacity: 0.5;
  }

  70% {
    transform: scale(1.01);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
}
</style>
