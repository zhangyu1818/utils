import React from 'react';
import eventListener from 'yuutils/es/event-listener';
import noop from 'yuutils/es/noop';

import useMount from '../useMount';
import useEventListener from '../useEventListener';

export type NetworkType =
  | 'bluetooth'
  | 'cellular'
  | 'ethernet'
  | 'none'
  | 'wifi'
  | 'wimax'
  | 'other'
  | 'unknown';

export type NetworkEffectiveType = 'slow-2g' | '2g' | '3g' | '4g';

export interface NetworkState {
  isOnline: boolean;
  offlineAt?: number;
  downlink?: number;
  downlinkMax?: number;
  effectiveType?: NetworkEffectiveType;
  saveData?: boolean;
  type?: NetworkType;
}

const useNetwork = () => {
  const { connection } = window.navigator as any;

  const [networkState, setNetworkState] = React.useState<NetworkState>({
    isOnline: window.navigator.onLine,
    downlink: connection && connection.downlink,
    downlinkMax: connection && connection.downlinkMax,
    effectiveType: connection && connection.effectiveType,
    saveData: connection && connection.saveData,
    type: connection && connection.type,
  });

  useEventListener(window, 'online', () => {
    setNetworkState((prevState) => ({ ...prevState, isOnline: true, offlineAt: undefined }));
  });

  useEventListener(window, 'offline', () => {
    setNetworkState((prevState) => ({ ...prevState, isOnline: false, offlineAt: Date.now() }));
  });

  useMount(() => {
    let removeListener = noop;
    if (connection) {
      removeListener = eventListener(connection, 'change', () => {
        setNetworkState((prevState) => ({
          ...prevState,
          downlink: connection.downlink,
          downlinkMax: connection.downlinkMax,
          effectiveType: connection.effectiveType,
          rtt: connection.rtt,
          saveData: connection.saveData,
          type: connection.type,
        }));
      });
    }
    return () => {
      removeListener();
    };
  });

  return networkState;
};

export default useNetwork;
