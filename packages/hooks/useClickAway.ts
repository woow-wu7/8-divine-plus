import { isRef } from "vue";
import type { Ref } from "vue";

type TTarget = Ref<HTMLElement> | HTMLElement;
type TDocumentEventKey = keyof DocumentEventMap;

type TUseClickAway = (
  onClickAway: (e: MouseEvent) => void,
  targets: TTarget | TTarget[],
  events: TDocumentEventKey | TDocumentEventKey[]
) => void;

export const useClickAway: TUseClickAway = (
  onClickAway,
  targets,
  events = "click"
) => {
  const targetList = Array.isArray(targets) ? targets : [targets];
  const eventsList = Array.isArray(events) ? events : [events];

  const getTarget = (target: TTarget): HTMLElement => {
    if (isRef(target)) {
      return target.value;
    }
    return target;
  };

  const handler = (e: any) => {
    const isChild = targetList.some((targetItem) => {
      const target = getTarget(targetItem);
      return target && target.contains(e.target);
    });

    if (isChild) return;

    onClickAway(e);
  };

  eventsList.forEach((eventType) => {
    document.addEventListener(eventType, handler, false);
  });
};
