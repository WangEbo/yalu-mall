<script>
export default {
  name: "YSwiperSlide",
  props: {
    active: {
      type: Boolean,
    },
  },
  render(h){
    var slide = h(
      "div", {
        class: {
          "y-swiper-slide": true,
          active: this.$props && this.$props.active,
        },
      },
      this.$slots.default
    );
    return slide;
  },
};
</script>