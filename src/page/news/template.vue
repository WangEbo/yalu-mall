<template>
  <div id="news-page" class="index">
    <y-header></y-header>
    <section id="top-banner" class="section part">
      <div class="section-content">
        <div class="banner-wrap">
          <y-swiper ref="r3Swiper" :navEl="'swiper-nav'" :autoPlay="true" :delay="2000"  @swiperChange="r3SwiperChange">
            <y-swiper-slide v-for="(item, i) in bannerList" :key="i">
              <a class="banner-item" :href="`./newsDetail.html?id=${item.relationId}`">
                <div class="col1"  :style="{'background-image': `url('${imgUrlEncode(item.pic)}')`}">
                  
                </div>
                <div class="col2">
                  <y-news-card :showMore="false" :infoItem="item.relation"></y-news-card>
                </div>
              </a>
            </y-swiper-slide>
            <ul class="swiper-nav">
              <li :class="{active: activeIndex == i}" v-for="(item, i) in bannerList" @click="swiperJump('r3Swiper',i)" :key="i"></li>
            </ul>
          </y-swiper>
        </div>
        <ul class="bottom-bg">
          <li :class="{active: activeIndex == i}" v-for="(item, i) in bannerList" :key="i" :style="{'background-image': `url('${imgUrlEncode(item.pic)}')`}"></li>
          <div class="mask-cover"></div>
        </ul>
      </div>
    </section>

    <div class="new-page-list">
      <ul>
        <li v-for="(item, i) in list" :key="i">
          <NewsCard v-if="item" :item="item"></NewsCard>
        </li>
        <el-empty v-show="!list.length" description="暂无数据"></el-empty>
      </ul>
    </div>
    <div class="pagination-bar">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page.sync="pager.pageNum"
        :page-size="pager.pageSize"
        @size-change="psChange"
        @current-change="curpageChange"
        :total="total">
      ></el-pagination>
    </div>
    

    <y-footer></y-footer>
  </div>
</template>
<script>
const fullpage = require("fullpage.js");
import "fullpage.js/dist/fullpage.css";

import YHeader from "@component/YHeader";
import YSwiper from "@component/YSwiper";
import YSwiperSlide from "@component/YSwiperSlide";
import YNewsCard from "@component/YNewsCard";
import NewsCard from "@component/NewsCard";

import YFooter from "@component/YFooter";

import { getNewsList } from "@model/carousel";
import { getNewsPageList } from "@model/news";
import { imgUrlEncode } from "@util/common";

export default {
  components: {
    YHeader, YSwiper, YSwiperSlide, YFooter, YNewsCard, NewsCard,
  },
  created() {

  },
  watch: {
    pager: {
      handler(){
        this.getNewsPageList();
      },
      deep: true,
    },
  },
  data() {
    return {
      activeIndex: 0,
      bannerList: [
        {
          pic: "",
          id: "",
          relation: {
            title: "",
            intro: "",
          },
        },
      ],
      list: [
        {
          coverImg: "",
          pic: "",
          title: "",
          intro: "",
        },
      ],
      total: 0,
      headerBlackTheme: false,
      pager: {
        pageNum: 1,
        pageSize: 6,
      },
    };
  },
  mounted(){
    this.getBannerList();
    this.getNewsPageList();
  },
  methods: {
    imgUrlEncode,
    curpageChange(p){
      this.pager.pageNum = p;
    },
    psChange(s){
      this.pager.pageSize = s;
    },
    yToFixed(n, l){
      if(typeof n == "number"){
        let r = n + "";
        if(r.indexOf(".") == -1){
          return n;
        }else{
          let pointIndex = r.indexOf(".");
          return r.substr(0, (pointIndex + l + 1) );  
        }
      }
      console.error("n is not a number");
      return 0;
    },
    initFullPage(){
      let self = this;
      new fullpage("#fullpage", {
        scrollHorizontally: true,
        css3: true,
        afterLoad: function(preSection, nextSection){
          //进入钩子
          self.headerBlackTheme = (nextSection.index == 2 || nextSection.index == 3);
        },
        onLeave: function(index, direction){
          //离开钩子
        },
      });

      //methods
      // fullpage_api.setAllowScrolling(false);
    },
    r3SwiperChange(i){
      this.activeIndex = i;
    },
    swiperJump(swiperName ,i){
      this.$refs[swiperName] && this.$refs[swiperName].jumpTo(i);
    },
    getBannerList(){
      getNewsList().then(res=> {
        this.bannerList = res.data;
      });
    },
    getNewsPageList(){
      getNewsPageList(this.pager).then(res=> {
        this.list = res.data.list;
        this.total  = res.data.total;
      });
    },
  },
};
</script>
<style lang="scss">
@import "./style.scss";
</style>

