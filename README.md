# vue-todos

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
``` bash
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // 图片资源
│   ├── common *          // 公共的css js 资源
│   ├── components     // 各种组件 
│   ├── moke *           // 本地静态数据管理文件
│   ├── App.vue         // 主页面
│   ├── vuex *           // vuex状态管理器
│   ├── router    // 路由配置器
│   └── main.js        // Webpack 预编译入口
```