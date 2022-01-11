<template>
  <header class="y-header">
    <div class="nav" @mouseleave="showSearch = false">
      <a href="/" title="雅鹿官方网站" class="logo-box">
        <img src="templates/dist/img/m-logo.svg" alt="雅鹿官方网站">
      </a>
      <nav class="pc-nav pc">
        <ul>
          <li class="go-down">
            <a class="menu-level-1">品牌介绍</a>
            <div class="out-nav">
              <span></span>
              <div class="items">
                <div class="right">
                  <a class="_hover" href="about.html">品牌概况</a>
                  <a class="_hover" href="history.html">品牌历程</a>
                  <a class="_hover" href="responsibility.html">社会责任</a>
                </div>
              </div>
            </div>
          </li>
          <li class="go-down">
            <a class="menu-level-1"  href="javascript: void(0)">品牌资讯</a>
            <div class="out-nav">
              <span></span>
              <div class="items">
                <div class="right">
                  <a class="_hover" href="news.html">品牌资讯</a>
                </div>
              </div>
            </div>
          </li>
          <li class="go-down">
            <a class="menu-level-1" href="goods.html">官方商城</a>
            <div class="out-nav">
              <span></span>
              <div class="items">
                <div class="right">
                  <a class="_hover  on" href="goods_top_1.html">跑步系列</a>
                  <a class="_hover " href="goods_top_3.html">篮球系列</a>
                  <a class="_hover " href="goods_top_4.html">生活系列</a>
                  <a class="_hover " href="goods_top_2.html">综训系列</a>
                  <a class="_hover " href="goods_top_11.html">团购定制</a>

                </div>
              </div>
            </div>
          </li>
          <!-- <li><a class="menu-level-1">门店查询</a></li> -->
          <li><a class="menu-level-1" href="http://361degrees.todayir.com" rel="nofollow" target="_blank">投资者关系</a></li>
          <li class="go-down">
            <a class="menu-level-1">其他品牌</a>
            <div class="out-nav">
              <span></span>
              <div class="items">
                <div class="right">
                  <a class="_hover" href="http://www.361-kids.com/" target="_blank">361°童装</a>
                </div>
              </div>
            </div>
          </li>
          <li class="go-down">
            <a class="menu-level-1">全球网点 Global</a>
            <div class="out-nav">
              <span></span>
              <div class="items">
                <div class="right">
                  <a class="_hover" href="http://www.361europe.com/" target="_blank">欧洲 Europe</a>
                  <a class="_hover" href="http://www.361usa.com/" target="_blank">美国 United States</a>
                  <a class="_hover" href="http://361LatinAmerica.com" target="_blank">拉丁美洲 Latin America</a>
                  <a class="_hover" href="http://361sport.cm" target="_blank">喀麦隆 Cameroon</a>
                  <a class="_hover" href="http://361sport.co.za" target="_blank">南非 South Africa</a>
                  <a class="_hover" href="http://361sport.jp" target="_blank">日本 Japan</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div class="go-search">
        <a @click="showSearch = true" href="javascript: void(0)" class="icon iconfont icon-search"></a>
      </div>
      <div class="search-wrap" v-show="showSearch">
        <div class="layout-search">
          <input type="text" name="keywords" value="" placeholder="输入关键词搜索">
          <a href="javascript: void(0)" class="icon iconfont icon-search"></a>
        </div>
        
        <a href="javascript: void(0)" class="icon iconfont icon-close"></a>
      </div>
      <div id="menu" @click="appOn = true" class="app">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="nav-app app" :class="{on: appOn}">
        <div class="mask"></div>
        <div class="child">
          <ul>
            <li @click="showChild(item)" :class="{active: item.active}" class="go-child"  v-for="(item,i) in menus" :key="i">
              <div>
                <a>{{item.name}}</a><i class="icon iconfont icon-arrow-right"></i>
              </div>
              <ol v-show="item.childs" class="nav-down" :style="{height: item.active ? (item.childs && item.childs.length) * 38 +'px' : '0'}">
                <li v-for="(child, cIndex) in item.childs" :key="cIndex"><a :href="child.url || 'javascript: void(0)'" :target="child.target || '_self'">{{child.name}}</a></li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
function getNextElement(node){
  var NextElementNode = node.nextSibling;
  while(NextElementNode.nodeValue != null){
    NextElementNode = NextElementNode.nextSibling;
  }
  return NextElementNode;
}
export default {
  name: "YHeader",
  data(){
    return{
      showSearch: false,
      appOn: false,
      menus: [
        {
          name: "品牌介绍",
          url: "",
          childs: [
            {
              name: "公司概况",
              url: "history.html",
            },
            {
              name: "发展历程",
              url: "history.html",
            },
            {
              name: "社会责任",
              url: "responsibility.html",
            },
          ],
        },
        {
          name: "品牌资讯",
          url: "",
          childs: [
            {
              name: "品牌资讯",
              url: "news.html",
            },
          ],
        },
        {
          name: "官方商城",
          url: "goods.html",
          childs: [
            {
              name: "跑步系列",
              url: "goods_top_1.html",
            },
            {
              name: "篮球系列",
              url: "goods_top_3.html",
            },
            {
              name: "生活系列",
              url: "goods_top_4.html",
            },
            {
              name: "综训系列",
              url: "goods_top_2.html",
            },
            {
              name: "团购定制",
              url: "goods_top_11.html",
            },
          ],
        },
        {
          name: "投资者关系",
          url: "http://361degrees.todayir.com",
          target: "_blank",
          childs: [],
        },
        {
          name: "其他品牌",
          url: "",
          childs: [
            {
              name: "361°童装",
              url: "http://www.361-kids.com/",
            },
          ],
        },
        {
          name: "全球网点 Global",
          url: "",
          childs: [
            {
              name: "欧洲 Europe",
              url: "http://www.361europe.com/",
            },
            {
              name: "美国 United States",
              url: "http://www.361usa.com/",
            },
            {
              name: "拉丁美洲 Latin America",
              url: "http://361LatinAmerica.com",
            },
            {
              name: "喀麦隆 Cameroon",
              url: "http://361sport.cm",
            },
            {
              name: "南非 South Africa",
              url: "http://361sport.co.za",
            },
          ],
        },
      ],
    };
  },
  mounted(){
    
  },
  methods: {
    showChild(curItem){
      try{
        this.menus.forEach(item=> {
          this.$set(item, "active", item == curItem ? !curItem.active : false);
        });
      }catch (err){
        console.log(err);
      }
      
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>