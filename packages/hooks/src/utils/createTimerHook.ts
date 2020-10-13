import React from 'react';

type CreateTimerHook = (
  type: 'setTimeout' | 'setInterval',
) => (
  fn: () => void,
  delay: number,
  options?: {
    startRightNow?: boolean;
    immediate?: boolean;
  },
) => { start: () => void; stop: () => void };

const createTimerHook: CreateTimerHook = (type) => (
  fn,
  delay,
  options = { startRightNow: true },
) => {
  const timer = React.useRef(0);

  const stop = React.useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = 0;
    }
  }, []);

  const start = React.useCallback(() => {
    stop();
    timer.current = window[type](fn, delay);
    const { immediate } = options;
    if (immediate) {
      fn();
    }
  }, []);

  React.useEffect(() => {
    const { startRightNow = true } = options;
    if (startRightNow) {
      start();
    }
    return stop;
  }, []);

  return { start, stop };
};

export default createTimerHook;
