import * as React from 'react';

import noop from 'yuutils/es/noop';
import eventListener from 'yuutils/es/event-listener';

const usePermission = (name: PermissionName) => {
  const [state, setState] = React.useState<PermissionState>('prompt');

  React.useEffect(() => {
    let removeListener = noop;
    if ('permissions' in window.navigator) {
      window.navigator.permissions
        .query({ name })
        .then((status) => {
          setState(status.state);
          removeListener = eventListener(status, 'change', function (this: PermissionStatus) {
            setState(this.state);
          });
        })
        .catch(noop);
    }
    return () => {
      removeListener();
    };
  }, []);

  return state;
};

export default usePermission;
