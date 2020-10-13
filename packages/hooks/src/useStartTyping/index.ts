/* this implementation is original ported from https://github.com/streamich/react-use by Vadim Dalecky */

import keyCode from 'yuutils/es/key-code';
import useEventListener from '../useEventListener';

const isFocusedElementEditable = () => {
  const { activeElement, body } = document;
  if (!activeElement) {
    return false;
  }
  if (activeElement === body) {
    return false;
  }
  // eslint-disable-next-line default-case
  switch (activeElement.tagName) {
    case 'INPUT':
    case 'TEXTAREA':
      return true;
  }
  return activeElement.hasAttribute('contenteditable');
};

const isTypedCharGood = ({ keyCode: currentKeyCode, metaKey, ctrlKey, altKey }: KeyboardEvent) => {
  if (metaKey || ctrlKey || altKey) {
    return false;
  }
  if (currentKeyCode >= keyCode.ZERO && currentKeyCode <= keyCode.NINE) {
    return true;
  }
  if (currentKeyCode >= keyCode.NUM_ZERO && currentKeyCode <= keyCode.NUM_NINE) {
    return true;
  }
  if (currentKeyCode >= keyCode.A && currentKeyCode <= keyCode.Z) {
    return true;
  }
  return false;
};

const useStartTyping = (onStartTyping: (event: KeyboardEvent) => void) => {
  useEventListener(document, 'keydown', (event) => {
    if (!isFocusedElementEditable() && isTypedCharGood(event)) {
      onStartTyping(event);
    }
  });
};

export default useStartTyping;
