import React from 'react';
import useClipboard from '../index';

export default () => {
  const { text, copy, supported } = useClipboard();
  return (
    <div>
      <p>浏览器{supported ? '支持' : '不支持'}Clipboard API</p>
      <p>当前剪贴板：{text}</p>
      <button onClick={() => copy('abc')}>复制为abc</button>
    </div>
  );
};
