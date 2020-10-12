import React from 'react';

import useTitle from '../index';

export default () => {
  const [title, setTitle] = useTitle('page title');

  return (
    <div>
      <p>当前title: {title}</p>
      设置title:{' '}
      <input
        type="text"
        onChange={({ currentTarget }) => {
          setTitle(currentTarget.value);
        }}
      />
    </div>
  );
};
