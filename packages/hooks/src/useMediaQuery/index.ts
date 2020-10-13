import React from 'react';

import useEventListener from '../useEventListener';

const useMediaQuery = (query: string) => {
  const mediaQuery = React.useRef(window.matchMedia(query));
  const [matches, setMatches] = React.useState(mediaQuery.current.matches);

  useEventListener<MediaQueryListEvent>(mediaQuery.current, 'change', event => {
    setMatches(event.matches);
  });

  return matches;
};

export default useMediaQuery;
