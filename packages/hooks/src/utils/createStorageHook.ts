import * as React from 'react';

import useUpdate from '../useUpdate';
import useEventListener from '../useEventListener';

const createStorageHook = (storage: Storage) => <T>(
  key: string,
  defaultValue: T,
): [T | null, React.Dispatch<React.SetStateAction<T | null>>] => {
  const [data, setData] = React.useState<T | null>(() => {
    const rawValue = storage.getItem(key);
    if (rawValue === null) {
      storage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
    return JSON.parse(rawValue) as T;
  });

  useUpdate(() => {
    const rawValue = storage.getItem(key);
    const nextStorageValue = JSON.stringify(data);
    if (rawValue !== nextStorageValue) {
      storage.setItem(key, nextStorageValue);
    }
  }, [data]);

  useEventListener(window, 'storage', () => {
    const rawValue = storage.getItem(key);
    if (rawValue === null) {
      setData(null);
    } else {
      setData(JSON.parse(rawValue));
    }
  });

  return [data, setData];
};

export default createStorageHook;
