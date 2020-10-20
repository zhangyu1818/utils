import { ElementType } from './dom/interface';
import devWarning from './dev-warning';

const getElement = <E extends HTMLElement>(element: ElementType<E>) => {
  if (typeof element === 'string') {
    const ele = document.querySelector<E>(element);
    if (!ele) {
      devWarning('element is invalid');
      return null;
    }
    element = ele;
  }
  return element;
};

export default getElement;
