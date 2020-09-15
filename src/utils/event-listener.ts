import noop from './noop';

type ListenerType<T> = (...args: [T, ...any[]]) => void;

const eventListener = <T = any>(
  target: any,
  type: string,
  listener: ListenerType<T>,
  keys?: [string, string],
) => {
  if (!keys) {
    if ('on' in target && 'off' in target) {
      keys = ['on', 'off'];
    } else if ('addEventListener' in target && 'removeEventListener' in target) {
      keys = ['addEventListener', 'removeEventListener'];
    } else if ('addListener' in target && 'removeListener' in target) {
      keys = ['addListener', 'removeListener'];
    } else {
      console.warn('eventListener has not correct keys, please pass keys');
      return noop;
    }
  }

  const [add, remove] = keys;
  (target as any)[add](type, listener);
  return () => {
    (target as any)[remove](type, listener);
  };
};

export default eventListener;
