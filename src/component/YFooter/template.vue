<template>
  <footer id="foot">
    <div class="fmain">
      <div class="left">
        <h4>团队定制信息</h4>
        <div>
          <h6>团购热线</h6>
          <a class="able-link" v-for="tel in info.telPhone" :href="`tel:${tel}`" :key="tel" >{{tel}}</a>
        </div>
        <div> 
          <h6>大型订购热线</h6>
          <a class="able-link" v-for="tel in info.largeTelPhone" :key="tel"  :href="`tel:${tel}`" >{{tel}}</a>
        </div>  
      </div>
      <div class="mid">
        <h4>联系我们</h4>
        <ul>
          <li>
            <h6>全国服务热线</h6>
            <a class="able-link"  :href="`tel:${info.serviceTel}`" >{{info.serviceTel}}</a>
          </li>
          <li>
            <h6>QQ 客服</h6>
            <a class="able-link">{{info.qq}}</a>
          </li>
          <li>
            <h6>校园招聘</h6>
            <a class="able-link" :href="info.schoolJobs" target="_blank">{{info.schoolJobs}}</a>
          </li>
          <li>
            <h6>地址</h6>
            <p class="p-des">{{info.address}}</p>
          </li>
          <li>
            <h6>工作时间</h6>
            <p class="p-des">{{info.timeOfWork}}</p>
          </li>
          <li>
            <h6>邮编</h6>
            <p class="p-des">{{info.yb}}</p>
          </li>
        </ul>
      </div>
      <div class="right">
        <h4>在这里可以找到我们</h4>
        <div class="inter-place">
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
        </div>

      </div>
    </div>
    <div class="f-bottom">
      <div class="left">
        <img src="/img/bm-logo.png" alt="">
      </div>
      <div class="mid">
        <p class="p-des">
          中国安备号4299999239940 <br>雅鹿股份有限公司
        </p>
      </div>
      <div class="right">
        <div class="shop-platforms">
          <span>购物平台 <i class="icon iconfont icon-arrow-right"></i></span>
          
          <div class="items">
            <ul>
              <li v-for="(item,i) in info.salePlatform" :key="i"><a :href="item.href" target="_blank">{{item.name}}</a></li>
            </ul>
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <div class="app-inter">
      <div class="inter-place">
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
      </div>
      <div class="shop-platforms">
        <span>购物平台 <i class="icon iconfont icon-arrow-right"></i></span>
        
        <div class="items">
          <ul>
            <li v-for="(item,i) in info.salePlatform" :key="i"><a :href="item.href" target="_blank">{{item.name}}</a></li>
          </ul>
          <span></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

require("../../assets/imgs/bm-logo.png");
export default {
  name: "YFooter",
  data(){
    return {
      info: {
        telPhone: [""],
        salePlatform: [{}],
        largeTelPhone: [""],
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
          telPhone: ["0592-3790176"],
          largeTelPhone: ["0592-3790176"],
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