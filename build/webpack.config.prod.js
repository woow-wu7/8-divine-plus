const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.config.base");

module.exports = merge(base, {
  mode: process.env.NODE_ENV, // 这里的值在 package.json 中的 scripts 中的打包命令中通过 cross-env 来指定了
  target: "web",
  entry: path.resolve(__dirname, "../index.js"), // 入口文件就是根目录下的 index.js
  output: {
    path: path.resolve(process.cwd(), "dist-prod"), // 等价于 path: path.resolve(__dirname, "dist-prod"),
    // 1
    // process.cwd() ---> 返回 Node.js 进程的当前工作目录，即执行命令的文件所在的文件夹，这里命令是在 package.json文件中执行的，所在的文件夹是 8-divine
    // __dirname -------> 返回 源代码所在的目录文件夹，这里源代码文件就是webpack.config.prod.js，所在文件夹就是build，

    filename: "8divine.js",
    library: {
      name: "8divine", // 配置导出库的名称，如使用require引入，这里就是require("8divine")
      type: "umd", // 配置将库暴露的方式，即配置以何种方式导出库，注意 该属性用来代替下面的 libraryTarget，以后webpack可能移除对 libraryTarget 的支持
      // type: "var", // var表示：让你的库加载之后，入口起点的返回值 将会被赋值给一个变量
      umdNamedDefine: true, // 当使用 output.library.type: "umd" 时，将 output.library.umdNamedDefine 设置为 true 将会把 AMD 模块命名为 UMD 构建。否则使用匿名 define
    },
    // libraryTarget: "umd", // 配置以何种方式导出库 ---> 将被 output.library.type 代替
    // umdNamedDefine: true, // ---------------------> 将被 output.library.umdNamedDefine 代替，当使用 libraryTarget: "umd" 时，设置 output.umdNamedDefine 为 true 将命名由 UMD 构建的 AMD 模块。否则将使用一个匿名的 define。
  },
});
