import type { App } from "vue";
import { DivinePlusComponent } from "./component";

import { DvContainer } from "./packages/container";
import { DvHeader } from "./packages/header";
import { DvFooter } from "./packages/footer";
import { DvAside } from "./packages/aside";
import { DvMain } from "./packages/main";

import { DvRow } from "./packages/row";
import { DvCol } from "./packages/col";

import { DvBreadcrumb } from "./packages/breadcrumb";
import { DvBreadcrumbItem } from "./packages/breadcrumb-item";

import { DvEmpty } from "./packages/empty";
import { DvBacktop } from "./packages/backtop";
import { DvTag } from "./packages/tag";
import { DvBadge } from "./packages/badge";

export interface InstallationOptions {
  locale: any;
  i18n: any;
  size: string;
}

export const version: string;

export function install(vue: App, options: InstallationOptions): void;

export type Component = DivinePlusComponent;

export const Container: DvContainer;
export const Header: DvHeader;
export const Footer: DvFooter;
export const Aside: DvAside;
export const Main: DvMain;

export const Row: DvRow;
export const Col: DvCol;

export const Breadcrumb: DvBreadcrumb;
export const BreadcrumbItem: DvBreadcrumbItem;

export const Empty: DvEmpty;
export const Backtop: DvBacktop;
export const Tag: DvTag;
export const Badge: DvBadge;
