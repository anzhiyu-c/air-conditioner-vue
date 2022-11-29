/*
 * @Description:
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-28 19:48:05
 * @LastEditTime: 2022-11-29 21:06:01
 * @LastEditors: 安知鱼
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import directivesList from "@/directives/index";
import App from "./App.vue";

import "normalize.css";
import "@/assets/css/base.scss";
import "@/assets/css/snackbar.css";

const app = createApp(App);

app.use(createPinia());
Object.keys(directivesList).forEach(key => {
  // 注册所有自定义指令
  app.directive(key, directivesList[key]);
});

app.mount("#air-conditioner-vue");
