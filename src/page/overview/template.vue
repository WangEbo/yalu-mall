<template>
  <!-- 品牌概况 -->
  <div id="overview-page" class="index">
    <y-header></y-header>
    <div class="main-content">
      <BrandNav :activeName="'overview'"></BrandNav>
      <div class="overview-content">
        <ul>
          <li v-for="item in list" class="view-item" :key="item">
            <div class="img-wrap" :style="{ 'background-image': item.imgUrl }"></div>
            <div>
              {{item.content}}
            </div>
          </li>
        </ul>
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

import YFooter from "@component/YFooter";
import BrandNav from "@component/BrandNav";

import { overviewList } from "@model/overview";

require("../../assets/imgs/banner/banner1.png");
export default {
  components: {
    YHeader, YFooter, YNewsCard, BrandNav,
  },
  created() {

  },
  computed: {
  },
  data() {
    return {
      activeTab: "overview",
      list: [
        {
          title: "",
          content: "",
          imgUrl: "",
        },
      ],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      overviewList().then(res => {

      });
      setTimeout(() => {
        this.list = [
          {
            title: "",
            content: "",
            imgUrl: "",
          },
          {
            time: "",
            content: "",
            imgUrl: "",
          },
          {
            time: "",
            content: "",
            imgUrl: "",
          },
          {
            time: "",
            content: "",
            imgUrl: "",
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

