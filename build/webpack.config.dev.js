const webpackMerge = require("webpack-merge");
const webpack = require("webpack");
const { resolve } = require("./bundle")
const webpackBaseFn = require("./webpack.config.base");

module.exports = function(env){
  const baseConfig = webpackBaseFn(env)
  const mergedOptions = webpackMerge(baseConfig,{
    mode:"development",
    devtool: process.env.ENVIROMENT == 'dev' ? 'eval-source-map' : "cheap-module-source-map",
    devServer:{
      contentBase:resolve("dist"),
      host:"0.0.0.0",
      port: 3002,
      useLocalIp: true,
      overlay:{
        errors:true,
        warnings:true
      },
      open:true,
      hot:true,
      historyApiFallback: true,
      inline: true,
      disableHostCheck: true,
      stats:{
        assets: false,
        chunks: false,
        chunkGroups: false,
        chunkModules: false,
        chunkOrigins: false,
        modules: false,
        moduleTrace: false,
        source: false,
        builtAt: false,
        children: false,
        hash:false,
      },
      proxy: {
        '/': {
          target: 'http://8.143.199.43/', 
          changeOrigin: false,
          // pathRewrite: {
          //   '^/': ''
          // }
        }
      },
    },
    plugins:[
      //热更新
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
  return mergedOptions
}
