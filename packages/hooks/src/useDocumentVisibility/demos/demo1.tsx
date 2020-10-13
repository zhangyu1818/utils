/**
 * title: 基础使用
 * desc: 缩小浏览器观察 alert 内容
 */

import React from 'react';

import useDocumentVisibility from '../index';

export default () => {
  const visibility = useDocumentVisibility();
  alert(visibility);

  return <span>visibilityState: {visibility}</span>;
};
