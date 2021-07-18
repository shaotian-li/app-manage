'use strict';
const webpack = require('webpack');
const path = require('path');
const vendors = ['vue', 'vue-router', 'element-ui', 'vuex', 'axios'];
module.exports = {
  entry: {
    vendor: vendors,
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dist/js'),
    library: '[name]_library', // 防止全局变量冲突
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_library',
      path: path.join(__dirname, '../dist/js', '/[name]-manifest.json'),
      context: __dirname,
    }),
  ],
};
