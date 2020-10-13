import React from 'react';

import eventListener, { ListenerType } from 'yuutils/es/event-listener';

function useEventListener<T extends keyof WindowEventMap>(
  target: Window,
  type: T,
  listener: (this: Window, ev: WindowEventMap[T]) => any,
  keys?: [string, string],
): void;
function useEventListener<T extends keyof DocumentEventMap>(
  target: Document,
  type: T,
  listener: (this: Document, ev: DocumentEventMap[T]) => any,
  keys?: [string, string],
): void;
function useEventListener<T = any>(
  target: any,
  type: string,
  listener: ListenerType<T>,
  keys?: [string, string],
): void;
function useEventListener<T = any>(
  target: any,
  type: string,
  listener: ListenerType<T>,
  keys?: [string, string],
) {
  React.useEffect(() => eventListener(target, type, listener, keys), []);
}

export default useEventListener;
