import * as React from 'react';
import debounce from 'lodash.debounce';

export interface DebounceOptions {
  maxWait?: number;
  leading?: boolean;
  trailing?: boolean;
}

const useDebounce = <T extends (...args: any) => any>(
  fn: T,
  wait: number,
  options?: DebounceOptions,
) => {
  const debounceFn = React.useMemo(() => debounce(fn, wait, options), []);

  return debounceFn;
};

export default useDebounce;
