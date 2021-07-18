'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 处理html问题
const TerserPlugin = require('terser-webpack-plugin'); // 压缩js
const { VueLoaderPlugin } = require('vue-loader'); // 配置vue
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css
const webpack = require('webpack');
const HappyPack = require('happypack'); // 开启多进程 提高效率  优化webpack
const os = require('os'); // 配合happupack使用
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length }); // 获取cpu数量

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'), // 打包路径
    filename: 'js/[name].[hash:8].js', // 打包文件名
    // pubilcPath  公共路径
  },

  resolve: {
    // 解析 第三方包common
    extensions: ['.vue', '.js', '.css', '.jsx', '.json'], // 优先去找.vue 然后以此类推
    alias: {
      // 配置别名
      '@src': path.resolve(__dirname, '..', 'src'),
      '@utils': path.resolve(__dirname, '..', 'src/utils'),
      '@config': path.resolve(__dirname, '..', 'src/config'),
      '@com': path.resolve(__dirname, '..', 'src/components'),
      '@assets': path.resolve(__dirname, '..', 'src/assets'),
      '@router': path.resolve(__dirname, '..', 'src/router'),
    },
  },

  module: {
    // 关于配置模块
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js?$/,
        //把对.js 的文件处理交给id为happyBabel 的HappyPack 的实例执行
        loader: 'happypack/loader?id=happyBabel',
        //排除node_modules 目录下的文件
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        // exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 2048, //s 2048以内的文件我们打包到js里面去
            name: 'images/[hash:8].[hash:16].[ext]', // 2048之外到图拍呢我们放到目录下不打包
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, // 字体加载器
        // exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
          limit: 10,
        },
      },
      {
        test: /\.(mp3)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: 'audios/[name].[ext]',
          limit: 10,
        },
      },
    ],
  },
  optimization: {
    // 优化项
    splitChunks: {
      chunks: 'all', // 插件作用的范围 all全部，async按需加载， initial入口文件
      minSize: 30000, // 最小打包的尺寸 超过30kb才会打包
      minChunks: 1, // 最小引入第三方库
      maxAsyncRequests: 5, // 最大异步请求chunks
      maxInitialRequests: 3, // 最大初始化chunks
      automaticNameDelimiter: '.', // 如果不指定name，自动生成name的分割符（’runtime.[name]）
      name: true, // split 的 chunks name
      cacheGroups: {
        // 缓存组
        vendors: {
          chunks: 'initial', // 左右时入口文件
          test: /[\\/]node_modules/,
          name: 'vender',
          minChunks: 1, // 最小引入数 1
          priority: -10, //优先级
          enforce: true,
        },
      },
    },
  },
  // 插件
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../dist/js/vendor-manifest.json'),
    }),
    new TerserPlugin(),
    new OptimizeCSSAssetsPlugin(),
    new HappyPack({
      //用id来标识 happypack处理那里类文件
      id: 'happyBabel',
      //如何处理  用法和loader 的配置一样
      loaders: [
        {
          loader: 'babel-loader',
          options: { babelrc: true, cacheDirectory: true },
        },
      ],
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true,
    }),
  ],
};
