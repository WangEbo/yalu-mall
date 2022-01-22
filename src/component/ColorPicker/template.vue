<template>
  <div class="color-wrap">
    <ul>
      <li :class="{active: item.color == value }" v-for="(item, i) in colors" :key="i">
        <button :disabled="disabled" @click.stop="selectColor($event, item)" :style="{'background-color': item.color}"></button>
      </li>
    </ul>
  </div>
</template>

<script>
import colors from "./colors";

export default {
  name: "ColorPicker",
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      colors,
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
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
