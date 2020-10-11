import useMediaQuery from '../useMediaQuery';

const usePreferredColorScheme = () => {
  const isDark = useMediaQuery('(prefers-color-scheme: dark)');
  const isLight = useMediaQuery('(prefers-color-scheme: light)');

  if (isDark) return 'dark';
  if (isLight) return 'light';
  return 'no-preference';
};

export default usePreferredColorScheme;
