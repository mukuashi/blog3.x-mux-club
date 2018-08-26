import { resolve } from 'path';
//
export default {
  // for query-string@6 https://github.com/sorrycc/blog/issues/68
  es5ImcompatibleVersions: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          hmr: true,
        },
        routes: {
          exclude: [
            /model\.(j|t)sx?$/,
            /service\.(j|t)sx?$/,
            /models\//,
            /components\//,
            /services\//,
          ],
        },
        locale: {
          enable: true, // default false
          default: 'zh-CN', // default zh-CN
          baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
        },
        singular: true, // when singular is not true, use locales as the resources folder
        polyfills: ['ie9'],
        ...(!process.env.TEST && require('os').platform() === 'darwin'
          ? {
              dll: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
              hardSource: true,
            }
          : {}),
      },
    ],
  ],
  theme: './src/config/theme.js',
  // 接口代理示例
  // proxy: {
  //   "/api/v1/test": {
  //     "target": "https://api.kquanr.com/",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api/v1/test": "/v2/test" }
  //   },
  // },
  sass: {
    'node-sass': true,
  },
  alias: {
    components: resolve(__dirname, 'src/components/'),
    utils: resolve(__dirname, 'src/utils/'),
    config: resolve(__dirname, 'src/config/'),
    services: resolve(__dirname, 'src/services/'),
    models: resolve(__dirname, 'src/models/'),
    styles: resolve(__dirname, 'src/styles/'),
    layouts: resolve(__dirname, 'src/layouts/'),
    assets: resolve(__dirname, 'src/assets/'),
    pages: resolve(__dirname, 'src/pages/'),
  },
  urlLoaderExcludes: [/\.svg$/],
  ignoreMomentLocale: true,
  chainWebpack(config) {
    config.module
      .rule('svg')
      .test(/\.svg$/i)
      .use('svg-sprite-loader')
      .loader(require.resolve('svg-sprite-loader'));
  },
};
