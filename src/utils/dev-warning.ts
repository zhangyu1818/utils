const devWarning = (assert: any, warning: string) => {
  if (process.env.NODE_ENV === 'development') {
    if (assert) console.warn(warning);
  }
};

export default devWarning;
