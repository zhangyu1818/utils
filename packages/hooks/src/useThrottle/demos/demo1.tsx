import React, { useState } from 'react';

import useThrottle from '../index';

export default () => {
  const [count, setCount] = useState(0);
  const setCountThrottle = useThrottle(setCount, 1000);

  return (
    <div>
      <p> count: {count}</p>
      <button
        onClick={() => {
          setCountThrottle((prev) => prev + 1);
        }}
      >
        increase
      </button>
    </div>
  );
};
