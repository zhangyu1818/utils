import React, { useState } from 'react';

import useEventListener from '../index';

const target = {
  bind: (key, cb) => {
    console.log(`event bind ${key}`);
    cb(key);
  },
  unbind: () => {
    console.log('event unbind');
  },
};

export default () => {
  const [key, setKey] = useState('');

  useEventListener<string>(
    target,
    'test',
    (key) => {
      setKey(key);
    },
    ['bind', 'unbind'],
  );

  return <span>事件{key}已绑定</span>;
};
