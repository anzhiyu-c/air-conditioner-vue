/*
 * @Description: 首页数据
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-10-31 17:42:11
 * @LastEditTime: 2022-11-29 21:12:23
 * @LastEditors: 安知鱼
 */
import { defineStore } from "pinia";
import Snackbar from "node-snackbar";
const useHomeStore = defineStore("home", {
  state: () => ({
    authorInfo: {
      author: "安知鱼",
      link: "http://anzhiy.cn/",
      title: "安知鱼 - 便携小空调",
    },
    // 空调温度
    temperature: 26,
    // 空调工作状态
    status: false,
    // 空调工作模式
    mode: "clod",
    // 空调最大温度
    maxTemperature: 31,
    // 空调最小温度
    minTemperature: 16,
  }),
  actions: {
    /**
     * 修改空调工作状态
     */
    changeStatus() {
      this.status = !this.status;
    },
    /**
     * 修改空调工作模式
     */
    changeMode(mode: string) {
      this.mode = mode;
    },
    /**
     * 增加空调温度
     */
    addTemperature() {
      if (this.temperature < this.maxTemperature) {
        this.temperature++;
      } else {
        Snackbar.show({
          text: "已经达最大温度啦",
          backgroundColor: "#ffc107",
          duration: 2000,
          pos: "top-center",
          showAction: false,
        });
      }
    },
    /**
     * 降低空调温度
     */
    subTemperature() {
      if (this.temperature > this.minTemperature) {
        this.temperature--;
      } else {
        Snackbar.show({
          text: "已经是最小温度啦",
          backgroundColor: "#ffc107",
          duration: 2000,
          pos: "top-center",
          showAction: false,
        });
      }
    },
  },
});

export default useHomeStore;
