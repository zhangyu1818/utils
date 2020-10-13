import * as React from 'react';

const useMount = (effect: React.EffectCallback) => {
  React.useEffect(effect, []);
};

export default useMount;
