<template>
  <div class="cate-filter">
    <h2 class="title">
      官方商城
    </h2>
    <div class="cate-select">
      <h3 class="h3">所有分类</h3>
      <Menu
        v-if="tree"
        :default-active="activeIndex"
        @open="handleOpen"
        @close="handleClose">

        <Submenu v-for="(child1, i) in tree" :key="i" :index="`${i+1}`">
          <template slot="title">
            <span :class="{'menu-cate-name': true, active: activeIndex.split('-')[0] == `${i+1}`}">{{child1.name}}</span>
          </template>
          <MenuItem v-for="(child2, i2) in child1.children" :key="i2" :index="`${i+1}-${i2+1}`">
            <a class="menu-cate-name" :href="`./goods_cate.html?id=${child2.id}`">{{child2.name}}</a>
          </MenuItem>
        </Submenu>
      </Menu>
    </div>
    <div class="other-filter">
      <h3 class="h3">筛选</h3>
      <h4>价格</h4>
      <div class="price-filter">
        <div class="price-num">
          <span>¥{{value.range[0]}}</span>
          <span>¥{{value.range[1]}}</span>
        </div>
        <Slider
          :show-tooltip="false"
          v-model="value.range"
          range
          @change="rangeChange"
          :max="1500">
        </Slider>
      </div>
      <h4>颜色</h4>
      <ColorPicker v-model="value.color"></ColorPicker>
    </div>
  </div>
</template>

<script>
import { Slider, Menu, Submenu, MenuItem } from "element-ui";
import ColorPicker from "../ColorPicker";

export default {
  name: "CateFilter",
  components: { Slider, ColorPicker, Menu, Submenu, MenuItem  },  
  props: {
    value: {
      type: Object,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    activeIndex: {
      type: String,
    },
    tree: {
      type: Array,
    },
  },
  data() {
    return {
      filter: {

      },
    };
  },
  created() {

  },
  computed: {

  },
  watch: {
  },
  methods: {
    selectColor(e, item) {
      this.$emit("input", item.color);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    rangeChange(range){
      this.$emit("rangeChange", range);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
