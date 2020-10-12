import React from 'react';

import useReactiveRef from '../index';

export default () => {
  const count = useReactiveRef(0);
  return (
    <div>
      <p>count:{count.current}</p>
      <button onClick={() => count.current--}>decrease</button>{' '}
      <button onClick={() => count.current++}>increase</button>
    </div>
  );
};
