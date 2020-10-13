import React from 'react';

import useShare from '../index';

export default () => {
  const share = useShare({
    title: 'MDN',
    url: 'https://developer.mozilla.org',
  });

  return (
    <button
      onClick={() => {
        share({ text: 'Learn web development on MDN!' }).catch(() => {
          alert('浏览器不支持Web Share API');
        });
      }}
    >
      分享
    </button>
  );
};
