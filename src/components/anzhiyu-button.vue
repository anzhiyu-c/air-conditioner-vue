<!--
 * @Description: button组件封装
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-29 20:13:49
 * @LastEditTime: 2022-11-30 10:27:00
 * @LastEditors: 安知鱼
-->
<template>
  <button v-ripple :class="`anzhiyu-button ${round ? 'anzhiyu-button-round' : ''} anzhiyu-button-${type}`">
    <div>
      <slot />
    </div>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  round: {
    type: Boolean,
    default: () => false,
  },
  type: {
    type: String,
    default: () => "default",
  },
});
</script>

<style lang="scss" scoped>
.anzhiyu-button {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-height: 36px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  padding: 0px;
  min-width: 0px;
  width: 56px;
  height: 56px;
  z-index: 2;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(224, 224, 224);
}
.anzhiyu-button-round {
  border-radius: 99999px;
}
.anzhiyu-button-primary {
  color: white;
  background-color: rgb(25, 118, 210);
}
.anzhiyu-button-danger {
  background-color: rgb(229, 57, 53);
  color: white;
}
.anzhiyu-button-success {
  background-color: rgb(67, 160, 71);
  color: white;
}
.anzhiyu-button-warning {
  background-color: orange;
  color: white;
}
</style>
