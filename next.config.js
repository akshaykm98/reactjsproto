/** @type {import('next').NextConfig} */

const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // optional: you can modify antd less variables directly here
  modifyVars: {
    "@primary-color": "#388bfe",
    "@font-family": "Poppins",
    "@link-color": "#1890ff",
    "@menu-dark-inline-submenu-bg": "#1b3745",
    "@layout-header-background": "#1b3745",
    "@layout-dark-sider-background": "#1b3745",
  },
  // Or better still you can specify a path to a file
  lessVarsFilePath: "./styles/variables.less",
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },
});
