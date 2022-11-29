<!--
 * @Description: 
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-29 14:30:01
 * @LastEditTime: 2022-11-29 14:33:16
 * @LastEditors: 安知鱼
-->
<template>
  <div class="air-conditioner-main-content-subject-left-identification">
    <div class="identification-p-1">
      <span v-for="(item, index) in 6" :key="index" class="identification-p-1-dot"></span>
    </div>
    <div class="identification-p-2">
      <div class="identification-p-2-1">
        <div class="identification-p-2-1-1"></div>
        <div class="identification-p-2-1-2"></div>
        <div class="identification-p-2-1-3"></div>
      </div>
      <div class="identification-p-2-2"></div>
      <div class="identification-p-2-3"></div>
      <div class="identification-p-2-4"></div>
      <div class="identification-p-2-5"></div>
    </div>
    <div class="identification-p-3">
      <div class="identification-p-3-1">
        <span v-for="(item, index) in 11" :key="index" class="identification-p-3-1-dot"></span>
      </div>
      <div class="identification-p-3-2"></div>
      <div class="identification-p-3-3">
        <span v-for="(item, index) in 11" :key="index" class="identification-p-3-3-dot"></span>
      </div>
      <div class="identification-p-3-4">
        <span v-for="(item, index) in 11" :key="index" class="identification-p-3-4-dot"></span>
      </div>
    </div>
    <div class="identification-p-4">
      <span v-for="(item, index) in 8" :key="index" class="identification-p-4-dot"></span>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.air-conditioner-main-content {
  $dot: white;
  $dotBlack: black;
  .energy-label-level {
    margin-top: 2px;
    height: 3px;
  }
  .air-conditioner-flex-justify-center {
    display: flex;
    justify-content: center;
  }
  &-subject {
    &-left {
      &-identification {
        background-color: rgb(78, 165, 245);
        border-radius: 2px;
        height: 70px;
        width: 50px;
        padding: 0.25rem;
        .identification-p-1 {
          @extend .air-conditioner-flex-justify-center;
          &-dot {
            width: 4px;
            height: 4px;
            margin: 0px 2px;
            background-color: $dot;
            border-radius: 9999px;
          }
        }
        .identification-p-2 {
          padding: 2px 8px;
          background-color: rgba(255, 255, 255, 1);
          height: 1.75rem;
          width: 100%;
          margin-top: 0.25rem;
          margin-bottom: 0.25rem;
          &-1 {
            display: flex;
            &-1 {
              background-color: green;
              width: 40%;
            }
            &-2 {
              margin-left: 40%;
              height: 3px;
              border-width: 1.5px 2px 1.5px 0px;
              border-style: solid;
              border-color: transparent green transparent transparent;
            }
            &-3 {
              background-color: green;
              width: 10%;
            }
          }
          &-2 {
            background-color: lightgreen;
            width: 50%;
            @extend .energy-label-level;
          }
          &-3 {
            background-color: rgb(255, 193, 7);
            width: 60%;
            @extend .energy-label-level;
          }
          &-4 {
            background-color: orange;
            width: 70%;
            @extend .energy-label-level;
          }
          &-5 {
            background-color: red;
            width: 80%;
            @extend .energy-label-level;
          }
        }
        .identification-p-3 {
          margin-bottom: 2px;
          padding-top: 0.8px;
          background-color: rgba(255, 255, 255, 1);
          height: 1.25rem;
          &-1 {
            @extend .air-conditioner-flex-justify-center;
            &-dot {
              width: 2px;
              height: 2px;
              margin: 2px 0.8px;
              background-color: $dotBlack;
            }
          }
          &-2 {
            border-top: 1px solid;
            margin: 0.8px 0px;
          }
          &-3 {
            @extend .air-conditioner-flex-justify-center;
            &-dot {
              width: 1.5px;
              height: 1.5px;
              margin: 2px 0.8px;
              background-color: $dotBlack;
              border-radius: 9999px;
            }
          }
          &-4 {
            @extend .air-conditioner-flex-justify-center;
            &-dot {
              width: 1.2px;
              height: 1.2px;
              margin: 0px 0.8px;
              background-color: $dotBlack;
              border-radius: 9999px;
            }
          }
        }
        .identification-p-4 {
          @extend .air-conditioner-flex-justify-center;
          &-dot {
            width: 2px;
            height: 2px;
            margin: 0px 0.8px;
            background-color: $dot;
          }
        }
      }
    }
  }
}
</style>
