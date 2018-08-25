// Change theme plugin
const plugin = config => {
  config.module
    .rule('svg')
    .test(/\.svg$/i)
    .use('svg-sprite-loader')
    .loader(require.resolve('svg-sprite-loader'));
};

module.exports = plugin;
