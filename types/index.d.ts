import Vue, { ComponentOptions, PluginObject, Component } from "vue";

interface PluginOptions {
  installComponents?: boolean;
  componentsPrefix?: string;
}

declare const plugin: PluginObject<PluginOptions> & { version: string };

export type ScrollerItem = Record<string, any>;
export type ScrollerDirection = "vertical" | "horizontal";

interface BaseScrollerProps {
  items: ScrollerItem[];
  keyField?: string;
  direction?: ScrollerDirection;
  endingThreshold?: number;
  tag?: string;
  listTag?: string;
  itemTag?: string;
}

export interface RecycleScrollerProps extends BaseScrollerProps {
  itemSize?: number | null;
  minItemSize?: number | string | null;
  sizeField?: string;
  typeField?: string;
  buffer?: number;
  pageMode?: boolean;
  prerender?: number;
  emitUpdate?: boolean;
}

export interface DynamicScrollerProps extends RecycleScrollerProps {
  minItemSize: number | string;
}

export const RecycleScroller: Component<any, any, any, any>;
export const DynamicScroller: Component<any, any, any, any>;
export const DynamicScrollerItem: Component<any, any, any, any>;

export function IdState(options?: {
  idProp?: (vm: any) => string;
}): ComponentOptions<Vue> | typeof Vue;

export default plugin;
