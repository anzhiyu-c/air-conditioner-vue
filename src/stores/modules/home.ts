/*
 * @Description: 首页数据
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-10-31 17:42:11
 * @LastEditTime: 2022-11-28 20:07:20
 * @LastEditors: 安知鱼
 */
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    authorInfo: {
      author: "安知鱼",
      link: "http://anzhiy.cn/",
      title: "安知鱼 - 便携小空调",
    },
  }),
  actions: {},
});

export default useHomeStore;
