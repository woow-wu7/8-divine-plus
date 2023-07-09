import { ref, unref } from "vue";

type TOptions = {
  delay: number;
  responsive?: boolean;
};
type TUseThrottle = (fn: (...args: any[]) => any, options: TOptions) => any;

export const useThrottle: TUseThrottle = (fn, options) => {
  const { delay, responsive = false } = options;

  let startTimer = responsive ? ref(+new Date()) : +new Date();

  return (...args: any[]) => {
    let currentTimer = responsive ? ref(+new Date()) : +new Date();

    if (unref(currentTimer) - unref(startTimer) >= delay) {
      fn(...args);
      startTimer = currentTimer;
    }
  };
};
