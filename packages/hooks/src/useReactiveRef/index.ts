import * as React from 'react';

import useForceUpdate from '../useForceUpdate';

const useReactiveRef = <T>(value: T) => {
  const ref = React.useRef(value);
  const forceUpdate = useForceUpdate();

  const memoizedState = React.useMemo(() => {
    const state = {};
    Object.defineProperty(state, 'current', {
      get() {
        return ref.current;
      },
      set(value: T) {
        ref.current = value;
        forceUpdate();
      },
    });
    return state as React.MutableRefObject<T>;
  }, []);

  return memoizedState;
};

export default useReactiveRef;
