# 3.x Version Blog
基于UmiJS的新尝试，引入服务端渲染SSR等，仍然保持React、Redux等技术栈。
- React + Redux + dvajs + umijs等
- Preview： http://kquanr.com/3.x
- 1.x：http://kquanr.com
- 2.x：http://kquanr.com/2.x
- more...

# Usage
* umijs：https://umijs.org
* dvajs：https://dvajs.com
* reactjs：https://reactjs.org
* redux-devtools：https://github.com/gaearon/redux-devtools(本地开发利器/时间旅行器)

## Features

* 📦 **开箱即用**，内置 react、react-router 等
* 🏈 **类 next.js 且[功能完备](https://umijs.org/guide/router.html)的路由约定**，同时支持配置的路由方式
* 🎉 **完善的插件体系**，覆盖从源码到构建产物的每个生命周期
* 🚀 **高性能**，通过插件支持 PWA、以路由为单元的 code splitting 等
* 💈 **支持静态页面导出**，适配各种环境，比如中台业务、无线业务、[egg](https://github.com/eggjs/egg)、支付宝钱包、云凤蝶等
* 🚄 **开发启动快**，支持一键开启 [dll](https://umijs.org/plugin/umi-plugin-react.html#dll) 和 [hard-source-webpack-plugin](https://umijs.org/plugin/umi-plugin-react.html#hardSource) 等
* 🐠 **一键兼容到 IE9**，基于 [umi-plugin-polyfills](https://umijs.org/plugin/umi-plugin-react.html#polyfills)
* 🍁 **完善的 TypeScript 支持**，包括 d.ts 定义和 umi test
* 🌴 **与 dva 数据流的深入融合**，支持 duck directory、model 的自动加载、code splitting 等等

# Structure
```
├── /mock/           # 数据mock
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /assets/       # 公共文件，编译时copy至dist目录
│ ├── /components/   # UI组件及UI相关方法
│ │ ├── skin.less    # 全局样式
│ │ └── vars.less    # 全局样式变量
│ ├── /pages/        # 页面
│ │ └── /user/       # 路由
│ │   ├── /components/ #私有组件     
│ │   ├── /models/     #私有模型(按需加载) 
│ │   ├── /services/   #私有服务(按需加载)   
│ │   ├── page.js       
│ │   └── page.less   
│ ├── /models/       # 全局数据模型(默认加载)
│ ├── /services/     # 数据接口
│ ├── /themes/       # 项目样式
│ ├── /utils/        # 工具函数
│ │ ├── config.js    # 项目常规配置
│ │ ├── menu.js      # 菜单及面包屑配置
│ │ ├── config.js    # 项目常规配置
│ │ ├── request.js   # 异步请求函数
│ │ └── theme.js     # 项目需要在js中使用到样式变量
│ ├── route.js       # 路由配置
│ ├── index.js       # 入口文件
│ └── global.css(.less) #全局样式文件     
├── package.json     # 项目信息
├── .eslintrc        # Eslint配置
口
```
- Home(首页)
  - components => Header + content1 + content2 + ... + Footer
  - index.js
  - index.scss

```

# Usage

```bash
#本地开发
$ git clone git@github.com:PhotoArtLife/blog3.x-mux-club.git 请选择SSH方式
$ mkdir your-blog-name -> cd your-blog-name 
$ npm install
$ npm start # visit http://localhost:8000（或online ip支持同局域网移动端开发适配）

#线上部署
测试环境：
$ npm run build(可选)
$ ssh 

#Issue
npm install可能会出现部分依赖包安装不上的情况，可以试下国内代理的方式：npm install --registry=https://registry.npm.taobao.org