import * as React from 'react';

const useUpdate = (effect: React.EffectCallback, deps?: React.DependencyList) => {
  const isMount = React.useRef(false);

  React.useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    return effect();
  }, deps);
};

export default useUpdate;
