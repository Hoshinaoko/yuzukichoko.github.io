const path = require("path");

// 打包规则
module.exports = {
  //入口函数
  entry: "node_modules/bodymovin",
  //编译成功后 文件输出到哪
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
};
