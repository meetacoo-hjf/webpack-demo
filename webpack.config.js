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
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: { // 将第三方库提取到单独的 vendor chunk 中。这一步将减少客户端对服务器的请求，同时保证自身代码与服务器一致。
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: "all"
        }
      }
    }
  }
};
