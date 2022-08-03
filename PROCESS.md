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

npm install typescript ts-loader -D // ts相关
npm install babel-loader @babel/core @babel/preset-env -D // babel可以把es6转成es5

npm install cross-env -D
npm install @types/node -D // 解决ts环境在模块中访问 process 时变量不存在的问题，详见 (3)-2


---
// 说明文档相关
// 查看: vuepress最新的版本: npm view vuepress versions
// 安装: 指定版本的vuepress: npm install vuepress@2.0.0-beta.49 -D
// 版本: vuepress2.0才支持vue3。需要注意的是目前处于维护阶段，使用 vue3+vite 构建的使用 vitePress
npm install vuepress@2.0.0-beta.49 -D
npm install @vuepress/plugin-container@next -D
npm install @vuepress/plugin-back-to-top@next -D
npm install @vuepress/plugin-register-components@next -D
npm install @vuepress/plugin-docsearch@next -D
```

### (2) 目录结构

```

```

### (3) vue3 和 webpack5 和 ts 遇到的一些问题

```
1
vue项目添加ts支持
- 说明: 本项目是通过 webpack 构建，所以需要修改 webpack 配置
- 官网: https://v3.cn.vuejs.org/guide/typescript-support.html#%E6%8E%A8%E8%8D%90%E9%85%8D%E7%BD%AE
module: { rules: [{
  test: /\.tsx?$/,
  loader: 'ts-loader',
  options: { appendTsSuffixTo: [/\.vue$/] }
}]}

2
报错: Error: Cannot find module 'vue-loader/lib/plugin'
原因: 在 webpack.config.js 中，这样的写法会报错 -- const VueLoaderPlugin = require("vue-loader/lib/plugin");
解决: 在 webpack.config.js 中，这样写 ---------- const { VueLoaderPlugin } = require("vue-loader");

3
报错: 找不到名称“process”。是否需要为节点安装类型定义? 请尝试使用 `npm i --save-dev @types/node`，然后将 “node” 添加到类型字段。ts(2591)
解决:
- 2.1 npm i --save-dev @types/node
- 2.2 { "compilerOptions": { "types": ["node"] } }

4
问题
  问题: process.cwd() 和 __dirname 的区别？
  回答:
  - process.cwd(): 指的是 ( webpack命令文件 - 所在的文件夹 )，命令在 package.json的scripts中，所以所在的文件夹是 ( 8-divine-plus )
  - __dirname: 指的是 ( __dirname当前文件所在的文件夹 )
  详见: build/webpack.config.prod.js
  文章: https://www.jianshu.com/p/a80c59abd1fb

5
问题: @import '~@/aa/bb' 中的 ~ 波浪号是什么意思？
回答:
  - 变量: 当 @import 的路径中包含 ~ 时，表示的后面是一个变量
  - 查找顺序：该变量首先会去 ( webpack 的 resolve.alias 中查找 )，没有才会去 ( node_modules ) 中查找
  - 链接：https://segmentfault.com/q/1010000010879017
```

# 资料

- 环境变量区别 https://juejin.cn/post/6844904023791796237#heading-0
- tsconfig.json https://www.pengfeixc.com/blogs/javascript/tsconfig
- 构建过程 https://juejin.cn/post/6950905030635421710
- npm
  - 打包发布流程 https://juejin.cn/post/6994746118135349262
  - 发布相关 https://blog.51cto.com/u_15328720/3401308
- vuepress2
  - 官网: https://juejin.cn/post/7096011121160618020
  - 教程: https://github.com/Lee-Tanghui/vuepress-element-doc
  - 教程: https://juejin.cn/post/7089313579169480711
  - 插件: https://blog.csdn.net/sinat_31213021/article/details/119385175
