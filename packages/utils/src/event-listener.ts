import noop from './noop';
import devWarning from './dev-warning';

export type ListenerType<T> = (...args: [T, ...any[]]) => void;

function eventListener<T extends keyof WindowEventMap>(
  target: Window,
  type: T,
  listener: (this: Window, ev: WindowEventMap[T]) => any,
  options?: boolean | AddEventListenerOptions,
);
function eventListener<T extends keyof DocumentEventMap>(
  target: Document,
  type: T,
  listener: (this: Document, ev: DocumentEventMap[T]) => any,
  options?: boolean | AddEventListenerOptions,
);
function eventListener<T = any>(
  target: any,
  type: string,
  listener: ListenerType<T>,
  keys?: [string, string],
);
function eventListener<T = any>(
  target: any,
  type: string,
  listener: ListenerType<T>,
  options?: unknown,
);
function eventListener<T = any>(
  target: any,
  type: string,
  listener: ListenerType<T>,
  options?: unknown,
  keys?: [string, string],
);
function eventListener<T = any>(target: any, type: string, listener: ListenerType<T>, ...args) {
  if (!target) {
    devWarning(true, 'target is not correctly');
    return noop;
  }

  let keys;
  let options;
  if (args.length === 1) {
    const [v] = args;
    if (Array.isArray(v)) {
      keys = v;
    } else if (v !== undefined && v !== null) {
      options = v;
    }
  } else if (args.length === 2) {
    [options, keys] = args;
  }
  if (!keys) {
    if ('on' in target && 'off' in target) {
      keys = ['on', 'off'];
    } else if ('addEventListener' in target && 'removeEventListener' in target) {
      keys = ['addEventListener', 'removeEventListener'];
    } else if ('addListener' in target && 'removeListener' in target) {
      keys = ['addListener', 'removeListener'];
    } else {
      devWarning(true, 'eventListener has not correct keys, please pass keys');
      return noop;
    }
  }

  const [add, remove] = keys;
  target[add](type, listener, options);
  return () => {
    target[remove](type, listener, options);
  };
}

export default eventListener;
