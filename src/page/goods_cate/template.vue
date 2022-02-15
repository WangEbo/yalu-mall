<template>
  <!-- 商品分类筛选 -->
  <div id="cate-page" class="index">
    <y-header></y-header>
    <div class="main-content">
      <div class="cate-bg" :style="{ 'background-image': `url('${imgUrlEncode(cate && cate.coverImg)}')`}">
      </div>
      <div class="cate-content">
        <CateFilter v-if="cateTree" @rangeChange="getList()" @colorChange="getList()" :class="{active: filterVisible}" :tree="cateTree" v-model="filter" :activeIndex="activeIndex"></CateFilter>
        <div class="cate-good-list">
          <YVideo v-if="cate.videoUrl" class="video-js bg-video" :controls="true" :autoplay="true" :loop="true" :poster="''" v-show="cate.videoUrl" :src="cate.videoUrl"></YVideo>
          <ul>
            <li v-for="(item, i) in list" :key="i">
              <good-card v-if="item" :item="item" :cate="cate"></good-card>
            </li>
          </ul>
          <empty v-show="!list.length" description="暂无数据"></empty>
        </div>
      </div>
    </div>
    <div class="filter-toggle" @click="toggleFilterVisible">
      <span class="icon iconfont icon-filter"></span>
    </div>
    <y-footer></y-footer>
  </div>
</template>
<script>
import YHeader from "@component/YHeader";
import YFooter from "@component/YFooter";
import CateFilter from "@component/CateFilter";
import { Empty } from "element-ui";
import GoodCard from "@component/GoodCard";
import YVideo from "@component/YVideo";

import { queryGoodList, getGoodsTree } from "@model/goods";
import { getUrlQuery, imgUrlEncode } from "@util/common";

let query = getUrlQuery();
console.log(query);
if(!query.id){
  console.log("请确认页面参数");
}


let defaultFilter = {
  productCategoryId: query.id,
  color: "",
  range: [0, 1500],
};
export default {
  components: {
    YHeader, YFooter, CateFilter, Empty, GoodCard, YVideo,
  },
  computed: {
  },
  data() {
    return {
      activeIndex: "",
      cate: {
        coverImg: "",
        videoUrl: "",
      },
      list: [
        {
          name: "",
          productCategoryId: "",
          title: "",
          content: "",
          pic: "",
          price: "",
        },
      ],
      total: 0,
      filter: Object.assign({}, defaultFilter),
      cateTree: [
        {
          id: 1,
          coverImg: "",
          name: "",
          children: [
            {
              id: 11,
              coverImg: "",
              name: "",
            },
            {
            },
          ],
        },
      ],
      parentId: "",
      filterVisible: true,
    };
  },
  watch: {
    filter: {
      deep: true,
      handler(nval, oval){
        if(JSON.stringify(nval) != JSON.stringify(oval)){
          this.getList();
        }
      },
    },
  },
  created(){
    this.filterVisible = window.innerWidth >= 800;
  },
  mounted() {
    this.getGoodsTree();
    this.getList();
    window.onresize =()=> {
      this.filterVisible = window.innerWidth >= 800;
    };
  },
  methods: {
    imgUrlEncode,
    toggleFilterVisible(){
      this.filterVisible = !this.filterVisible;
    },
    getGoodsTree(){
      getGoodsTree().then(res=> {
        if(!res.data || !res.data.length)return;
        this.$set(this, "cateTree", res.data);
        this.cate = this.cateTree.find((item, i)=> {
          if(item.id == query.id){
            this.activeIndex = (`${i+1}`);
            return true;
          }else{
            return item.children.find((child, ci)=> {
              if(child.id == query.id){
                this.activeIndex = `${i+1}-${ci+1}`;
                return true;
              }
              return false;
            });
          }
        });
      });
      console.log(this.cate);
    },
    getList() {
      queryGoodList({
        productCategoryId: query.id,
        pageSize: 2000,
        pageNum: 1,
        priceBegin: this.filter.range[0],
        priceEnd: this.filter.range[1],
        color: this.filter.color,
      }).then(res=> {
        this.list = res.data.list;
        this.catetotal = res.data.total;
      });
    },
    getLevel1Data(){
      
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

