import * as React from 'react';

import getElement from 'yuutils/es/get-element';

import useReactiveRef from '../useReactiveRef';

function useCssVar(prop: string, selector?: string);
function useCssVar(prop: string, refEl?: React.MutableRefObject<HTMLElement | null>);
function useCssVar(
  prop: string,
  arg: string | React.MutableRefObject<HTMLElement | null> = 'html',
) {
  const ele = React.useRef<HTMLElement | null>(null);
  const cssVar = useReactiveRef('');

  React.useEffect(() => {
    if (typeof arg === 'string') {
      ele.current = getElement(arg);
    } else {
      ele.current = arg.current;
    }

    if (ele.current) {
      cssVar.current = window.getComputedStyle(ele.current).getPropertyValue(prop);
    }
  }, []);

  React.useEffect(() => {
    if (ele.current) {
      ele.current.style.setProperty(prop, cssVar.current);
    }
  });

  return cssVar;
}

export default useCssVar;
