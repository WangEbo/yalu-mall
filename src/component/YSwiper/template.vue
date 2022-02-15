<script>
import YSwiperSlide from "../YSwiperSlide/index";
const getSlidesChilds = (vnodes)=> {
  return vnodes.filter(item=> item.componentOptions && item.componentOptions.tag === "y-swiper-slide");
};

const getNavChilds = (vnodes, className)=> {
  return vnodes.filter(item=> item.data && item.data.staticClass == className);
};
export default {
  components: {YSwiperSlide},
  name: "YSwiper",
  props: {
    autoPlay: { //是否自动循环
      type: Boolean,
      default: false,
    },
    dealy: { //循环延迟
      type: Number,
      default: 5000,
    },
    /**
     * string  fade | scroll 
     * */
    mode: {
      type: String,
      default: "fade",
    },
    navEl: {
      type: String,
    },
  },
  data(){
    return {
      activeIndex: 0,
      bannerLength: 0,
      timer: null,
      touchStartX: 0,
      touchCurX: 0,
      touchEndX: 0,
    };
  },
  render(h){
    let slots = this.$slots.default || [];
    let slides = getSlidesChilds(slots);
    this.bannerLength = slides.length;
    let activeIndex = this.activeIndex;
    let slideVNodes = slides.map((item, i)=> {
      return h(
        item.componentOptions.tag,{
          props: {
            active: activeIndex == i,
          },
        },
        item.componentOptions.children
      );
    });

    let childs = slideVNodes; 
    
    if(this.navEl){
      let navSlot = getNavChilds(slots, this.navEl);
      childs = childs.concat(navSlot);
    }
    
    return h(
      "div", {
        attrs: {
          class: "y-swiper",
        },
        on: {
          click: ()=> {console.log("click");},
          touchstart: this.touchstart,
          touchmove: this.touchmove,
          touchend: this.touchend,
        },
        ref: "ySwiper",
      },
      childs
    );
  },
  watch: {
    activeIndex: {
      handler(nval){
        this.$emit("swiperChange", this.activeIndex);
      },
    },
  },
  mounted(){
    this.$nextTick(()=> {
      this.loop();
    });
  },
  methods: {
    loop(){
      if(!this.autoPlay){
        return;
      }
      this.timer = setInterval(() => {
        this.toNext();
        this.$emit("swiper-change", this.activeIndex);
      }, this.dealy);
    },
    jumpTo(index){
      if(index > -1 && index <= this.bannerLength-1){
        this.activeIndex = index; //跳转
        clearInterval(this.timer); //停止轮播
        this.autoPlay && this.loop();  //从当前位置开启轮播
      }
    },
    toPre(){
      this.activeIndex = this.activeIndex>0 ? this.activeIndex - 1 : this.bannerLength - 1;
    },
    toNext(){
      this.activeIndex = this.activeIndex >= this.bannerLength - 1 ? 0 : this.activeIndex+1;
    },

    touchstart(e){
      this.touchStartX = e.targetTouches[0].pageX;
      clearInterval(this.timer);
    },
    touchmove(e){
      this.touchCurX = e.changedTouches[0].pageX;
    },
    touchend(e){
      this.touchEndX = e.changedTouches[0].pageX;
      let distance = this.touchEndX - this.touchStartX;
      if(Math.abs(distance) > this.$refs.ySwiper.offsetWidth/2){
        if(distance > 0){
          this.toPre();
        }else{
          this.toNext();
        }
      }
      this.loop();
    },
  },
};
</script>
<style lang="scss">
@import "./style.scss";
</style>