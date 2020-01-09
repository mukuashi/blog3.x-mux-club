// webpack plugin
export default config => {
  config.module
    .rule('svg-with-file')
    .test(/.svg$/)
    .use('svg-with-file-loader')
    .loader('file-loader');
};
