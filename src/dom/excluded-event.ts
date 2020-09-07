/**
 * 事件中排除某一个元素
 * @param fn 调用的函数
 * @param element 排除的元素
 */
const excludedEvent = <T extends Event, K extends HTMLElement = HTMLElement>(
  fn: (e: T) => void,
  element: K | string,
) => {
  let excludedElement: K | null;
  return (e: T) => {
    excludedElement = typeof element === 'string' ? document.querySelector<K>(element) : element;
    if (!excludedElement) throw new Error('element is invalid');
    const { target } = e;
    if (excludedElement.contains(target as Node)) return;
    fn(e);
  };
};

export default excludedEvent;
