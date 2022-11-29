/*
 * @Description:
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-29 20:59:45
 * @LastEditTime: 2022-11-29 21:02:47
 * @LastEditors: 安知鱼
 */
// can export function.  解构参数类型冗余 新定义insterface IRippleDirectiveOptionWithBinding
import { DEFAULT_PLUGIN_OPTIONS } from "./options";
import type { IRippleDirectiveOptions, IRippleDirectiveOptionWithBinding } from "./options";
import { ripple } from "./v-ripple";
const optionMap = new WeakMap<HTMLElement, Partial<IRippleDirectiveOptions> | false>();
const globalOptions = { ...DEFAULT_PLUGIN_OPTIONS };
export default {
  mounted(el: HTMLElement, binding: IRippleDirectiveOptionWithBinding): void {
    optionMap.set(el, binding.value ?? {});

    el.addEventListener("pointerdown", event => {
      const options = optionMap.get(el);
      // 必须确保disabled 属性存在 否则指令终止报错
      if (binding.value && binding.value.disabled) {
        return;
      }

      if (options === false) {
        return;
      }

      ripple(event, el, {
        ...globalOptions,
        ...options,
      });
    });
  },
  updated(el: HTMLElement, binding: IRippleDirectiveOptionWithBinding): void {
    optionMap.set(el, binding.value ?? {});
  },
};
