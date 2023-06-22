export const COLLAPSE = Symbol("collapse");

export interface ICollapseProps {
  moduleValue: string[];
}

export interface ICollapseState {
  activeNames: string[];
}
