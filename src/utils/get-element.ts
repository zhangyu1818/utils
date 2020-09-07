import { ElementType } from '../dom/interface';

const getElement = <E extends HTMLElement>(element: ElementType<E>) => {
  if (typeof element === 'string') {
    const ele = document.querySelector<E>(element);
    if (!ele) {
      console.warn('element is invalid');
      return null;
    }
    element = ele;
  }
  return element;
};

export default getElement;
