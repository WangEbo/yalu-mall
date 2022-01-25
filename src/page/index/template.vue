<template>
  <div id="index-page" class="index">
    <y-header></y-header>
    <article class="wrapper">
      <div id="fullpage">
        <section id="r1" class="section part active">
          <div class="section-content">
            <div class="banner-wrap">
              <y-swiper ref="r1Swiper" :navEl="'swiper-nav'" :autoPlay="true" :delay="2000"  @swiperChange="r1SwiperChange">
                <y-swiper-slide v-for="(item, i) in r1BannerList" :key="i">
                  <div class="banner-item" :style="{'background-image': `url(${item.pic})`}"></div>
                </y-swiper-slide>
                <ul class="swiper-nav">
                  <li :class="{active: r1ActiveIndex == i}" v-for="(item, i) in r1BannerList"  @click="swiperJump('r1Swiper',i)" :key="i"></li>
                </ul>
              </y-swiper>
            </div>
          </div>
          <span class="scr pc">
            <em class="wc en-m">查看更多</em><small></small>
          </span>
        </section>
        <section id="r2" class="section part">
          <div class="section-content">
            <div class="banner-wrap">
              <y-swiper ref="r2Swiper" :autoPlay="true" :delay="2000" :navEl="'swiper-nav'"  @swiperChange="r2SwiperChange">
                <y-swiper-slide v-for="(item, i) in r2BannerList" :key="i">
                  <div class="banner-item" :style="{'background-image': `url(${item.pic})`}">
                  </div>
                </y-swiper-slide>
                <ul class="swiper-nav">
                  <li :class="{active: r2ActiveIndex == i}" v-for="(item, i) in r2BannerList"  @click="swiperJump('r2Swiper',i)" :key="i"></li>
                </ul>
              </y-swiper>
              <div class="swiper-index">
                <span class="index">{{ (r2ActiveIndex+1)<10 ? '0'+(r2ActiveIndex+1) : r2ActiveIndex+1 }}</span><span class="total"> / {{ r2BannerList.length < 10 ? '0'+r2BannerList.length : r2BannerList.length}}</span>
              </div>
            </div>
            <ul  class="category-wrap">
              <li v-for="(item, i) in r2BannerList" :key="i">
                <a :href="`./goods_cate.html?id=${item.relationId}`" :style="{'background-image': `url(${item.pic})`}">
                  <img :src="item.coverImg" alt="">
                  <div class="cate-des">
                    <div class="inner">
                      <p class="item-eng-name">{{item.relation.r2_englishName}}</p>
                      <div class="item-name">{{item.relation.name}}</div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <div v-for="(item, i) in r2BannerList" :key="i" :class="['view-more', r2ActiveIndex == i ? 'active':'']">
              <div class="more-box">
                <p class="item-eng-name">{{item.relation.r2_englishName}}</p>
                <p class="item-name">{{item.relation.name}}</p>
                <a :href="`./goods_cate.html?id=${item.relationId}`"><span>新品速递</span></a>
              </div>
            </div>
          </div>
        </section>
        <section id="r3" class="section part">
          <div class="section-content">
            <div class="banner-wrap">
              <y-swiper ref="r3Swiper" :navEl="'swiper-nav'" :autoPlay="true" :delay="2000"  @swiperChange="r3SwiperChange">
                <y-swiper-slide v-for="(item, i) in r3BannerList" :key="i">
                  <a class="banner-item" :href="`./newsDetail.html?id=${item.relationId}`">
                    <div class="col1"  :style="{'background-image': `url(${item.pic})`}">
                      <!-- <img src="../../assets/imgs/768-557.png" alt=""> -->
                    </div>
                    <div class="col2">
                      <y-news-card :infoItem="item.relation"></y-news-card>
                    </div>
                  </a>
                </y-swiper-slide>
                <ul class="swiper-nav">
                  <li :class="{active: r3ActiveIndex == i}" v-for="(item, i) in r3BannerList" @click="swiperJump('r3Swiper',i)" :key="i"></li>
                </ul>
              </y-swiper>
            </div>
            <ul class="bottom-bg">
              <li :class="{active: r3ActiveIndex == i}" v-for="(item, i) in r3BannerList" :key="i" :style="{'background-image': `url(${item.pic})`}"></li>
              <div class="mask-cover"></div>
            </ul>
          </div>
        </section>
        <section id="r4" class="section">
          <y-footer></y-footer>
        </section>
      </div>
      
    </article>
  </div>
</template>
<script>

const fullpage = require("fullpage.js");
import "fullpage.js/dist/fullpage.css";

import YHeader from "@component/YHeader";
import YSwiper from "@component/YSwiper";
import YSwiperSlide from "@component/YSwiperSlide";
import YNewsCard from "@component/YNewsCard";

import YFooter from "@component/YFooter";

import { getIndexList, getCateList, getNewsList } from "@model/carousel";


export default {
  components: {
    YHeader, YSwiper, YSwiperSlide, YFooter, YNewsCard,
  },
  created() {
    this.getR1BannerList();
    this.getR2BannerList();
    this.getR3BannerList();
  },
  data() {
    return {
      r1ActiveIndex: 0,
      r2ActiveIndex: 0,
      r3ActiveIndex: 0,
      r1BannerList: [
        {pic: ""},
      ],
      r2BannerList: [
        {
          pic: "",
          relation: {
            coverImg: "",
            name: "",
            r2_englishName: "",
          },
          id: "",
          relationId: "",
        },
      ],
      r3BannerList: [
        {
          pic: "",
          id: "",
          relation: {
            title: "",
            intro: "",
          },
          relationId: "",
        },
      ],
      headerBlackTheme: false,
    };
  },
  mounted(){
    this.$nextTick(()=> {
      this.initFullPage();
    });
  },
  methods: {
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
    r1SwiperChange(i){
      this.r1ActiveIndex = i;
    },
    r2SwiperChange(i){
      this.r2ActiveIndex = i;
    },
    r3SwiperChange(i){
      this.r3ActiveIndex = i;
    },
    swiperJump(swiperName ,i){
      this.$refs[swiperName] && this.$refs[swiperName].jumpTo(i);
    },
    getR1BannerList(){
      getIndexList().then(res=> {
        this.r1BannerList = res.data;
      });
    },
    getR2BannerList(){
      getCateList().then(res=> {
        this.r2BannerList = res.data;
      });
    },
    getR3BannerList(){
      getNewsList().then(res=> {
        this.r3BannerList = res.data;
      });
    },
  },
};
</script>
<style lang="scss">
@import "./style.scss";
#r4{
  height: 200px!important;
  .fp-tableCell{
    height: 100%!important;
  }
}
</style>

