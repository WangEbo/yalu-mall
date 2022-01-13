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
                  <div class="banner-item" :style="{'background-image': `url(${item.r1_src})`}"></div>
                </y-swiper-slide>
                <ul class="swiper-nav">
                  <li :class="{active: r1ActiveIndex == i}" v-for="(item, i) in r1BannerList"  @click="swiperJump('r1Swiper',i)" :key="i"></li>
                </ul>
              </y-swiper>
            </div>
          </div>
        </section>
        <section id="r2" class="section part">
          <div class="section-content">
            <div class="banner-wrap">
              <y-swiper ref="r2Swiper" :autoPlay="false" :delay="2000" :navEl="'swiper-nav'"  @swiperChange="r2SwiperChange">
                <y-swiper-slide v-for="(item, i) in r2BannerList" :key="i">
                  <div class="banner-item" :style="{'background-image': `url(${item.r2_src})`}">
                    <div class="view-more">
                      <p class="item-eng-name">{{item.r2_englishName}}</p>
                      <p class="item-name">{{item.r2_name}}</p>
                      <a :href="`./category.html?id=${item.r2_value}`"><span>新品速递</span></a>
                    </div>
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
                <a :href="`./category.html?id=${item.r2_value}`" :style="{'background-image': `url(${item.r2_src})`}">
                  <img :src="item.r2_src" alt="">
                  <div class="cate-des">
                    <div class="inner">
                      <p class="item-eng-name">{{item.r2_englishName}}</p>
                      <div class="item-name">{{item.r2_name}}</div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section id="r3" class="section part">
          <div class="section-content">
            <div class="banner-wrap">
              <y-swiper ref="r3Swiper" :navEl="'swiper-nav'" :autoPlay="true" :delay="2000"  @swiperChange="r3SwiperChange">
                <y-swiper-slide v-for="(item, i) in r3BannerList" :key="i">
                  <a class="banner-item" :href="`./timeInfoDetail.html?id=${item.r3_value}`">
                    <div class="col1"  :style="{'background-image': `url(${item.r3_src})`}">
                      <!-- <img src="../../assets/imgs/768-557.png" alt=""> -->
                    </div>
                    <div class="col2">
                      <y-news-card :infoItem="item"></y-news-card>
                    </div>
                  </a>
                </y-swiper-slide>
                <ul class="swiper-nav">
                  <li :class="{active: r3ActiveIndex == i}" v-for="(item, i) in r3BannerList" @click="swiperJump('r3Swiper',i)" :key="i"></li>
                </ul>
              </y-swiper>
            </div>
            <ul class="bottom-bg">
              <li :class="{active: r3ActiveIndex == i}" v-for="(item, i) in r3BannerList" :key="i" :style="{'background-image': `url(${item.r3_src})`}"></li>
              <div class="mask-cover"></div>
            </ul>
          </div>
        </section>
        <section id="r4" class="section">
          <y-footer></y-footer>
        </section>
        <span class="scr pc">
          <em class="wc en-m">查看更多</em><small></small>
        </span>
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

import { getFetchTest } from "@model/index";

require("../../assets/imgs/banner/banner1.png");
require("../../assets/imgs/banner/banner2.png");
require("../../assets/imgs/banner/banner3.png");
require("../../assets/imgs/cate1.png");
require("../../assets/imgs/cate2.png");
require("../../assets/imgs/cate3.png");
require("../../assets/imgs/cate4.png");
export default {
  components: {
    YHeader, YSwiper, YSwiperSlide, YFooter, YNewsCard,
  },
  created() {
    this.getInitialFetch();
    this.getR1BannerList();
    this.getR2BannerList();
    this.getR3BannerList();
  },
  data() {
    return {
      r1ActiveIndex: 0,
      r2ActiveIndex: 0,
      r3ActiveIndex: 0,
      r1BannerList: [{r1_name: "",r1_src: ""}],
      r2BannerList: [
        {
          r2_src: "",
          r2_name: "",
          r2_englishName: "",
          r2_value: "",
        },
      ],
      r3BannerList: [
        {
          r3_src: "",
          r3_name: "",
          r3_title: "",
          r3_value: "",
          r3_des: "",
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
    async getInitialFetch() {
      const res = await getFetchTest();
      this.test = res;
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
      setTimeout(()=> {
        this.r1BannerList = [
          {
            r1_src: "/img/banner1.png",
            r1_name: "",
          },
          {
            r1_src: "http://www.361sport.com/upfiles/onepage/202112/1640581182461.jpg",
            r1_name: "",
          },
          {
            r1_src: "http://www.361sport.com/upfiles/onepage/202106/20210655553176233.jpeg",
            r1_name: "",
          },
        ];
      },1000);
    },
    getR2BannerList(){
      this.r2BannerList = [
        {
          r2_src: "/img/banner2.png",
          r2_englishName: "WOMEN’S DRESS",
          r2_name: "女装",
          r2_value: "",
        },
        {
          r2_src: "/img/cate2.png",
          r2_englishName: "MAN’S DRESS",
          r2_name: "男装",
          r2_value: "",
        },
        {
          r2_src: "/img/cate3.png",
          r2_englishName: "MEN’S DRESS",
          r2_name: "时尚冬装",
          r2_value: "",
        },
        {
          r2_src: "/img/cate4.png",
          r2_englishName: "C&A",
          r2_name: "中老年装",
          r2_value: "",
        },
      ];
    },
    getR3BannerList(){
      this.r3BannerList =  [
        {
          r3_src: "/img/banner3.png",
          r3_name: "",
          r3_title: "丁伍号：深耕亚运，做走向世界的民族品牌",
          r3_value: "1",
          r3_des: "传统服饰与现代时装融合执行董事兼总裁丁伍号接受采访，以企业领导人的视角，讲述了361°长期服务亚运会的历程。",
        },
        {
          r3_src: "http://www.361sport.com/upfiles/news/202112/1639809808193.jpg",
          r3_name: "",
          r3_title: "361°双十一持续发力，超4亿元销售额撬动电商全渠道市场",
          r3_des: "2021年“双十一”购物狂欢已落下帷幕，361°于今年“双十一”达成电商全渠道销售额突破4亿元，同比增长超过40%。",
          r3_value: "2",
        },
        {
          r3_src: "http://www.361sport.com/upfiles/news/202112/1640571960766.jpg",
          r3_name: "",
          r3_title: "三六一度(中国)有限公司执行董事兼总裁丁伍号接受采访",
          r3_des: "三六一度(中国)有限公司执行董事兼总裁丁伍号接受采访，以企业领导人的视角，讲述了361°长期服务亚运会的历程。",
          r3_value: "3",
        },
      ];
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

