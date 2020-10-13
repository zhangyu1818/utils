import * as React from 'react';

const useRefresh = () => {
  const [, setState] = React.useState({});
  return () => {
    setState({});
  };
};

export default useRefresh;
