<template>
  <!-- 品牌概况 -->
  <div id="csr-page" class="index">
    <y-header></y-header>
    <div class="main-content">
      <BrandNav :activeName="'csr'"></BrandNav>
      <div class="csr-content">
        <ul>
          <li v-for="(item, i) in list" class="view-item" :key="i">
            <div class="img-wrap">
              <img :src="imgUrlEncode(item.imgUrl)" alt="">
            </div>
            <div class="csr-item">
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

import { getCsrList } from "@model/csr";
import { imgUrlEncode } from "@util/common";
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
      activeTab: "csr",
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
    imgUrlEncode,
    getList() {
      getCsrList().then(res => {
        this.list = res.data.list;
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

