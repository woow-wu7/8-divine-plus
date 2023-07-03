import { nextTick } from "vue";
import { isClient } from "@vueuse/core";
import type { ComponentPublicInstance, ObjectDirective } from "vue";
import type { TDirective } from "./utils";

const INFINITE_SCROLL = "INFINITE_SCROLL";

const infiniteScrollOptions = {
  distance: {
    type: [Number, String],
    default: 0,
  },
  delay: {
    type: [Number, String],
    default: 200,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  immediate: {
    type: Boolean,
    default: true,
  },
};

type TAttrs = typeof infiniteScrollOptions;
type TScrollOptions = { [K in keyof TAttrs]: TAttrs[K]["default"] };

const canScroll = (container: HTMLElement) => {
  const style = window.getComputedStyle(container);
  const { overflow, overflowY } = style;
  const flows = [overflow, overflowY];

  return flows.some((key) => ["scroll", "auto"].includes(key));
};

const getScrollContainer = (el: HTMLElement) => {
  if (!isClient) return;

  let container = el;

  while (container) {
    if ([window, document, document.documentElement].includes(container)) {
      return window;
    }

    console.log("canScroll(container)--+++", canScroll(container));
    if (canScroll(container)) {
      return container;
    }

    container = container.parentNode as HTMLElement;
  }

  return container;
};

const getScrollOptions = (
  el: HTMLElement,
  instance: ComponentPublicInstance
) => {
  return Object.entries(infiniteScrollOptions).reduce(
    (options, [name, option]) => {
      const { type, default: defaultValue } = option;

      const attributeValue = el.getAttribute(name);

      let value =
        (instance as any)[attributeValue as string] ??
        attributeValue ??
        defaultValue;

      value = typeof value === "string" ? Number(value) : value;

      options[name] = value;

      return options;
    },
    {} as TScrollOptions & any
  );
};

const onScroll = (container: any, el: any) => {
  let hasLoad = false;

  if (el === container) {
    hasLoad = el.scrollHeight - el.clientHeight - el.scrollTop <= 20;
  } else if (el !== container) {
    hasLoad =
      el.getBoundingClientRect().top -
        container.getBoundingClientRect().top +
        el.offsetHeight -
        container.offsetHeight -
        Number(
          window.getComputedStyle(container).borderBottom.match(/(\d+)/)?.[0] ??
            0
        ) <=
      20;
  }

  if (hasLoad) {
    el[INFINITE_SCROLL].cb();
  }
};

export const vDvInfiniteScroll: TDirective = {
  name: "DvInfiniteScroll",
  options: {
    async mounted(el, binding) {
      const { value: cb, instance } = binding;

      if (typeof cb !== "function") {
        throw new Error(
          "'v-dv-infinite-scroll' binding value must be a function"
        );
      }

      await nextTick();

      const container = getScrollContainer(el)!;
      const options = getScrollOptions(el, instance!);

      el[INFINITE_SCROLL] = { cb, instance, onScroll, container, options };

      container.addEventListener(
        "scroll",
        () => onScroll(container, el),
        false
      );
    },
    unmounted(el) {},
  },
};
