const config = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};

module.exports = config;
