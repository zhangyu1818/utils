import getElement from '../utils/get-element';
import { ElementType } from './interface';

const setStyles = <E extends HTMLElement>(
  element: ElementType<E>,
  style: Partial<CSSStyleDeclaration>,
) => {
  const ele = getElement(element);
  if (ele) {
    Object.entries(style).forEach(([key, value]) => {
      // todo
      (ele.style as any)[key] = value;
    });
  }
};

export default setStyles;
