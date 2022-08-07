import { App, Plugin } from "vue";

type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  (main as SFCWithInstall<T>).install = (app: App) => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [compName, comp] of Object.entries(extra)) {
      (main as Record<string, any>)[compName] = comp;
    }
  }

  return main as SFCWithInstall<T> & E; // 将 T 断言为具体的类型 T & plugin & Record<string, any>
};

// 1
// withInstall
// - effect: install component and return component
// - advantage:
//   - 1. 注册插件: 比如 breadcrumb 和 breadcrumb-item，利用 withInstall 在单独注册插件时，只需要 app.use(breadcrumb) 而不用再写 app.use(breadcrumb.item)
//   - 2. 使用组件: 在 Breadcrumb.BreadcrumbItem 就可以调用到 BreadcrumbItem

// 2
// Record<string, any>
// - object key: string
// - object value: any

// 3
// SFC 是 vue 组件使用的规范
// - https://v3.cn.vuejs.org/api/sfc-spec.html#%E4%BB%8B%E7%BB%8D
