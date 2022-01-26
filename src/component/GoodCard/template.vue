<template>
    <div class="good-card">
      <a :href="item.url" v-if="item" target="_blank">
        <div class="g-img">
          <div class="g-img-inner" :style="{'background-image': `url(${item.pic})`}"></div>
        </div>
        <div class="g-info">
          <p class="g-name">{{item.name}}</p>
          <p class="g-cate-name">{{cate.name || item.productCategoryName}}</p>
          <p class="g-price">¥{{item.price}}</p>
        </div>
      </a>
    </div>

</template>

<script>
import { Empty } from "element-ui";

const defaultPageSize = 4;
export default {
  name: "GoodCard",
  components: {
    Empty,
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
    item: {
      type: Object,
      default(){
        return {
          pic: "",
          name: "",
          price: "",
        };
      },
    },
  },
  watch: {
  },
  data(){
    return {
    };
  },
  methods: {
  },
};
</script>


<style lang="scss">
@import "./style.scss";
</style>