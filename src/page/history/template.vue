<template>
  <div id="hsitroy-page" class="index">
    <y-header></y-header>
    <div class="main-content">
      <BrandNav :activeName="'history'"></BrandNav>
      <!-- 年份导航 -->
      <div class="year-nav">
        <div class="divide-line"></div>
        <i class="icon iconfont icon-arrow-right left"></i>
        <div class="inner-wrap" ref="scroll">
          <ul>
            <li @click="selectYear(year)" :class="['year-item', curYear == year ? 'active' : '']" v-for="(year, i) in list" :key="i">
              <span class="arrow"></span><span>{{year}}</span>
            </li>
          </ul>
        </div>
        <i class="icon iconfont icon-arrow-right right"></i>
      </div>
      <!-- 历史内容 -->
      <div class="hisroty-list">
        <div class="list-bg">{{curYear}}</div>
        <div :class="['list-content', loading ? 'loading' : '']" v-if="historyList.length">
          <div class="list-part">
            <ul>
              <li v-for="(item,i) in col1" :key="i">
                <h4>{{item.eventTime.substr(0, 10)}}</h4>
                <p>{{item.eventContent}}</p>
              </li>
            </ul>
          </div>
          <div class="list-part">
            <ul>
              <li v-for="(item,i) in col2" :key="i">
                <h4>{{item.eventTime.substr(0, 7)}}</h4>
                <p>{{item.eventContent}}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-else class="no-data">
          暂无数据
        </div>
      </div>
    </div>
    <y-footer></y-footer>
    <div v-show="false">{{showList}}</div>
  </div>
</template>
<script>
import YHeader from "@component/YHeader";
import YNewsCard from "@component/YNewsCard";
import YFooter from "@component/YFooter";
import BrandNav from "@component/BrandNav";
import { getYears, getYearHistoryList, getHistoryById } from "@model/history";

import BScroll from "@better-scroll/core";
import MouseWheel from "@better-scroll/mouse-wheel";
BScroll.use(MouseWheel);
let Bs = null;

export default {
  name: "history",
  components: {
    YHeader, YFooter, YNewsCard, BrandNav,
  },
  created() {
    this.getYears();
  },
  computed: {
    showList(){
      if(!this.historyList.length){
        this.$set(this, "col1", []);
        this.$set(this, "col2", []);
        return [];
      }
      let half =  Math.ceil(this.historyList.length/2);
      this.$set(this, "col1", this.historyList.slice(0, half));
      this.$set(this, "col2", this.historyList.slice(half));
      return [this.col1, this.col2];
    },
  },
  data() {
    return {
      activeTab: "history",
      curYear: "",
      historyList: [],
      list: [],
      col1: [{}],
      col2: [{}],
      loading: false,
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    initScroll(){
      Bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        scrollY: false,
        mouseWheel: true,
        click: true,
      });
    },
    getYears(){
      getYears().then(res=> {
        this.list = res.data;
        this.curYear = this.list[0];
        setTimeout(() => {
          this.initScroll();
        },200);
        this.getList();
      });
    },
    selectYear(year){
      this.curYear = year;
      this.getList();
    },
    getList() {
      this.loading = true;
      getYearHistoryList({
        year: this.curYear,
        pageNum: 1,
        pageSize: 50,
      }).then(res=> {
        this.historyList = res.data.list;
        this.loading = false;
      }).catch(err=> {
        this.loading = false;
      }).finally(()=> {
        this.loading = false;
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

