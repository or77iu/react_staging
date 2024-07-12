///配置具体的修改规则
const { override, fixBabelImports, addLessLoader,adjustStyleLoaders } = require("customize-cra");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    // style: "css",
    style: true,
  }),
  addLessLoader({
    lessOptions: {
        // 允许使用js修改less文件
      javascriptEnabled: true,
      // 修改@primary-color变量颜色
      modifyVars: { "@primary-color": "#1da57a" },
    },
  }),
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  }),
);

// module.exports = function override(config, env) {
//   return config;
// };
// antd 5.x版本以上，不需要按需引入样式
