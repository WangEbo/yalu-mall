<template>
  <div class="news-detail">
    <YHeader></YHeader>
    <div class="top-bg">
      <div class="pic" :style="{'background-image':`url('${imgUrlEncode(detail.coverImg)}')`}"></div>
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
      <div class="content-inner ql-editor" v-html="detail.content"></div>
    </div>
    <!-- <y-footer></y-footer> -->
  </div>
</template>
<script>
import YHeader from "@component/YHeader";
import YFooter from "@component/YFooter";
import { imgUrlEncode } from "@util/common";
import { getNewsDetailById, getNewsPageList } from "@model/news";
import "@assets/style/quill.core.css";
import "@assets/style/quill.snow.css";
export default {
  components: { YHeader },
  data(){
    return {
      detail:{
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
    imgUrlEncode,
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
.content-inner{
  tab-size: 4;
}
</style>
