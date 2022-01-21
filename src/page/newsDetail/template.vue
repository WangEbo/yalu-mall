<template>
  <div class="news-detail">
    <div class="top-bg">
      <div class="pic" :style="{'background-image':`url(${detail.coverImg})`}"></div>
      <div class="mask-cover"></div>
    </div>
    <div class="back">
      <a  href="./news.html">
        <span class="icon iconfont icon-back"></span>
        <span>返回列表</span>
      </a>
    </div>
    <div class="detail-content">
      
      <div class="top">
        <p class="time">{{detail.createTime && detail.createTime.substr(0, 10)}}</p>
        <p class="title">{{detail.title}}</p>
      </div>
      <div class="content-inner" v-html="detail.content"></div>
    </div>
    <y-footer></y-footer>
  </div>
</template>
<script>
import YFooter from "@component/YFooter";

import { getNewsDetailById, getNewsPageList } from "@model/news";
export default {
  components: { YFooter },
  data(){
    return {
      detail: {
        content: "",
        coverImg: "",
        createTime: "",
        intro: "",
        title: "",
        id: "",
      },
    };
  },
  created(){
    this.getDetail();
  },
  methods: {
    getDetail(){
      let query = location.href.split("?")[1].split("=");
      if(!query[1]){
        alert("请确认页面参数");
      }
      getNewsDetailById(query[1]).then(res=> {
        this.detail = res.data;
      });
      // getNewsPageList().then(res=> {
      //   this.detail = res.data.list[0];
      // });
    },
  },
};
</script>
<style lang="scss">
@import "./style.scss";
</style>
