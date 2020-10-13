import * as React from 'react';

import eventListener, { ListenerType } from 'yuutils/es/event-listener';

function useEventListener<T extends keyof WindowEventMap>(
  target: Window,
  type: T,
  listener: (this: Window, ev: WindowEventMap[T]) => any,
  options?: boolean | AddEventListenerOptions,
): void;
function useEventListener<T extends keyof DocumentEventMap>(
  target: Document,
  type: T,
  listener: (this: Document, ev: DocumentEventMap[T]) => any,
  options?: boolean | AddEventListenerOptions,
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
  options?: unknown,
): void;
function useEventListener<T = any>(
  target: any,
  type: string,
  listener: ListenerType<T>,
  options?: unknown,
  keys?: [string, string],
): void;
function useEventListener<T = any>(target: any, type: string, listener: ListenerType<T>, ...args) {
  React.useEffect(() => eventListener(target, type, listener, ...args), []);
}

export default useEventListener;
