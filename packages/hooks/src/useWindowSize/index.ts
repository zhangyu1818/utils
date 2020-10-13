import * as React from 'react';
import useEventListener from '../useEventListener';

const useWindowSize = () => {
  const [size, setSize] = React.useState({ width: window.innerWidth, height: window.innerHeight });

  useEventListener(window, 'resize', () => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  });

  return size;
};

export default useWindowSize;
