import React from 'react';

import useEventListener from '../useEventListener';
import isRef from '../utils/isRef';

const useFullscreen = (
  target: HTMLElement | React.MutableRefObject<HTMLElement | null> = document.body,
) => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const fullscreenEle = React.useMemo(() => {
    const eleRef = isRef(target) ? target : { current: target };
    return eleRef as React.MutableRefObject<HTMLElement | null>;
  }, [target]);

  useEventListener(document, 'fullscreenchange', () => {
    setIsFullscreen(!!document.fullscreenElement);
  });

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  const enterFullscreen = () => {
    if (fullscreenEle.current && !isFullscreen) {
      fullscreenEle.current.requestFullscreen();
    }
  };

  return { isFullscreen, enterFullscreen, exitFullscreen };
};

export default useFullscreen;
