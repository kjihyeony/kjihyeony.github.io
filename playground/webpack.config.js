const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports={
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HTMLWebpackPlugin({
    template: './index.html'
  })],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
  }
}