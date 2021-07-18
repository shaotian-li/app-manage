'use strict';
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 处理html问题
const webpack = require('webpack');
const prod = require('../config/prod.env');
module.exports = merge(webpackBaseConfig, {
  mode: 'production', //线上环境
  devtool: 'cheap-module-eval-source-map', // 帮助我们调试源代码
  // 处理插件
  plugins: [
    new MiniCssExtractPlugin({
      // 抽离css文件插件
      filename: 'css/[name].css', // 文件命名
      chunkFilename: 'css/[name].css', //打包存放地址
    }),
    new HtmlWebpackPlugin({
      title: '征征酱',
      template: 'index.html', // 源模板文件
      filename: 'index.html', // 输出文件
      hash: true,
      inject: true, // 自动添加资源引入
      minify: {
        // 压缩
        removeAttributeQuotes: true, // 删除双引号
        collapseWhitespace: true, // 折叠空行
      },
    }),
    new webpack.DefinePlugin({
      'process.env': prod,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          // MiniCssExtractPlugin 和style-loader 会有冲突
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      // 处理less
      {
        test: /\.less?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
});
