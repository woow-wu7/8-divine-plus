import type { TDirective } from "./utils";

const INFINITE_SCROLL = "INFINITE_SCROLL";

const getContainer = (el: any) => {
  while (el) {
    const style = window.getComputedStyle(el);
    const { overflow } = style;
    const hasScroll = ["scroll", "auto"].includes(overflow);

    if ([window, document.documentElement].includes(el)) {
      return window;
    } else if (hasScroll) {
      return el;
    }
    el = el.parentNode;
  }
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

    console.log(
      "first",
      el.getBoundingClientRect().top -
        container.getBoundingClientRect().top +
        el.offsetHeight -
        container.offsetHeight -
        Number(
          window.getComputedStyle(container).borderBottom.match(/(\d+)/)?.[0] ??
            0
        ) <=
        20
    );
    console.log(
      "222222",
      el.getBoundingClientRect().top -
        container.getBoundingClientRect().top +
        el.offsetHeight -
        container.offsetHeight -
        Number(
          window.getComputedStyle(container).borderBottom.match(/(\d+)/)?.[0] ??
            0
        )
    );
    console.log("hasLoad", hasLoad);
  }

  if (hasLoad) {
    el[INFINITE_SCROLL].cb();
  }
};

export const vDvInfiniteScroll: TDirective = {
  name: "DvInfiniteScroll",
  options: {
    mounted(el, binding) {
      const container = getContainer(el);
      const { value: cb, instance } = binding;
      el[INFINITE_SCROLL] = { cb, instance, onScroll };

      container.addEventListener(
        "scroll",
        () => onScroll(container, el),
        false
      );
    },
    unmounted(el) {},
  },
};
