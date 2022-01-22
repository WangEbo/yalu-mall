<template>
  <!-- 商品分类筛选 -->
  <div id="cate-page" class="index">
    <y-header></y-header>
    <div class="main-content">
      <div class="cate-bg" :style="{ 'background-image': cate.coverImg }"></div>
      <div class="cate-content">
        <CateFilter :class="{active: filterVisible}" v-show="filterVisible" :tree="cateTree" v-model="filter" :activeIndex="activeIndex"></CateFilter>
        <div class="cate-good-list">
          <ul>
            <li v-for="(item,i) in list" :key="i">
              <a :href="item.url" v-if="item">
                <div class="good-card">
                  <div class="g-img">
                    <div class="g-img-inner" :style="{'background-image': `url(${item.pic})`}"></div>
                  </div>
                  <div class="g-info">
                    <p class="g-name">{{item.name}}</p>
                    <p class="g-cate-name">{{cate.name}}</p>
                    <p class="g-price">¥{{item.price}}</p>
                  </div>
                </div>
              </a>
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

import { queryGoodList, getGoodsTree } from "@model/goods";
import { getUrlQuery } from "@util/common";

let query = getUrlQuery();
console.log(query);
if(!query.id){
  console.log("请确认页面参数");
}

export default {
  components: {
    YHeader, YFooter, CateFilter, Empty,
  },
  computed: {
  },
  data() {
    return {
      activeIndex: "",
      cate: {
        coverImg: "",
      },
      list: [
        {
          title: "",
          content: "",
          imgUrl: "",
        },
      ],
      total: 0,
      filter: {
        productCategoryId: "",
        color: "",
        range: [0, 1500],
      },
      cateTree: [
        {
          id: 1,
          coverImg: "",
          name: "篮球",
          children: [
            {
              id: 11,
              coverImg: "",
              name: "篮球1",
            },
            {
              id: 12,
              coverImg: "",
              name: "篮球2",
            },
          ],
        },
        {
          id: 2,
          coverImg: "",
          name: "运动",
          children: [
            {
              id: 21,
              coverImg: "",
              name: "运动1",
            },
            {
              id: 22,
              coverImg: "",
              name: "运动2",
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
      handler(nval){
        this.getList();
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
    toggleFilterVisible(){
      this.filterVisible = !this.filterVisible;
    },
    getGoodsTree(){
      getGoodsTree().then(res=> {
        if(!res.data || !res.data.length)return;
        this.$set(this, "cateTree", res.data);
        this.cate = this.cateTree.find((item, i)=> {
          if(item.id == query.id){
            this.activeIndex = (`${i}`);
            return true;
          }else{
            return item.children.find((child, ci)=> {
              if(child.id == query.id){
                this.activeIndex = `${i}-${ci}`;
                return true;
              }
              return false;
            });
          }
        });
      });

      this.cate = this.cateTree.find((item, i)=> {
        if(item.id == query.id){
          this.activeIndex = (`${i}`);
          return true;
        }else{
          return item.children.find((child, ci)=> {
            if(child.id == query.id){
              this.activeIndex = `${i}-${ci}`;
              return true;
            }
            return false;
          });
        }
      });
      console.log(this.cate);
    },
    getList() {
      queryGoodList({
        productCategoryId: query.id,
        priceBegin: this.filter.range[0],
        priceEnd: this.filter.range[1],
        color: this.filter.color,
      }).then(res=> {
        this.list = res.data;
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

