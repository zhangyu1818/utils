import React from 'react';

import useRefresh from '../useRefresh';

const useReactiveRef = <T>(value: T) => {
  const ref = React.useRef(value);
  const refresh = useRefresh();

  const memoizedState = React.useMemo(() => {
    const state = {};
    Object.defineProperty(state, 'current', {
      get() {
        return ref.current;
      },
      set(value: T) {
        ref.current = value;
        refresh();
      },
    });
    return state as React.MutableRefObject<T>;
  }, []);

  return memoizedState;
};

export default useReactiveRef;
