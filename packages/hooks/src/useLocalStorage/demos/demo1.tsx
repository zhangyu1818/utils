import React from 'react';

import useLocalStorage from '../index';

export default () => {
  const [value, setValue] = useLocalStorage<any>('test_storage', { a: 1 });
  return (
    <div>
      <input
        type="text"
        onChange={({ currentTarget }) => {
          const { value } = currentTarget;
          try {
            setValue(JSON.parse(value));
          } catch {}
        }}
      />
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>
  );
};
