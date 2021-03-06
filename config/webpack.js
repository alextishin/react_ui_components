// config/webpack.js
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  options: {
    resolve: {
      root: path.join(__dirname, '../')
    },
    entry: [
      'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      './assets/js/index.js'
    ],
    output: {
      path: path.join(__dirname, '../dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          "presets": ["es2015", "stage-0", "react"],
          "plugins": ["react-hot-loader/babel"]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=100000000000"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000000000"
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=100000000'
      }]
    },

    devServer: {
      hot: true
    }
  }
}
