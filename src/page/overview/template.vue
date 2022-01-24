<template>
  <!-- 品牌概况 -->
  <div id="overview-page" class="index">
    <y-header></y-header>
    <div class="main-content">
      <BrandNav :activeName="'overview'"></BrandNav>
      <div :class="['overview-content', loading ? 'loading' :'']">
        <ul>
          <li v-for="(item, i) in list" class="view-item" :key="i">
            <div class="img-wrap" :style="{ 'background-image': item.imgUrl }">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="overview-item">
              <h4>{{item.title}}</h4>
              <p>{{item.content}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <y-footer></y-footer>
  </div>
</template>
<script>

const fullpage = require("fullpage.js");
import "fullpage.js/dist/fullpage.css";

import YHeader from "@component/YHeader";

import YFooter from "@component/YFooter";
import BrandNav from "@component/BrandNav";

import { getOverviewList } from "@model/overview";

require("../../assets/imgs/banner/banner1.png");
export default {
  components: {
    YHeader, YFooter, BrandNav,
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
      loading: false,
    };
  },
  mounted() {
    this.getList();

  },
  methods: {
    getList() {
      this.loading = true;
      getOverviewList().then(res => {
        this.list = res.data.list;
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

