/**
 * title: 基础使用
 * desc: 1000毫秒后调用回调函数
 */

import React, { useState } from 'react';

import useTimeout from '../index';

export default () => {
  const [called, setCalled] = useState(false);

  useTimeout(() => {
    setCalled(true);
  }, 1000);

  return <span>{called ? '已调用' : '未调用'}</span>;
};
