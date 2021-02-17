const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtrarctPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html',
    inject: 'body',
  }),
  new MiniCssExtrarctPlugin(),
  new Dotenv(),
  new CleanWebpackPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: [
      //     { loader: 'babel-loader' },
      //   ],
      // },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.scss$/i,
        use: [{ loader: MiniCssExtrarctPlugin.loader, options:{ publicPath: '' }}, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtrarctPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};

{
  publicPath: ''
}