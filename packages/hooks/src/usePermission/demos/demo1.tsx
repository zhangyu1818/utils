import React from 'react';

import usePermission from '../index';

export default () => {
  const state = usePermission('geolocation');
  return (
    <div>
      <p>当前定位权限: {state}</p>
      <button
        onClick={() => {
          window.navigator.geolocation.getCurrentPosition(console.log);
        }}
      >
        获取定位
      </button>
    </div>
  );
};
