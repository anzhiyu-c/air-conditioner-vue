/*
 * @Description:
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-29 17:09:04
 * @LastEditTime: 2022-11-29 17:10:45
 * @LastEditors: 安知鱼
 */
export const getAssetURL = (assetsURL: string) => {
  // 参数一: 相对路径
  // 参数二: 当前路径的URL
  return new URL(`../assets/${assetsURL}`, import.meta.url).href;
};
