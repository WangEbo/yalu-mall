<template>
  <header class="y-header">
    <div class="notice">{{notice}}</div>
    <div class="nav-wrap" >
      <a href="/" title="雅鹿官方网站" class="logo-box">
        <img :src="logo || '/img/logo.png'" alt="雅鹿官方网站">
      </a>
      <nav class="pc-nav pc">
        <ul>
          <li class="go-down" :class="[item.current ? 'current' : '']"  v-for="(item,i) in menus" :key="i">
            <a class="menu-level-1" :href="item.url || 'javascript: viod(0)'">{{item.name}}</a>
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
      <div @mouseenter="showSearch= true" @mouseleave="showSearch= false" :class="['go-search', showSearch ? 'focus' : 'unfocus']">
        <input type="text" @blur="handleBlur" :class="['search-input' ]" @keydown.enter="search" name="keywords" v-model="keywords" placeholder="">
        <a @click="search" href="javascript: void(0)" class="icon iconfont icon-search"></a>
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
            <li @click="showChild(item)" :class="{active: item.active, current: item.current}" class="go-child"  v-for="(item,i) in menus" :key="i">
              <div>
                <a  :href="item.url || 'javascript: viod(0)'">{{item.name}}</a><i  v-show="item.childs && item.childs.length" class="icon iconfont icon-arrow-right"></i>
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
import { getConfig } from "@model/global";

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
          url: "overview.html",
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
          url: "news.html",
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
              url: "goods_cate.html?id=1",
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
    getConfig().then(res=> {
      this.logo = res.data.logo;
    });
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
      let k = this.keywords.trim();
      if(!k){
        return;
      }
      location.href = `./search.html?k=${k}`;
    },
    getMenu(){
      getMenu().then(res=> {
        this.menus = res.data;
        let pathname = location.pathname;
        for(let i =0;i< this.menus.length;i++){
          let item = this.menus[i];
          if(item.url === "/"){
            item.current = pathname === item.url;
          }else{
            pathname = pathname.split(".")[0];
            let menuPath = item.url && item.url.split(".")[0];
            let childMatch = item.childs.some(child=> {
              let childPath = child.url && child.url.split(".")[0];
              return childPath && pathname.includes(childPath);
            });
            if( (menuPath && pathname.includes(menuPath)) || childMatch ){
              item.current = true;
            }
          }
        }
      });
    },
    handleBlur(){
      this.showSearch = false;
      setTimeout(() => {
        this.keywords = "";
      }, 200);
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>