<template>
  <!-- 商品分类筛选 -->
  <div id="search-page" class="index">
    <y-header></y-header>
    <div class="main-content">
      <div class="top-bg">
        <div class="search-box">
          <h3>搜索结果</h3>
          <p>Search result</p>
           <div class="go-search">
            <input type="text" class="search-input" @keydown.enter="getSearch" name="keyword" v-model="keyword" placeholder="">
            <a @click="getSearch" href="javascript: void(0)" class="icon iconfont icon-search"></a>
          </div>
        </div>
      </div>
      
      <Tabs v-model="activeName" @tab-click="handleClick">
        <TabPane :label="`产品(${goodsTotal})`" name="goods">
          <div class="goods-content">
            <ul>
              <li v-for="(item, i) in goodsList" class="view-item" :key="i">
                <GoodCard v-if="item" :item="item"></GoodCard>
              </li>
            </ul>
          </div>
        </TabPane>
        <TabPane :label="`资讯(${newsTotal})`" name="news">
          <div class="news-content">
            <ul>
              <li v-for="(item, i) in newList" class="view-item" :key="i">
                <NewsCard v-if="item" :item="item"></NewsCard>
              </li>
            </ul>
          </div>
        </TabPane>
      </Tabs>
      
    </div>
    <y-footer></y-footer>
  </div>
</template>
<script>
import YHeader from "@component/YHeader";
import YFooter from "@component/YFooter";
import { Empty, Tabs, TabPane } from "element-ui";
import GoodCard from "@component/GoodCard";
import NewsCard from "@component/NewsCard";

import { getUrlQuery } from "@util/common";
let query = getUrlQuery();
let keyword = decodeURIComponent(query.k);

import { queryGoodList } from "@model/goods";
import { getNewsPageList } from "@model/news";

export default {
  components: {
    YHeader, YFooter, GoodCard, NewsCard, Tabs, TabPane,
  },
  created() {

  },
  computed: {
  },
  data() {
    return {
      keyword,
      activeName: "goods",
      goodsTotal: 0,
      newsTotal: 0,
      newList: [
        {
          coverImg: "",
          pic: "",
          title: "",
          intro: "",
        },
      ],
      goodsList: [
        {
          name: "",
          productCategoryId: "",
          title: "",
          content: "",
          pic: "",
          price: "",
        },
      ],
    };
  },
  mounted() {
    this.getSearch();
  },
  methods: {
    async getSearch() {
      let goodRes = await queryGoodList({keyword: this.keyword, pageSize: 2000});
      let newRes = await getNewsPageList({keyword: this.keyword, pageSize: 2000});
      Promise.all([goodRes, newRes]).then(res=> {
        let gRes = res[0],
          nRes = res[1];
        this.$set(this, "goodsList", gRes.data.list);
        this.goodsTotal = gRes.data.total;

        this.$set(this, "newList", nRes.data.list);
        this.newsTotal = nRes.data.total;
      });
    },
    handleClick(){
      
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

