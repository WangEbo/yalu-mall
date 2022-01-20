<template>
  <header class="y-header">
    <div class="notice">{{notice}}</div>
    <div class="nav-wrap" @mouseleave="showSearch = false">
      <a href="/" title="雅鹿官方网站" class="logo-box">
        <img :src="logo || '/img/logo.png'" alt="雅鹿官方网站">
      </a>
      <nav class="pc-nav pc">
        <ul>
          <li class="go-down"  v-for="(item,i) in menus" :key="i">
            <a class="menu-level-1">{{item.name}}</a>
            <div class="out-nav" v-if="item.childs && item.childs.length">
              <div class="items">
                <span></span>
                <div class="right">
                  <a v-for="(child, cIndex) in item.childs" :key="cIndex" class="_hover" :href="child.url || 'javascript: void(0)'">{{child.name}}</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div class="go-search">
        <input type="text" class="search-input" @keydown.enter="search" name="keywords" v-model="keywords" placeholder="">
        <a @click="showSearch = true" href="javascript: void(0)" class="icon iconfont icon-search"></a>
      </div>

      <div id="menu" @click="appOn = true" class="app">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="nav-app app" :class="{on: appOn}">
        <div class="mask" @click="appOn = false"></div>
        <div class="child">
          <ul>
            <li @click="showChild(item)" :class="{active: item.active}" class="go-child"  v-for="(item,i) in menus" :key="i">
              <div>
                <a>{{item.name}}</a><i  v-show="item.childs && item.childs.length" class="icon iconfont icon-arrow-right"></i>
              </div>
              <ol v-show="item.childs && item.childs.length" class="nav-down" :style="{height: item.active ? (item.childs && item.childs.length) * 38 +'px' : '0'}">
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
import { getMenu } from "@model/global";

export default {
  name: "YHeader",
  data(){
    return{
      showSearch: false,
      appOn: false,
      menus: [
        {
          name: "首页",
          url: "/",
          childs: [
          ],
        },
        {
          name: "品牌介绍",
          url: "",
          childs: [
            {
              name: "品牌概况",
              url: "overview.html",
            },
            {
              name: "品牌历程",
              url: "history.html",
            },
            {
              name: "社会责任",
              url: "csr.html",
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
      ],
      notice: "",
      keywords: "",
      logo: "",
    };
  },
  mounted(){
    this.getMenu();
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
    search(e){
      console.log("搜索", this.keywords);
    },
    getMenu(){
      getMenu().then(res=> {
        this.menus = res.data;
      });
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>