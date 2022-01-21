<template>
  <!-- 商品主页  分五类推荐 -->
  <div id="goods-page" class="index">
    <y-header></y-header>
    <div class="main-content">
      <div class="goods-content">
        <ul>
          <li v-for="(item,i) in list" class="view-item" :key="i">
            <good-cate-card v-if="item" :cate="item"></good-cate-card>
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
import BrandNav from "@component/BrandNav";
import GoodCateCard from "@component/GoodCateCard";

import { getGoodsTree } from "@model/goods";

require("../../assets/imgs/banner/banner1.png");
export default {
  components: {
    YHeader, YFooter, BrandNav, GoodCateCard,
  },
  created() {

  },
  computed: {
  },
  data() {
    return {
      activeTab: "overview",
      list: [
        
      ],
    };
  },
  mounted() {
    this.getGoodsTree();
  },
  methods: {
    getGoodsTree() {
      getGoodsTree().then(res => {
        this.$set(this, "list", res.data);
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

