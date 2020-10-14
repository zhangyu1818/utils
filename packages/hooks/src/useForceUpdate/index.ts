import * as React from 'react';

const useForceUpdate = () => {
  const [, setState] = React.useState({});
  return () => {
    setState({});
  };
};

export default useForceUpdate;
