module.exports = {
  plugins: {
    "autoprefixer": {
      browsers: ["last 5 version","Android >= 4.0"], //为css 添加c3前缀
      //是否美化属性值 默认：true
      cascade: true,
      //是否去掉不必要的前缀 默认：true
      remove: true
    }
  }
}
