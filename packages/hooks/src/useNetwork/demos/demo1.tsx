import React from 'react';

import useNetwork from '../index';

export default () => {
  const networkState = useNetwork();

  return <pre>{JSON.stringify(networkState, null, 2)}</pre>;
};
