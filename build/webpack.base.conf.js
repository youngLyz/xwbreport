'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {//模块的入口文件
    app: './src/main.js'
  },
  output: {//模块的输出文件
    path: config.build.assetsRoot,
    filename: '[name].js',//使用占位符(substitutions)来确保每个文件具有唯一的名称
    publicPath: process.env.NODE_ENV === 'production'//网站运行时的访问路径
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {//对模块后缀名的简写，配置后，原本是require('./components/app.vue') 可以简写为require('./components/app')。
    extensions: ['.js', '.vue', '.json'],
    alias: {//别名
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'css':resolve('src/assets/css')
    }
  },
  module: {//加载器:将不同的文件加载到js文件中如css-loader,less-loader,style-loader，url-loader等
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',//处理.vue格式的模块
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',//将小于8kb的图片、iconfont字体都转为base64，超过8kb的才会生成具体文件
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
