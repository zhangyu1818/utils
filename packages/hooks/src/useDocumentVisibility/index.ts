import React from 'react';

import useEventListener from '../useEventListener';

const useDocumentVisibility = () => {
  const [visibility, setVisibility] = React.useState(document.visibilityState);

  useEventListener(document, 'visibilitychange', () => {
    setVisibility(document.visibilityState);
  });

  return visibility;
};

export default useDocumentVisibility;
