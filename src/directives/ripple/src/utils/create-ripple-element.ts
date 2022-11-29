/*
 * @Description: 
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-29 20:59:45
 * @LastEditTime: 2022-11-29 21:02:38
 * @LastEditors: 安知鱼
 */
import type { IRippleDirectiveOptions } from "../options";

export const createrippleElement = (
  x: number,
  y: number,
  size: number,
  options: IRippleDirectiveOptions
): HTMLElement => {
  const rippleElement = document.createElement("div");

  rippleElement.style.position = "absolute";
  rippleElement.style.width = `${size}px`;
  rippleElement.style.height = `${size}px`;
  rippleElement.style.top = `${y}px`;
  rippleElement.style.left = `${x}px`;
  rippleElement.style.background = options.color;
  rippleElement.style.borderRadius = "50%";
  rippleElement.style.opacity = `${options.initialOpacity}`;
  rippleElement.style.transform = `translate(-50%,-50%) scale(0)`;
  rippleElement.style.transition = `transform ${options.duration / 1000}s ${options.easing}, opacity ${
    options.duration / 1000
  }s ${options.easing}`;
  return rippleElement;
};
