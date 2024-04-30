const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: "Caching"
    })
  ],
  output: {
    filename: '[name].[contenthash].js', // [contenthash] 将根据资源内容创建唯一哈希值
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
};
