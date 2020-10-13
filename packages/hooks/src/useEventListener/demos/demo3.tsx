/**
 * title: 传递事件options
 * desc: 事件触发一次后即失效
 */
import React, { useState } from 'react';

import useEventListener from '../index';

export default () => {
  const [count, setCount] = useState(0);

  useEventListener(
    document,
    'click',
    () => {
      setCount((prevState) => prevState + 1);
    },
    { once: true },
  );

  return <span>点击了页面{count}次</span>;
};
