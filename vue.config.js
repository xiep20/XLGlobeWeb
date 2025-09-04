/*
 * @Author: Caven
 * @Date: 2018-12-15 00:33:19
 * @Last Modified by: Caven
 * @Last Modified time: 2020-02-19 12:36:23
 */
'use strict'
const path = require('path')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

let resolve = dir => {
  return path.resolve(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/XLGlobeWeb_V2.0' : '/',
  productionSourceMap: false,
  
  devServer: {
    // port: 8080,
    open: true,
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    },
    proxy: {
      '/data09': {
        target: 'http://localhost:9009/',
        changeOrigin: true,
        pathRewrite: {
          '^/data09': '/data'
        }
      },
      '/data95': {
        target: 'http://localhost:8095/',
        changeOrigin: true,
        pathRewrite: {
          '^/data95': '/data95'
        }
      },
      '/wuhan_20201014': {
        // target: 'http://182.92.97.92:8081/',
        target: 'http://localhost:8095/',
        changeOrigin: true,
        pathRewrite: {
          '^/wuhan_20201014': '/data95/wuhan_20201014'
        }
      }
    }
  },
  configureWebpack: {
    module: {
      unknownContextCritical: false
    },
    performance: {
      hints: false
    },
    resolve: {
      fallback: {
        'path': require.resolve('path-browserify'),
        'fs': false,
        'crypto': false
      }
    }
  },
  chainWebpack: config => {
    config.resolve.extensions.add('.js').add('.vue')
    
    // 配置图片处理规则 - 使用更简单的方式
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .type('asset')
      .parser({
        dataUrlCondition: {
          maxSize: 10 * 1024 // 10kb
        }
      })

    // 配置字体处理规则
    config.module
      .rule('fonts')
      .test(/\.(eot|ttf|woff|woff2)(\?.*)?$/)
      .type('asset/resource')

    // SVG图标处理
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svg/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    config.plugin('monaco-editor').use(MonacoWebpackPlugin)
  }
}
