// https://umijs.org/config/
import { resolve } from 'path';
import pageRoutes from './router.config';
import webpackplugin from './plugin.config';
import defaultSettings from './settings.config';

const { TEST, APP_TYPE } = process.env;

const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      // 国际化配置，locale，3.x暂时不适配
      locale: {
        enable: false, // default false
        default: 'zh-CN', // default zh-CN
        baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
      },
      library: 'react', // 默认底层库 react | preact
      fastClick: true,
      title: defaultSettings.title,
      dynamicImport: {
        loadingComponent: './components/Loading/index',
      },
      pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          importWorkboxFrom: 'local',
        },
      },
    },
  ],
];

export default {
  // add for transfer to umi
  plugins,
  targets: {
    ie: 8,
  },
  define: {
    APP_TYPE: APP_TYPE || '',
  },
  treeShaking: true,
  devtool: TEST ? 'source-map' : false,
  // 路由配置
  routes: pageRoutes,
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  sass: {

  },
  alias: {
    '@': resolve(__dirname, 'src'), // umi默认，也可以不设置或在chainWebpack通过
    config: resolve(__dirname, '_conf'),
  },
  disableRedirectHoist: true,
  urlLoaderExcludes: [/\.svg$/],
  ignoreMomentLocale: true,
  disableDynamicImport: true,
  disableCSSModules: false, // css modules
  publicPath: `${ defaultSettings.version }/`,
  hash: true,
  manifest: {
    basePath: '/',
  },
  chainWebpack: webpackplugin,
  cssnano: {
    mergeRules: false,
  },
};
