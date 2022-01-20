<template>
  <div class="time-info">
    <div class="info-header">
      <h3>品牌资讯</h3> <a href="" class="more">更多</a>
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
  },
};
</script>


<style lang="scss">
@import "./style.scss";
</style>