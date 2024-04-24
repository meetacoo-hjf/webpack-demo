const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

// 告知 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置。

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
)

app.listen(3020, () => {
  console.log('Example app listening on port 3020!')
})