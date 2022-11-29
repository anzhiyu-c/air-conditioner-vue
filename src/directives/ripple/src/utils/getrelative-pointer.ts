/*
 * @Description:
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-29 20:59:45
 * @LastEditTime: 2022-11-29 21:02:40
 * @LastEditors: 安知鱼
 */
export const getRelativePointer = ({ x, y }: PointerEvent, { top, left }: DOMRect): Partial<DOMRect> => ({
  x: x - left,
  y: y - top,
});
