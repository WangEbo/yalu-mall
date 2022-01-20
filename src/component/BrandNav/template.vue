<!-- 年份导航 -->
<template>
  <div class="tabs page-nav">
    <ul class="tab-wrap">
      <li class="tab-item" v-for="item in tabs" :key="item" :class="{active: activeName == item.name}">
        <a :href="item.href">
          <span class="icon iconfont" :class="[item.icon]"></span> 
          <div class="right-part">
            <p>{{item.engText}}</p>
            <p>{{item.text}}</p>
          </div>
          
        </a>
        
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "BrandNav",
  props: {
    activeName: {
      type: String,
    },
  },
  data(){
    return {
      tabs: [
        {
          name: "overview",
          text: "品牌概况",
          engText: "overview",
          icon: "icon-overview",
          href: "./overview",
        },
        {
          name: "history",
          text: "品牌历程",
          engText: "history",
          icon: "icon-history",
          href: "./history",
        },
        {
          name: "csr",
          engText: "responsibility",
          text: "品牌概况",
          icon: "icon-csr",
          href: "./csr",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>