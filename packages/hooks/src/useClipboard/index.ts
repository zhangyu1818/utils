import React from 'react';
import useEventListener from '../useEventListener';

type UseClipboard = () => {
  text: string;
  copy: (text: string) => Promise<void>;
  supported: boolean;
};

const useClipboard: UseClipboard = () => {
  const supported = 'clipboard' in window.navigator;

  const [text, setText] = React.useState('');

  useEventListener(window, 'copy', () => {
    window.navigator.clipboard.readText().then(setText);
  });

  const copy = (text: string) => {
    setText(text);
    return window.navigator.clipboard.writeText(text);
  };

  return { text, copy, supported };
};

export default useClipboard;
