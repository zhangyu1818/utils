/**
 * title: 进阶使用
 * desc: 手动控制计时器
 */

import React, { useState } from 'react';

import useInterval from '../index';

export default () => {
  const [count, setCount] = useState(0);

  const { start, stop } = useInterval(
    () => {
      setCount((prevState) => prevState + 1);
    },
    1000,
    { startRightNow: false, immediate: true },
  );

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={start}>start</button> <button onClick={stop}>stop</button>
    </div>
  );
};
