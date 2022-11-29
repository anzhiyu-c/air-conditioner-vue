/*
 * @Description:
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-29 20:59:45
 * @LastEditTime: 2022-11-29 21:02:35
 * @LastEditors: 安知鱼
 */
export const createContainer = ({
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
}: CSSStyleDeclaration): HTMLElement => {
  const rippleContainer = document.createElement("div");
  rippleContainer.style.top = "0";
  rippleContainer.style.left = "0";
  rippleContainer.style.width = "100%";
  rippleContainer.style.height = "100%";
  rippleContainer.style.position = "absolute";
  rippleContainer.style.borderRadius = `${borderTopLeftRadius} ${borderTopRightRadius} ${borderBottomRightRadius} ${borderBottomLeftRadius}`;
  rippleContainer.style.overflow = "hidden";
  rippleContainer.style.pointerEvents = "none";

  // 兼容 ie  苹果
  rippleContainer.style.webkitMaskImage = "-webkit-radial-gradient(white, black)";

  return rippleContainer;
};
