# blog3.x-mux-club
☔️3.x blog | use nodejs、dvajs、umijs.etc made a animate manage flex web.
# 3.x Version Blog
基于dvajs后的一次新尝试，引入umijs、服务端渲染SSR等，仍然保持React、Redux等技术栈。
- React + Redux + dvajs + umijs等
- Preview： http://kquanr.com/3.x
- others：1.x（http://kquanr.com）、2.x（ http://kquanr.com/2.x）

# Usage
* umijs：https://umijs.org
* dvajs：https://dvajs.com 
* 相关API：https://dvajs.com/api
* reactjs：https://reactjs.org
* redux-devtools：https://github.com/gaearon/redux-devtools(本地开发利器/时间旅行器)

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