import React from 'react';

import usePreferredColorScheme from '../index';

export default () => {
  const color = usePreferredColorScheme();
  return <span>当前系统主题色： {color}</span>;
};
