<template>
  <footer id="foot">
    <div class="fmain">
      <div class="left">
        <!--*<a>集团招聘</a>
            <a>加盟</a>-->
        <a data-dialog="pop_dialog">团购订制</a>
        <div class="other">团购热线：{{info.telPhone}}<br>
          大型定制联系电话:<br>{{info.largeDz}}
        </div>
      </div>
      <div class="mid">
        <ul>
          <li>
            <h3>QQ 客服</h3>
            <p>{{info.qq}}</p>
          </li>
          <li>
            <h3>邮编</h3>
            <p>{{info.yb}}</p>
          </li>
          <li>
            <h3>工作时间</h3>
            <p>{{info.timeOfWork}}</p>
          </li>
          <li>
            <h3>全国服务热线</h3>
            <p>{{info.serviceTel}}</p>
          </li>
          <li>
            <h3>地址</h3>
            <p>{{info.address}}</p>
          </li>
          <li>
            <h3>校园招聘</h3>
            <p><a href="http://campus.51job.com/361sport2020" target="_blank">{{info.schoolJobs}}</a></p>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="inter">
          <span>购物平台 <i class="iconfont ml-10"></i></span>
          <div class="items" v-show="false">
            <ul>
              <li v-for="(item,i) in info.salePlatform" :key="i"><a :href="item.href" target="_blank">{{item.name}}</a></li>
            </ul>
            <span></span>
          </div>
        </div>
        <div class="inter">
          <a :href="info.weibo" class="icon iconfont  icon-weibo"></a>
        </div>
        <div class="inter">
          <a class="icon iconfont icon-weixin"></a>
          <div v-show="false" class="items" style="width: 100px;">
            <div class="shadow" style="background-color: #fff;">
              <img src="templates/dist/img/wx.jpg" class="wid-100">
              <div class="f-center mt-4 pb-4">关注我们</div>
            </div>
            <span></span>
          </div>
        </div>
        <div class="other wid-100 f-center d-gc">
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="nofollow">中国 闽ICP备05003868号-1</a><br>©2019三六一度(中国)有限公司 All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "YFooter",
  data(){
    return {
      info: {
        salePlatform: [{}],
      },
    };
  },
  created(){
    this.getFooterInfo();
  },
  methods:{
    getFooterInfo(){
      setTimeout(()=> {
        this.$set(this, "info", {
          telPhone: "0592-3790176",
          largeDz: "18259437972",
          qq: "476849964",
          yb: "361009",
          timeOfWork: "周一至周五（工作日）9:00-12:00，13:00-18:00",
          serviceTel: "400-6661-361",
          address: "福建省厦门市湖里区墩岭路 159 号三六一度大楼",
          schoolJobs: "http://campus.51job.com/361sport2020",
          salePlatform: [
            {name: "天猫：361度官方旗舰店", href: ""},
            {name: "天猫：361度官方旗舰店", href: ""},
          ],
          weibo: "",
          wx: "http:/asfqeqgqe.com",

        });
      }, 200);
    },
  },
};
</script>


<style lang="scss">
@import "./style.scss";
</style>