/**
 * title: 基础使用
 * desc: 当input未聚焦时，输入内容时input会自动聚焦。
 */

import React, { useRef } from 'react';

import useStartTyping from '../index';

export default () => {
  const ref = useRef<HTMLInputElement>(null);

  useStartTyping(() => {
    if (ref.current) {
      ref.current.focus();
    }
  });

  return <input type="text" ref={ref} />;
};
