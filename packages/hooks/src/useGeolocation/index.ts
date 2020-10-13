import * as React from 'react';

import noop from 'yuutils/es/noop';

import useMount from '../useMount';

const useGeolocation = (options?: PositionOptions) => {
  const [coords, setCoords] = React.useState<Coordinates | null>(null);
  const [error, setError] = React.useState<PositionError | null>(null);
  const [timestamp, setTimestamp] = React.useState<number | null>(null);

  useMount(() => {
    let watcher = noop;
    if ('geolocation' in window.navigator) {
      const watchId = window.navigator.geolocation.watchPosition(
        (position) => {
          setCoords(position.coords);
          setTimestamp(position.timestamp);

          setError(null);
        },
        (error) => {
          setError(error);
        },
        options,
      );
      watcher = () => {
        window.navigator.geolocation.clearWatch(watchId);
      };
    }
    return () => {
      watcher();
    };
  });

  return { coords, timestamp, error };
};

export default useGeolocation;
