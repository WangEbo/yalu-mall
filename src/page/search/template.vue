<template>
  <!-- 商品分类筛选 -->
  <div id="overview-page" class="index">
    <y-header></y-header>
    <div class="main-content">
      <div class="top-bg"></div>

      <div class="news-content">
        <ul>
          <li v-for="item in list" class="view-item" :key="item">
            <div class="img-wrap" :style="{ 'background-image': item.imgUrl }">
              
            </div>
            <div>
              {{item.content}}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <y-footer></y-footer>
  </div>
</template>
<script>
import YHeader from "@component/YHeader";
import YFooter from "@component/YFooter";

import { getUrlQuery } from "@util/common";
let keyword = getUrlQuery().keyword;

import { queryGoodList } from "@model/goods";
// import { queryGoodList } from "@model/news";

export default {
  components: {
    YHeader, YFooter, 
  },
  created() {

  },
  computed: {
  },
  data() {
    return {
      activeTab: "1",
      newList: [
        {
          title: "",
          content: "",
          imgUrl: "",
        },
      ],
      goodsList: [

      ],
    };
  },
  mounted() {
    this.getSearch();
  },
  methods: {
    async getList() {
      let goodRes = await queryGoodList({keyword});
      let newRes = await queryGoodList({keyword});
      Promise.all([goodRes, newRes]).then(res=> {
        let gRes = res[0],
          nRes = res[1];
        this.$set(this, "goodsList", gRes.data);
        this.$set(this, "newList", nRes.data);
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

