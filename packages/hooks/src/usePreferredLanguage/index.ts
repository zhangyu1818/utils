import * as React from 'react';

import useEventListener from '../useEventListener';

const usePreferredLanguage = () => {
  const [language, setLanguage] = React.useState(navigator.language);

  useEventListener(window, 'languagechange', () => {
    setLanguage(navigator.language);
  });

  return language;
};

export default usePreferredLanguage;
