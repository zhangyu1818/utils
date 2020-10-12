/**
 * title: 基础使用
 * desc: 每1000毫秒count加1
 */

import React, { useState } from 'react';

import useInterval from '../index';

export default () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((prevState) => prevState + 1);
  }, 1000);

  return <span>count: {count}</span>;
};
