<template>
    <Row class="back_to_top">    
        <BackTop :height="ScrollHeight" class="btt_body">
        <div class="btt_img"></div>
        </BackTop>
    </Row>
</template>

<script>
export default {
    name:"BackToTop",
    data(){
        return{
            ScrollHeight:0,
        }
    },
    mounted() {
    this.ScrollHeight = 0.5 * document.body.clientHeight;
    },
}
</script>

<style scoped>

  /* 3.5 返回顶部按钮样式 */
  .btt_body{
    width: 3.7vw;
    height: 3.7vw;
    right: 1.2vw;
  }

  .btt_img{
    width: 100%;
    height: 100%;
    background-image: url("/src/assets/icons/方框向上-透明白色.png");
    background-repeat: no-repeat;
    background-size: 70% 70%;
    background-position:center;
  }


</style>