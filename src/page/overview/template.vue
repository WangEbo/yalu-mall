<template>
  <!-- 品牌概况 -->
  <div id="overview-page" class="index">
    <y-header></y-header>
    <div class="main-content">
      <BrandNav :activeName="'overview'"></BrandNav>
      <div :class="['overview-content', loading ? 'loading' :'']">
        <YVideo v-if="brandVideo" class="video-js bg-video" :controls="true" :autoplay="true" :loop="true" :poster="''" :src="brandVideo"></YVideo>
        <ul>
          <li v-for="(item, i) in list" class="view-item" :key="i">
            <div class="img-wrap" >
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="overview-item">
              <h4>{{item.title}}</h4>
              <p>{{item.content}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <y-footer></y-footer>
  </div>
</template>
<script>
import YHeader from "@component/YHeader";
import YVideo from "@component/YVideo";
import YFooter from "@component/YFooter";
import BrandNav from "@component/BrandNav";
import { imgUrlEncode } from "@util/common";
import { getOverviewList } from "@model/overview";
import { getConfig } from "@util/common";

export default {
  components: {
    YHeader, YFooter, BrandNav, YVideo,
  },
  created() {
    getConfig().then(config=> {
      this.brandVideo = config.brandVideo;
      // this.$nextTick(()=> {
      //   let video = this.$refs.video;
      //   setTimeout(()=> {
      //     video.volume = 0.5;
      //     video.play();
      //   }, 1000);
      // });
    });
  },
  computed: {
  },
  data() {
    return {
      brandVideo: "",
      activeTab: "overview",
      list: [
        {
          title: "",
          content: "",
          imgUrl: "",
        },
      ],
      loading: false,
    };
  },
  mounted() {
    this.getList();

  },
  methods: {
    imgUrlEncode,
    getList() {
      this.loading = true;
      getOverviewList().then(res => {
        this.list = res.data.list;
      }).catch(err=> {
        this.loading = false;
      }).finally(()=> {
        this.loading = false;
      });
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

