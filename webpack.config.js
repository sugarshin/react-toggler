const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = 8080;

module.exports = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin()
  ],
  cache: true,
  entry: [
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/dev-server',
    './example/index.js'
  ],
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  devServer: {
    contentBase: './example',
    hot: true,
    publicPath: '/',
    host: '0.0.0.0',
    port: PORT
  }
};
