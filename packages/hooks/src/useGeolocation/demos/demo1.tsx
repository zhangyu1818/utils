import React from 'react';

import useGeolocation from '../index';

export default () => {
  const { coords, timestamp, error } = useGeolocation({ enableHighAccuracy: true });

  const renderContent = error ? error.message : JSON.stringify(coords, null, 2);

  return (
    <div>
      <p>timestamp: {timestamp}</p>
      <p>coords: {renderContent}</p>
    </div>
  );
};
