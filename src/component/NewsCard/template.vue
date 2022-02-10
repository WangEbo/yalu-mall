<template>
    <div class="news-card">
      <a :href="`./newsDetail.html?id=${item.id}`">
        <div class="top-img" :style="{'background-image': `url('${imgUrlEncode(item.coverImg)}')`}"></div>
        <div class="bottom-info">
          <div class="info-time">{{item.createTime && item.createTime.substr(0, 10)}}</div>
          <h4 class="info-title">{{item.title}}</h4>
          <div class="info-intro">{{item.intro}}</div>
        </div>
      </a>
    </div>
</template>

<script>
import { Empty } from "element-ui";
import { imgUrlEncode } from "@util/common";
const defaultPageSize = 4;
export default {
  name: "NewsCard",
  components: {
    Empty,
  },
  props: {
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
    imgUrlEncode,
  },
};
</script>


<style lang="scss">
@import "./style.scss";
</style>