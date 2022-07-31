# 构建过程

### (1) 安装依赖

```
npm init -y // -y 可以生成默认的package.json配置
npm install vue -D // 这里 -D 是因为是 vue 组件库并不是vue项目，安装默认是 v3 版本

npm install webpack -D
npm install webpack-cli -D
npm install webpack-dev-server -D
npm install webpack-merge -D // 合并 webpack 配置
npm install vue-loader vue-template-compiler html-webpack-plugin -D // vue组件处理 和 html模版处理
npm install file-loader url-loader html-loader -D // 文件处理，url-loader通过limit处理成base64的图片
npm install style-loader css-loader -D // 样式处理
npm install sass sass-loader node-sass -D // sass相关

npm install babel-loader @babel/core @babel/preset-env -D // babel可以把es6转成es5
// npm install @babel/plugin-proposal-decorators -D // ----------- class 的装饰器语法，注意两者的顺序 -------- 在前
// npm install @babel/plugin-proposal-class-properties -D // -- 支持解析 class 语法，proposal是提案的意思 - 在后

npm install cross-env -D
```

### (2) 目录结构

```

```

### (3) vue3 和 webpack5 遇到的一些问题

```
1
报错: Error: Cannot find module 'vue-loader/lib/plugin'
原因: 在 webpack.config.js 中，这样的写法会报错 ---- const VueLoaderPlugin = require("vue-loader/lib/plugin");
解决： 在 webpack.config.js 中，这样写 ------------ const { VueLoaderPlugin } = require("vue-loader");
```
