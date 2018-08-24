import {resolve} from "path";
//
export default {
  // for query-string@6 https://github.com/sorrycc/blog/issues/68
  es5ImcompatibleVersions: true,
  history: 'hash',
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
        ],
      },
      dll: {
        exclude: [],
        include: ["dva", "dva/router", "dva/saga", "dva/fetch", "antd/es"],
      },
      hardSource: /* isMac */process.platform === 'darwin',
    }],
  ],
  // theme: "./theme.config.js",
  // 接口代理示例
  // proxy: {
  //   "/api/v1/test": {
  //     "target": "https://api.kquanr.com/",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api/v1/test": "/v2/test" }
  //   },
  // },
  sass: {
    'node-sass': true
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    utils: path.resolve(__dirname, 'src/utils/'),
    config: path.resolve(__dirname, 'src/config/'),
    services: path.resolve(__dirname, 'src/services/'),
    models: path.resolve(__dirname, 'src/models/'),
    styles: path.resolve(__dirname, 'src/styles/'),
    layouts: path.resolve(__dirname, 'src/layouts/'),
    assets: path.resolve(__dirname, 'src/assets/'),
    pages: path.resolve(__dirname, 'src/pages/')
  },
  urlLoaderExcludes: [
    /\.svg$/,
  ],
  ignoreMomentLocale: true,
  chainWebpack(config) {
    config.module.rule('svg')
      .test(/\.svg$/i)
      .use('svg-sprite-loader')
      .loader(require.resolve('svg-sprite-loader'));
  },
};