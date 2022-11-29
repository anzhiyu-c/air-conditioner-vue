/*
 * @Description:
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-29 20:59:45
 * @LastEditTime: 2022-11-29 21:02:43
 * @LastEditors: 安知鱼
 */
const RIPPLE_COUNT = "vRippleCountInternal";
function setRippleCount(el: HTMLElement, count: number) {
  el.dataset[RIPPLE_COUNT] = count.toString();
}

export function getRippleCount(el: HTMLElement): number {
  return parseInt(el.dataset[RIPPLE_COUNT] ?? "0", 10);
}

export function incrementRippleCount(el: HTMLElement): void {
  const count = getRippleCount(el);
  setRippleCount(el, count + 1);
}

export function decrementRippleCount(el: HTMLElement): void {
  const count = getRippleCount(el);
  setRippleCount(el, count - 1);
}

export function deleteRippleCount(el: HTMLElement): void {
  delete el.dataset[RIPPLE_COUNT];
}
