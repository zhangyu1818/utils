export type ShareOptions = {
  title?: string;
  files?: File[];
  text?: string;
  url?: string;
};

const useShare = (defaultOptions?: ShareOptions) => {
  const share = (options?: ShareOptions) => {
    const shareOptions = { ...defaultOptions, ...options };
    return new Promise((resolve, reject) => {
      if ('share' in window.navigator) {
        let canShare = true;
        if ('files' in shareOptions && 'canShare' in window.navigator) {
          // @ts-ignore
          canShare = window.navigator.canShare({ files: shareOptions.files });
        }
        if (canShare) {
          window.navigator.share(shareOptions).then(resolve).catch(reject);
        }
      } else {
        reject();
      }
    });
  };

  return share;
};

export default useShare;
