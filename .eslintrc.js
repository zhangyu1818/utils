const config = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'no-shadow': 'off',
    'no-param-reassign': 'off',
  },
};

module.exports = config;
