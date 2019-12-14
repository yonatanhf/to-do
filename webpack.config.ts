// import HtmlWebpackPlugin = require('html-webpack-plugin');
// require('HtmlWebpackPlugin');

const webpack = require('webpack');
const path = require('path');

const NODE_ENV = new webpack.EnvironmentPlugin(['NODE_ENV']);
const isProduction = typeof NODE_ENV !== 'undefined' && NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const devtool = isProduction ? false : 'inline-source-map';

module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.min.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [{
      enforce: 'pre',
      test: /\.tsx?$/,
      use: 'source-map-loader',
      exclude: /node_modules/,
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: { minimize: mode },
        },
      ],
    },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './index.html',
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool,
};
