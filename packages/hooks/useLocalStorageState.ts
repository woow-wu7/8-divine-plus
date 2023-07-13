import { ref } from "vue";

type TIsFunction = (fn: any) => boolean;

const isFunction: TIsFunction = (fn: any) => {
  return typeof fn === "function";
};

const createUseLocalStorageState = (_storage: Storage | null) => {
  function useStorageState<T>(key: string, defaultValue: T | (() => T)) {
    const storage = _storage as Storage;

    const state = ref(getStorageValue());

    function getStorageValue() {
      const raw = storage.getItem(key);

      if (raw) {
        try {
          return JSON.parse(raw);
        } catch (err) {}
      }

      if (isFunction(defaultValue)) {
        const value = (defaultValue as () => T)();
        localStorage.setItem(key, JSON.stringify(value));
        return value;
      }

      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }

    function setStorageValue(value: any | undefined) {
      console.log("1111222", 1111222);
      if (value === undefined) {
        storage.removeItem(key);
        state.value = undefined;
      } else {
        storage.setItem(key, JSON.stringify(value));
        state.value = value;
      }

      console.log("state.value", state.value);
    }

    return [state, setStorageValue];
  }

  if (_storage === null) {
    return (_: string, defaultValue: any) => [
      isFunction(defaultValue) ? defaultValue() : defaultValue,
      () => {},
    ];
  }

  return useStorageState;
};

const useLocalStorageState = createUseLocalStorageState(
  typeof window === "object" ? window.localStorage : null
);

export { useLocalStorageState };
