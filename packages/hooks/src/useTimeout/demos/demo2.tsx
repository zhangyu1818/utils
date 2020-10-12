/**
 * title: 进阶使用
 * desc: 手动控制计时器
 */

import React, { useState } from 'react';

import useTimeout from '../index';

export default () => {
  const [count, setCount] = useState(0);

  const { start, stop } = useTimeout(
    () => {
      setCount((prevState) => prevState + 1);
    },
    1000,
    { startRightNow: false },
  );

  return (
    <div>
      <p>调用次数: {count}</p>
      <button onClick={start}>start</button> <button onClick={stop}>stop</button>
    </div>
  );
};
