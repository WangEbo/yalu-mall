<template>
  <div id="hsitroy-page" class="index">
    <y-header></y-header>
    <div class="main-content">
      <div class="tabs page-nav">
        <ul class="tab-wrap">
          <li class="tab-item" v-for="item in tabs" :key="item" :class="{active: activeTab == item.name}">
            <div> <span class="icon iconfont" :class="[item.icon]"></span> {{item.text}}</div>
          </li>
        </ul>
      </div>
      <!-- 年份导航 -->
      <div class="year-nav">
        <ul>
          <i class="icon iconfont icon-arrow-right top"></i>
          <li @click="activeYear = year" :class="['year-item', activeYear == year ? 'active' : '']" v-for="year in list" :key="year">
            <span class="arrow"></span><span>{{year.year}}</span>
          </li>
          <i class="icon iconfont icon-arrow-right bottom"></i>
        </ul>
      </div>
      <!-- 历史内容 -->
      <div class="hisroty-list">
        <div class="list-content">
          <div class="list-part">
            <ul>
              <li v-for="(item,i) in col1" :key="i">
                <h4>{{activeYear.year + '年' + item.month + '月'}}</h4>
                <p>{{item.content}}</p>
              </li>
            </ul>
          </div>
          <div class="list-part">
            <ul>
              <li v-for="(item,i) in col2" :key="i">
                <h4>{{activeYear.year + '年' + item.month + '月'}}</h4>
                <p>{{item.content}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <y-footer></y-footer>
    <div v-show="false">{{showList}}</div>
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

import { historyList } from "@model/history";

require("../../assets/imgs/banner/banner1.png");
export default {
  components: {
    YHeader, YFooter, YNewsCard,
  },
  created() {

  },
  computed: {
    showList(){
      let half =  Math.ceil(this.activeYear.months.length/2);
      this.$set(this, "col1", this.activeYear.months.slice(0, half));
      this.$set(this, "col2", this.activeYear.months.slice(half));
      return [this.col1, this.col2];
    },
  },
  data() {
    return {
      tabs: [
        {
          name: "overview",
          text: "品牌概况",
          icon: "icon-overview",
        },
        {
          name: "history",
          text: "品牌历程",
          icon: "icon-history",
        },
        {
          name: "csr",
          text: "品牌概况",
          icon: "icon-csr",
        },
      ],
      activeTab: "history",
      list: [
        {
          year: null,
          months: [
            { month: null, title: "", content: "" },
          ],
        },
      ],
      activeYear: {
        year: "",
        months: [{}],
      },
      col1: [{}],
      col2: [{}],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      historyList().then(res => {

      });
      setTimeout(() => {
        this.list = [
          {
            year: 2021,
            months: [
              { month: 1, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 2, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 3, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 4, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 5, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 6, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 7, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 8, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 9, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 10, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
            ],
          },
          {
            year: 2020,
            months: [
              { month: 1, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 2, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 3, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 4, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 5, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 6, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 7, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 8, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 9, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 10, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
            ],
          },
          {
            year: 2019,
            months: [
              { month: 1, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 2, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 3, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 4, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 5, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 6, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 7, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 8, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 9, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
              { month: 10, title: "配色先后上线， 快速售罄", content: "人阿隆·戈登 签名鞋AG1「人民很行」、「一元复始」配色先后上线， 快速售罄，秉承国风古韵之美，搭载三态科技展现新生曙光。" },
            ],
          },
        ];
        this.$set(this, "activeYear", this.list[0]);
      });
    },
  },
};
</script>
<style lang="scss">
@import "./style.scss";
#r4 {
  height: 200px !important;
  .fp-tableCell {
    height: 100% !important;
  }
}
</style>

