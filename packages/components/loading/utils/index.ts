export const processPosition = (el: any) => {
  var position = document.defaultView
    ?.getComputedStyle(el)
    .getPropertyValue("position");

  if (position === "static") {
    el.setAttribute("style", "position:relative");
  }
};
