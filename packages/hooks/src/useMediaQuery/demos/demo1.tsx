import React from 'react';
import useMediaQuery from '../index';

export default () => {
  const matches = useMediaQuery('(min-width: 1440px)');
  return <span>屏幕宽度{matches ? '大于' : '小于'}1440px</span>;
};
