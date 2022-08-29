<template>
  <Row class="navbtn_is_show">
  <Row class="three_btn">
      <Grid :border="border" :hover="hover" :col="1" square padding="0">
          <!-- 切换时间线按钮 -->
          <a :href="btnhref[0]" @click="BtnTop">
            <GridItem class="top_btn" :style="{ backgroundImage: 'url(' + btnimg[0] + ')' }"></GridItem>
          </a>
          <!-- 展示nav栏按钮 -->
          <a :href="btnhref[1]" @click="BtnMid">
            <GridItem class="mid_btn" :style="{ backgroundImage: 'url(' + btnimg[1] + ')' }"></GridItem>
          </a>
          <!-- 返回主页按钮 -->
          <a :href="btnhref[2]" @click="BtnBot">
            <GridItem class="bottom_btn" :style="{ backgroundImage: 'url(' + btnimg[2] + ')' }"></GridItem>
          </a>
      </Grid>
  </Row>
</Row>
</template>

<script>
export default {
    name:"SideThreeNavBtn",
    props:[
      'btnhref',
      'btnimg',
    ],
    emits:[
      'TopClick',
      'MidClick',
      'BotClick',
    ],
    data(){
      return{
          hover: false,//将鼠标放在GridItem上是否有悬浮效果
          border:false,// GridItem是否显示边框
      }
    },
    methods:{
      BtnTop(){
        this.$emit('TopClick')
      },
      BtnMid(){
        this.$emit('MidClick')
      },
      BtnBot(){
        this.$emit('BotClick')
      },
    },
}
</script>

<style scoped>

.three_btn{
    position: fixed;
    width: 4vw;
    /* height: 29vh; */
    bottom: 50vh;
    left: 1vw;
    transform: translateY(50%);
    /* background-color: red; */
    flex-direction: column;
    flex-wrap: nowrap;
    z-index: 1000;
  }


  .top_btn{
    width: 100%;
    margin: 0.4vw;
    background-color: white;
    /*background-image: url("/src/assets/icons/无穷-透明黑色.png");*/
    background-repeat: no-repeat;
    background-size: 70% 70%;
    background-position: center;
    
  }
  .mid_btn{
    width: 100%;
    margin: 0.4vw;
    background-color: black;
    /*background-image: url("/src/assets/icons/菜单-透明白色.png");*/
    background-repeat: no-repeat;
    background-size: 70% 70%;
    background-position: center;
  }

  .bottom_btn{
    width: 100%;
    margin: 0.4vw;
    background-color: black;
    /*background-image: url("/src/assets/icons/双左-透明白色.png");*/
    background-repeat: no-repeat;
    background-size: 70% 70%;
    background-position: center;
  }

</style>