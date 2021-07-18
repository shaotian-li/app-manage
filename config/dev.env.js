'use strict';
const { merge } = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 开发环境地址
  BASE_API: '"http://development.com"',
});
