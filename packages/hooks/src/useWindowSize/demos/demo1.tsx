import React from 'react';

import useWindowSize from '../index';

export default () => {
  const size = useWindowSize();

  return <pre>{JSON.stringify(size, null, 2)}</pre>;
};
