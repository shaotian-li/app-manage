'use strict';
const path = require('path');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css插件
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 处理html问题
const env = require('../config/dev.env');

module.exports = merge(webpackBaseConfig, {
  mode: 'development', // 开发模式
  // 动态监测并实时更新页面
  devServer: {
    host: 'localhost', // 地址
    port: '9000', // 端口号
    hot: true, // 热加载
    compress: true, //压缩
    progress: true, //运行进度条
    open: true, //开发自动打开服务
    contentBase: path.join(__dirname, '../dist'),
    overlay: {
      //浏览器错误提示
      warnings: false,
      errors: true,
    }, // warning 和 error都要显示
  },
  devtool: 'inline-source-map',
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
    }),
    new webpack.DefinePlugin({
      // 允许在编译时配置全局变量
      'process.env': env,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
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
