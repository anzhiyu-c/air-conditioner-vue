/*
 * @Description:
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-28 19:48:05
 * @LastEditTime: 2022-11-28 20:36:21
 * @LastEditors: 安知鱼
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "normalize.css";

import "@/assets/css/base.scss";

const app = createApp(App);

app.use(createPinia());

app.mount("#air-conditioner-vue");
