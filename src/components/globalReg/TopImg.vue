<template>
<div class="top_img" id="top">
    <div class="top_img_left" :style="{ backgroundImage: 'url(' + TopImgUrl[0] + ')' }"></div>
    <div class="top_img_right" :style="{ backgroundImage: 'url(' + TopImgUrl[1] + ')' }"></div>
</div>
</template>

<script>
export default {
    name:'TopImg',
    props:[
        'TopImgUrl',
    ]
}
</script>

<style scoped>

 /* 2.Top图样式 */
  .top_img {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    
  }
  /* 2.1 Top-left图样式 */
  .top_img .top_img_left {
    position: absolute;
    top: 0;
    left: calc(0.1 * (100vw - 104.96vh));
    width: calc(100vw - 104.96vh);
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: calc(0.8 * (100vw - 104.96vh));
    z-index: 100;
  }
  /* 2.2 Top-right图样式 */
  .top_img .top_img_right {
    position: absolute;
    top: 0;
    right: 0;
    width: 104.96vh;
    height: 100vh;
    background-position: right center;
    background-size: cover;
    background-repeat: no-repeat;
  }

</style>