// webpack5 自带 this.getOptions
// - this.getOptions() 来代替 loader-utils 插件，我们就不需要添加
// const loaderUtils = require("loader-utils");

function myReplaceLoader(source) {
  const options = this.getOptions() || {};
  const callback = this.async();
  const options1 = this.query;
  const callback1 = this.callback;

  console.log("this.query", this.query);
  console.log("this.callback", this.callback);

  console.log("options", options);
  console.log("callback", callback);

  console.log("options1", options1);
  console.log("callback1", callback1);

  setTimeout(function () {
    const result = source.replace("hello", options.name); // 将 hello 字符串 转成 ####
    callback(null, result);
  }, 1000);
}

module.exports = myReplaceLoader;
