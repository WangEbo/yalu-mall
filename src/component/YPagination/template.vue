<template>
  <div class="y-pagination">
    <ul>
      <li class="pre"></li>
      <li :class="{active: page == index+1}" v-for="index in pageTotal" :key="index">
        <a @click="pageChange(index+1)">{{index+1}}</a>
      </li>
      <li class="next"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "YNewsCard",
  props: {
    page: {
      type: Object,
      default: ()=> {},
    },
    pageSize: {
      type: Number,
      default: 6
    },
    total: {
      type: Number,
    }
  },
  computed: {
    pageTotal(){
      Math.ceil(this.total/this.pageSize)
    }
  },
  methods: {
    pageChange(page){
      this.$emit('input', page)
    }
  }
};
</script>


<style lang="scss">
@import "./style.scss";
</style>