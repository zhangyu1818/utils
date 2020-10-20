import * as React from 'react';

import throttle from 'lodash.throttle';

interface ThrottleOptions {
  leading?: boolean;
  trailing?: boolean;
}

const useThrottle = <T extends (...args: any) => any>(
  fn: T,
  wait: number,
  options?: ThrottleOptions,
) => {
  const throttleFn = React.useMemo(() => throttle(fn, wait, options), []);

  return throttleFn;
};

export default useThrottle;
