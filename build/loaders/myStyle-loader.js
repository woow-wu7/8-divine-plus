// 1
// loader
// - 特点
//   - loader 就是一个函数，函数的第一个参数就是 ( 源码字符串 )
// - 注意点
//   - loader 不能写成 ( 箭头函数 )，因为函数内部需要使用 ( this ) 来获取更多的 api
//   - 比如: this.async this.callback

// style-loader
// 作用: 创建style标签，将css源码字符串放入style标签中，并将style标签插入head标签中

const myStyleLoader = function (source) {
  const style = `
    const styleElement = document.createElement('style');
    styleElement.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(styleElement);
  `;

  // 上面使用 JSON.stringify() 取出换行符
  return style;
};

module.exports = myStyleLoader;
