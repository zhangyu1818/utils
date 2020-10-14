import React, { useRef } from 'react';

import useCssVar from '../index';

export default () => {
  const ref = useRef<HTMLDivElement>(null);
  const color = useCssVar('--color', ref);

  return (
    <div ref={ref}>
      <input
        type="text"
        placeholder="请输入颜色"
        onChange={({ currentTarget }) => {
          color.current = currentTarget.value;
        }}
      />
      <p style={{ color: 'var(--color)' }}>当前颜色: {color.current}</p>
    </div>
  );
};
