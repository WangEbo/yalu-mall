<template>
  <div class="time-info">
    <div class="info-header">
      <h3>品牌资讯</h3>
      <a v-if="showMore" href="" class="more">更多</a>
      <p v-else class="info-time">{{infoItem.createTime && infoItem.createTime.substr(0, 10)}}</p>
    </div>
    <div class="info-title">
      {{infoItem.title}}
    </div>
    <div class="divide-line"></div>
    <p class="des">{{infoItem.intro}}</p>
    <div class="view-all"><em class="arrow"></em>阅读全文</div> 
  </div>
</template>

<script>
export default {
  name: "YNewsCard",
  props: {
    infoItem: {
      type: Object,
      default: ()=> {},
    },
    showMore: {
      type: Boolean,
      default: ()=> true,
    },
  },
};
</script>


<style lang="scss">
@import "./style.scss";
</style>