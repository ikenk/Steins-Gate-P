<template>
    <!-- 背景长图 -->
    <div class="bg_img" :style="{ top: iScol + 'px' }">
      <div class="bg_longimg"></div>
      <div class="bg_grayimg"></div>
      <div class="bg_pointimg"></div>
    </div>
</template>

<script>
export default {
    name:'BackgroundLongImg',

    data() {
      return {
        iScol: "0",//背景大图在页面滚动时向上的滚动距离
      };
    },
    mounted() {
      window.addEventListener("scroll", this.scrollToTop);//监视页面滚动
    },
    methods: {
      //监视网页滚动
      scrollToTop() {
        var scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        // console.log(scrollTop);
        this.iScol = -1.8 * scrollTop;
      },
    }
}
</script>

<style scoped>

  /* 1.背景样式 */
  .bg_img {
    position: absolute;
    width: 100vw;
    height: 50000px;
    z-index: -1000;
  }
  
  .bg_img .bg_longimg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50000px;
    background-image: url("/src/assets/images/bg_mainbg01.jpg");
    background-size: contain;
    background-repeat: repeat-y;
    z-index: -999;
  }
  
  .bg_img .bg_grayimg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50000px;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: -998;
  }
  
  .bg_img .bg_pointimg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50000px;
    background-image: url("/src/assets/images/whitepoint.png");
    opacity: 0.15;
    z-index: -997;
  }
  

</style>