<template>
  <footer id="foot">
    <div class="fmain">
      <div class="left">
        <h4>团队定制信息</h4>
        <div>
          <h6>团购热线</h6>
          <div v-if="info.teamOrderInfo && isArray(info.teamOrderInfo)">
            <a class="able-link" v-for="(tel, i) in info.teamOrderInfo" :href="`tel:${i}`" :key="tel" >{{tel}}</a>
          </div>
          <a class="able-link" v-else href="">{{info.teamOrderInfo}}</a>
        </div>
        <!-- <div> 
          <h6>大型订购热线</h6>
          <a class="able-link" v-for="tel in info.largeTelPhone" :key="tel"  :href="`tel:${tel}`" >{{tel}}</a>
        </div>   -->
      </div>
      <div class="mid">
        <h4>联系我们</h4>
        <ul>
          <li>
            <h6>全国服务热线</h6>
            <a class="able-link"  :href="`tel:${info.telephone}`" >{{info.telephone}}</a>
          </li>
          <!-- <li>
            <h6>QQ 客服</h6>
            <a class="able-link">{{info.qq}}</a>
          </li> -->
          <li>
            <h6>工作时间</h6>
            <p class="p-des">{{info.workingTime}}</p>
          </li>
          <li>
            <h6>校园招聘</h6>
            <a class="able-link" :href="info.campusHire" target="_blank">{{info.campusHire}}</a>
          </li>
          <li>
            <h6>地址</h6>
            <p class="p-des">{{info.address}}</p>
          </li>
          <li>
            <h6>邮编</h6>
            <p class="p-des">{{info.zipCode}}</p>
          </li>
          <li>
            
          </li>
        </ul>
      </div>
      <div class="right">
        <h4>在这里可以找到我们</h4>
        <div class="inter-place">
          <div class="inter">
            <a :href="info.weiboLink && !info.weiboLink.includes('http') ? `http://${info.weiboLink}` : info.weiboLink" target="_blank" class="icon iconfont  icon-weibo"></a>
          </div>
          <div class="inter">
            <a :title="info.wechatQr" class="icon iconfont icon-weixin"></a>
            <div class="items">
              <div class="shadow" style="background-color: #fff;">
                <div class="wxQrCode qrcode"><img :src="info.wechatQr" alt=""></div>
                <div class="f-center mt-4 pb-4">关注我们</div>
              </div>
              <span></span>
            </div>
          </div>
          <div class="inter">
            <a :title="info.douyinQr" class="icon iconfont icon-douyin"></a>
            <div class="items">
              <div class="shadow" style="background-color: #fff;">
                <div class="wxQrCode qrcode"><img :src="info.douyinQr" alt=""></div>
                <div class="f-center mt-4 pb-4">关注我们</div>
              </div>
              <span></span>
            </div>
          </div>
        <div class="inter">
          <a :title="info.kuaishouQr" class="icon iconfont icon-kuaishou"></a>
          <div class="items">
              <div class="shadow" style="background-color: #fff;">
                <div class="wxQrCode qrcode"><img :src="info.kuaishouQr" alt=""></div>
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
          {{info.beianCode}} <br>{{info.companyName}}
        </p>
      </div>
      <div class="right">
        <div class="shop-platforms">
          <span>购物平台 <i class="icon iconfont icon-arrow-right"></i></span>
          
          <div class="items">
            <ul>
              <li v-for="(item,i) in info.shoppingPlatforms" :key="i"><a :href="item.url" target="_blank">{{item.name}}</a></li>
            </ul>
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <div class="app-inter">
      <div class="inter-place">
        <div class="inter">
          <a :href="info.weiboLink && !info.weiboLink.includes('http') ? `http://${info.weiboLink}` : info.weiboLink" target="_blank" class="icon iconfont  icon-weibo"></a>
        </div>
        <div class="inter">
          <a :title="info.wechatQr" class="icon iconfont icon-weixin"></a>
          <div class="items">
            <div class="shadow" style="background-color: #fff;">
              <div class="wxQrCode qrcode"><img :src="info.wechatQr" alt=""></div>
              <div class="f-center mt-4 pb-4">关注我们</div>
            </div>
            <span></span>
          </div>
        </div>
        <div class="inter">
          <a :title="info.douyinQr" class="icon iconfont icon-douyin"></a>
          <div class="items">
            <div class="shadow" style="background-color: #fff;">
              <div class="wxQrCode qrcode"><img :src="info.douyinQr" alt=""></div>
              <div class="f-center mt-4 pb-4">关注我们</div>
            </div>
            <span></span>
          </div>
        </div>
        <div class="inter">
          <a :title="info.kuaishouQr" class="icon iconfont icon-kuaishou"></a>
          <div class="items">
            <div class="shadow" style="background-color: #fff;">
              <div class="wxQrCode qrcode"><img :src="info.kuaishouQr" alt=""></div>
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
            <li v-for="(item,i) in info.shoppingPlatforms" :key="i"><a :href="item.href" target="_blank">{{item.name}}</a></li>
          </ul>
          <span></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

import { getConfig } from "@util/common";
export default {
  name: "YFooter",
  data(){
    return {
      info: {
        telPhone: [""],
        shoppingPlatforms: [{}],
        largeTelPhone: [""],
        weiboLink: "",  
      },
    };
  },
  created(){
    this.getConfig();
  },
  methods:{
    isArray(ar){
      return ar instanceof Array && Array.isArray(ar);
    },
    getConfig(){
      getConfig().then(config=> {
        this.$set(this, "info", config);
        this.$nextTick(()=> {
          this.generateQrCode();
        });
      });
    },
    generateQrCode(){
      // jQuery(".wxQrCode").qrcode({ width: 60, height: 60, text: this.info.wechatQr});
    },
  },
};
</script>


<style lang="scss">
@import "./style.scss";
</style>