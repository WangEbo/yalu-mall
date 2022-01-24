<!-- 年份导航 -->
<template>
  <div class="tabs page-nav">
    <ul class="tab-wrap">
      <h3>{{activeItem.text}}</h3>
      <p>{{activeItem.engText}}</p>
      <li class="tab-item" v-for="(item, i) in tabs" :key="i" :class="{active: activeName == item.name}">
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
  computed: {
    activeItem(){
      return this.tabs.find(item=> item.name == this.activeName);
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
          href: "./overview.html",
        },
        {
          name: "history",
          text: "品牌历程",
          engText: "history",
          icon: "icon-history",
          href: "./history.html",
        },
        {
          name: "csr",
          engText: "responsibility",
          text: "社会责任",
          icon: "icon-csr",
          href: "./csr.html",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>