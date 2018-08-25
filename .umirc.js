import { resolve } from "path";
//
export default {
  // for query-string@6 https://github.com/sorrycc/blog/issues/68
  es5ImcompatibleVersions: true,
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true,
        dva: true,
        routes: {
          exclude: [
            /model\.(j|t)sx?$/,
            /service\.(j|t)sx?$/,
            /models\//,
            /components\//,
            /services\//
          ]
        },
        dll: {
          exclude: [],
          include: ["dva", "dva/router", "dva/saga", "dva/fetch", "antd/es"]
        },
        hardSource: /* isMac */ process.platform === "darwin"
      }
    ]
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
    "node-sass": true
  },
  alias: {
    components: resolve(__dirname, "src/components/"),
    utils: resolve(__dirname, "src/utils/"),
    config: resolve(__dirname, "src/config/"),
    services: resolve(__dirname, "src/services/"),
    models: resolve(__dirname, "src/models/"),
    styles: resolve(__dirname, "src/styles/"),
    layouts: resolve(__dirname, "src/layouts/"),
    assets: resolve(__dirname, "src/assets/"),
    pages: resolve(__dirname, "src/pages/")
  },
  urlLoaderExcludes: [/\.svg$/],
  ignoreMomentLocale: true,
  chainWebpack(config) {
    config.module
      .rule("svg")
      .test(/\.svg$/i)
      .use("svg-sprite-loader")
      .loader(require.resolve("svg-sprite-loader"));
  }
};
