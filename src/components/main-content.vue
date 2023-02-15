<!--
 * @Description: 
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-29 13:43:16
 * @LastEditTime: 2023-02-15 11:06:06
 * @LastEditors: 安知鱼
-->
<template>
  <div class="air-conditioner-main-content">
    <div class="air-conditioner-main-content-subject">
      <div class="air-conditioner-main-content-subject-left">
        <Identification />
      </div>
      <div class="air-conditioner-main-content-subject-right">
        <span class="air-conditioner-main-content-subject-right-mode" v-if="mode === 'hot'">☀️</span>
        <span class="air-conditioner-main-content-subject-right-mode" v-else-if="mode === 'clod'">❄️</span>
        <h4 class="temperature-box">
          <span class="font-digit temperature">{{ temperature }}</span>
          <small class="font-digit">°C</small>
        </h4>
      </div>
    </div>
    <div class="air-conditioner-main-content-bottom">
      <img
        src="https://npm.elemecdn.com/anzhiyu-air-conditioner@1.0.0/yun-logo.svg"
        alt="logo"
        class="air-conditioner-main-content-bottom-logo"
      />
      <div class="air-conditioner-main-content-bottom-dividing" />
      <div
        class="air-conditioner-main-content-bottom-dot"
        :style="{ backgroundColor: status ? 'rgb(56, 247, 9)' : '' }"
      ></div>
    </div>
  </div>
  <div class="air-conditioner-main-content-wind">
    <Wind />
  </div>
</template>

<script lang="ts" setup>
import Identification from "./identification.vue";
import Wind from "./wind.vue";
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();

let { status, temperature, mode } = storeToRefs(homeStore) as any;
</script>

<style scoped lang="scss">
.air-conditioner-main-content {
  border: 1px solid rgb(224, 224, 224);
  border-radius: 10px 10px 20px 20px;
  box-shadow: 0px 11px 16px -2px rgb(7 17 27 / 9%);
  padding: 10px;
  overflow: hidden;
  .font-digit {
    font-family: Digital-7 Mono;
  }
  &-subject {
    display: flex;
    align-items: center;
    justify-content: center;
    &-left {
      width: 50%;
    }
    &-right {
      width: 50%;
      display: flex;
      margin-right: 30px;
      flex-direction: column;
      align-items: flex-end;
      &-mode {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
      .temperature-box {
        font-size: 2.25rem;
        line-height: 2.5rem;
        text-align: center;
        color: rgb(204, 204, 204);
        .temperature {
          text-shadow: 0 0 2px rgb(0 0 0 / 10%);
          font-size: 2.25rem;
          line-height: 2.5rem;
        }
      }
    }
  }
  &-bottom {
    margin-top: 1.5rem;
    &-logo {
      width: 12px;
      margin: auto;
      max-width: 100%;
      height: auto;
      display: block;
    }
    &-dividing {
      border: 1px solid rgb(224, 224, 224);
      margin-top: 0.25rem;
      margin: 0.25rem -20px 0px;
    }
    &-dot {
      background-color: rgb(224, 224, 224);
      border-radius: 9999px;
      width: 0.25rem;
      height: 0.25rem;
      float: right;
      margin-top: 10px;
    }
  }
}
</style>
