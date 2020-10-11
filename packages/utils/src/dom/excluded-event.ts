import getElement from '../get-element';
import { ElementType } from './interface';

/**
 * 事件中排除某一个元素
 * @param fn 调用的函数
 * @param element 排除的元素
 */
const excludedEvent = <T extends Event, E extends HTMLElement = HTMLElement>(
  fn: (e: T) => void,
  element: ElementType<E>,
) => {
  let excludedElement: E | null;
  return (e: T) => {
    excludedElement = getElement<E>(element);
    if (!excludedElement) return;

    const { target } = e;
    if (excludedElement.contains(target as Node)) return;
    fn(e);
  };
};

export default excludedEvent;
