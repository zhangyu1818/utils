import React, { useState } from 'react';

import useDebounce from '../index';

export default () => {
  const [count, setCount] = useState(0);
  const setCountDebounce = useDebounce(setCount, 1000);

  return (
    <div>
      <p> count: {count}</p>
      <button
        onClick={() => {
          setCountDebounce((prev) => prev + 1);
        }}
      >
        increase
      </button>
    </div>
  );
};
