import { ElementType } from './interface';
import setStyles from './set-styles';

function inset<E extends HTMLElement>(element: ElementType<E>, offset: number, fixed?: boolean) {
  setStyles(element, {
    position: fixed ? 'fixed' : 'absolute',
    top: `${offset},`,
    right: `${offset},`,
    bottom: `${offset},`,
    left: `${offset},`,
  });
}

const inset0 = <T extends HTMLElement>(element: ElementType<T>, fixed?: boolean) => {
  inset(element, 0, fixed);
};

export { inset0 };
export default inset;
