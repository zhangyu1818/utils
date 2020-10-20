function devWarning(warning: string);
function devWarning(assert: boolean, warning: string);
function devWarning(...args) {
  let [assert, warning] = args;
  if (typeof assert === 'string') {
    warning = assert;
    assert = true;
  }

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    if (assert) console.warn(warning);
  }
}

export default devWarning;
