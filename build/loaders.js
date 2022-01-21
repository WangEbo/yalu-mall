const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("./bundle")
const vueLoader = {
  test: /\.vue$/,
  use: "vue-loader"
}

const cssLoader = {
  test: /\.css$/,
  use: [
    "vue-style-loader",
    "css-loader",
    {
      loader: 'px2rem-loader',
      options: {     // px像素自动转 rem 配置
        remUnit: 192,    //1单位 rem  对应 像素
        remPrecision: 4   //rem转换保留小数点数
      }
    },
    "postcss-loader",
    {
      loader: 'px2rem-loader',
      options: {     // px像素自动转 rem 配置
        remUnit: 192,    //1单位 rem  对应 像素
        remPrecision: 4   //rem转换保留小数点数
      }
    },
  ]
}

const sassLoader = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: [
    "vue-style-loader",
    "css-loader",
    {
      loader: 'px2rem-loader',
      options: {     // px像素自动转 rem 配置
        remUnit: 192,    //1单位 rem  对应 像素
        remPrecision: 8   //rem转换保留小数点数
      }
    },
    "sass-loader",
    "postcss-loader",
    {
      loader: "sass-resources-loader",
      options: {
        resources: resolve("src/assets/style/main.scss"),
      },
    },
  ]
}

const jsLoader = {
  test: /\.js$/,
  use: ["babel-loader"]
}

const imgLoader = {
  test: /\.(png|svg|jpg|gif)$/,
  use: {
    loader: "file-loader",
    options: {
      name: "[name].[ext]",
      // publicPath: '../dist/img/',
      outputPath:"img/"
    }
  }
}

const fontLoader = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: {
    loader: "file-loader",
  }
}

const eslintLoader = {
  test: /\.(js|vue)$/,
  enforce: "pre",
  exclude: /node_modules/,
  loader: "eslint-loader",
  options: {
    fix:true,
    emitWarning:true,
  }
}

exports.initLoader = function(env){
  const loaders = [];
  if(env !== "dev"){
    cssLoader.use = [
      {
        loader:MiniCssExtractPlugin.loader,
        options: {
          publicPath: "../../"
        }
      },
      "css-loader",
      {
        loader: 'px2rem-loader',
        options: {     // px像素自动转 rem 配置
          remUnit: 192,    //1单位 rem  对应 像素
          remPrecision: 4   //rem转换保留小数点数
        }
      },
      "postcss-loader",
    ];

    sassLoader.use = [
      {
        loader:MiniCssExtractPlugin.loader,
        options: {
          publicPath: "../"
        }
      },
      "css-loader",
      {
        loader: 'px2rem-loader',
        options: {     // px像素自动转 rem 配置
          remUnit: 192,    //1单位 rem  对应 像素
          remPrecision: 8   //rem转换保留小数点数
        }
      },
      "sass-loader",
      "postcss-loader",
      {
        loader: "sass-resources-loader",
        options: {
          resources: resolve("src/assets/style/main.scss"),
        },
      },
    ]
  }else{
    loaders.push(eslintLoader)
  }

  loaders.push(
    vueLoader,
    cssLoader,
    sassLoader,
    jsLoader,
    imgLoader,
    fontLoader
  );

  return loaders;
}
