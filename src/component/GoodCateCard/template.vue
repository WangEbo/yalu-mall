<template>
  <div class="cate-wrap">
    <div class="cate-cover-img"  :style="{'background-image': `url(${cate.coverImg})`}">
      <div class="cate-name-1">{{cate.name}}</div>
      <div class="cate-tabs">
        <ul>
          <li @click="selectChildCate(child)" v-for="(child,i) in cate.children" :key="i" :class="['child-cate', activeChildCate == child ? 'active' : '' ]">
            <span>{{child.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="cate-good-list">
      <ul>
        <li v-for="(item,i) in list" :key="i">
          <GoodCard :cate="cate" :item="item"></GoodCard>
        </li>
      </ul>
      <empty v-show="!list.length" description="暂无数据"></empty>
      <div class="more" v-show="catetotal > defaultPageSize">
        <a :href="`./good_cate.html?id=${activeChildCate.id}`"><span>查看更多内容</span></a>
      </div>
    </div>
  </div>
</template>

<script>

import { queryGoodList } from "@model/goods";
import { Empty } from "element-ui";
import GoodCard from "../GoodCard";

const defaultPageSize = 4;
export default {
  name: "GoodCateCard",
  components: {
    Empty, GoodCard,
  },
  props: {
    cate: {
      type: Object,
      default(){
        return {
          children: [],
          coverImg: "",
          id: {},
          name: "",
        };
      },
    },
  },
  watch: {
    cate: {
      immediate: true,
      deep: true,
      handler(nval){
        if(nval.id){
          if(!this.cate.children.length)return;
          this.$set(this, "activeChildCate", this.cate.children[0]);
          this.getCateGoods();
        }
      },
    },
  },
  data(){
    return {
      defaultPageSize,
      list: [
        // {
        //   name: "",
        //   productCategoryName: "",
        //   productCategoryId: "",
        //   price: "",
        //   pic: "",
        // },
      ],
      activeChildCate: {},
      catetotal: 0,
  
    };
  },
  methods: {
    getCateGoods(){
      queryGoodList({
        productCategoryId: this.activeChildCate.id,
        pageSize: defaultPageSize,
        pageNum: 1,
      }).then(res=> {
        this.list = res.data.list;
        this.catetotal = res.data.total;
      });
    },
    selectChildCate(childCate){
      this.$set(this, "activeChildCate", childCate);
      this.getCateGoods();
    },
  },
};
</script>


<style lang="scss">
@import "./style.scss";
</style>