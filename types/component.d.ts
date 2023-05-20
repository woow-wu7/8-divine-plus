// For this project development
import "@vue/runtime-core";

declare module "@vue/runtime-core" {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    DvContainer: typeof import("../packages/components/container/index");
    DvRow: typeof import("../packages/components/row/index");
    DvCol: typeof import("../packages/components/col/index");

    DvDivider: typeof import("../packages/components/divider/index");
    DvBreadcrumb: typeof import("../packages/components/breadcrumb/index");
    DvBadge: typeof import("../packages/components/badge/index");
    DvTag: typeof import("../packages/components/tag/index");
    DvEmpty: typeof import("../packages/components/empty/empty");
    DvBacktop: typeof import("../packages/components/backtop/index");
  }

  interface ComponentCustomProperties {
    // $message:""
  }
}

export {};
