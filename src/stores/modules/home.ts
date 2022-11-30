/*
 * @Description: 首页数据
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-10-31 17:42:11
 * @LastEditTime: 2022-11-30 09:05:09
 * @LastEditors: 安知鱼
 */
import { defineStore } from "pinia";
import Snackbar from "node-snackbar";
type AcMode = "clod" | "hot";
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
    changeMode(mode: AcMode) {
      this.mode = mode;

      const currentTemperature = this.temperature;
      const goodClodTemperature = 26;
      const goodHotTemperature = 20;

      const recommendedSlogan = (mode: AcMode, temperature: number) =>
        `建议将空调的制${mode === "clod" ? "冷" : "热"}温度调至 ${temperature} 度以${
          mode === "clod" ? "上" : "下"
        }，为节能减排贡献一份力量！`;

      if (mode === "clod" && currentTemperature < goodClodTemperature) {
        Snackbar.show({
          text: recommendedSlogan("clod", goodClodTemperature),
          backgroundColor: "#ffc107",
          duration: 2000,
          pos: "top-center",
          showAction: false,
        });
      } else if (mode === "hot" && currentTemperature > goodHotTemperature) {
        Snackbar.show({
          text: recommendedSlogan("hot", goodHotTemperature),
          backgroundColor: "#ffc107",
          duration: 2000,
          pos: "top-center",
          showAction: false,
        });
      }
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
