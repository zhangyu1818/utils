import React, { useRef } from 'react';

import useFullscreen from '../index';

export default () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen(ref);

  return (
    <div ref={ref} style={{ background: '#fff' }}>
      <p>{isFullscreen ? '已全屏' : '未全屏'}</p>
      <button onClick={enterFullscreen}>进入全屏</button>{' '}
      <button onClick={exitFullscreen}>退出全屏</button>
    </div>
  );
};
