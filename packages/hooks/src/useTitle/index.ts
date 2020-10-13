import React from 'react';

function useTitle(title?: string): [string, (title: string) => void];
function useTitle(resetOnUnmount?: boolean): [string, (title: string) => void];
function useTitle(title?: string, resetOnUnmount?: boolean): [string, (title: string) => void];
function useTitle(...args) {
  const baseTitle = React.useRef(document.title);
  const [title, setTitle] = React.useState(document.title);

  React.useEffect(() => {
    if (document.title !== title) {
      document.title = title;
    }
  }, [title]);

  React.useEffect(() => {
    let title, resetOnUnmount;

    if (args.length === 2) {
      title = args[0];
      resetOnUnmount = args[1];
    } else {
      if (typeof args[0] === 'string') {
        title = args[0];
      }
      if (typeof args[0] === 'boolean') {
        resetOnUnmount = args[0];
      }
    }
    if (title !== undefined) {
      setTitle(title);
    }

    return () => {
      if (resetOnUnmount) {
        document.title = baseTitle.current;
      }
    };
  }, []);

  return [title, setTitle];
}

export default useTitle;
