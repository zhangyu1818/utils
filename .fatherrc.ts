export default {
  pkgs:[
    'utils',
    'hooks'
  ],
  esm: 'babel',
  preCommit: {
    eslint: true,
    prettier: true,
  },
};
