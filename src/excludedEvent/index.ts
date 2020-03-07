function excludedEvent<T extends any, K extends HTMLElement = HTMLDivElement>(
  fn: (e: T) => void,
  element: K | string
) {
  let excludedElement: K;
  return function(e: T) {
    if (!excludedElement) {
      excludedElement =
        typeof element === "string"
          ? (document.querySelector(element) as K)
          : element;
      if (!excludedElement) throw new Error("element is invalid");
    }
    const { target } = e;
    if (excludedElement.contains(target as Node)) return;
    fn(e);
  };
}

export default excludedEvent;
