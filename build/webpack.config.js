const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const VueLoaderPlugin = require("vue-loader/lib/plugin"); // 注意：这样的写法会抱错，需要改成最新的下面的写法
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  // 1
  // entry
  // - 测试 ( 组件库中的 - 组件 ) 时的入口文件

  // 2
  // path.resolve()
  // - 将多个路径解析为一个规范化的 ( 绝对路径 )

  entry: {
    main: path.resolve(__dirname, "../examples/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[chunkhash].js",
  },
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
    port: 7777,
    compress: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
          options: {},
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env"]],
              plugins: [],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {},
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              esModule: false,
              outputPath: "img/",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "8-divine",
      template: "public/index.html",
      filename: "index.html",
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({}),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    moduleIds: "named",
  },
};
