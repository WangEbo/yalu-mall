<template>
  <!-- 商品主页  分五类推荐 -->
  <div id="goods-page" class="index">
    <y-header></y-header>
    <YVideo v-if="goodsVideo" class="video-js bg-video" :controls="true" :autoplay="true" :loop="true" :poster="''" :src="goodsVideo"></YVideo>
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
import YVideo from "@component/YVideo";
import YFooter from "@component/YFooter";
import BrandNav from "@component/BrandNav";
import GoodCateCard from "@component/GoodCateCard";

import { getGoodsTree } from "@model/goods";
import { getConfig } from "@util/common";

export default {
  components: {
    YHeader, YFooter, BrandNav, GoodCateCard, YVideo,
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
      goodsVideo: "",
    };
  },
  mounted() {
    this.getGoodsTree();
    getConfig().then(config=> {
      this.goodsVideo = config.goodsVideo;
    });
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

