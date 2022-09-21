<template>
  <div class="container" id="container">
    <!-- 背景长图 -->
    <!-- <BackgroundLongImg></BackgroundLongImg> -->
    <div class="bg_img" :style="{ top: iScol + 'px', height: theWholePage + 'px'}">
      <div class="bg_longimg"></div>
      <div class="bg_grayimg"></div>
      <div class="bg_pointimg"></div>
    </div>
    <div class="contents_is_show">
      <div class="contents">
        <!-- 最顶部图片 -->
        <!-- beta线TopImg -->
        <TopImg :TopImgUrl="b_topimgurl" RightImgWidth='104.96vh' v-if="ChangeDis[7]"></TopImg>
        <!-- alpha线TopImg -->
        <TopImg :TopImgUrl="a_topimgurl" RightImgWidth='80vh' BackgroundColor='#ffffff' v-if="ChangeDis[6]"></TopImg>
        <!-- 两条不同时间线的内容 -->
        <Row class="StoryCharacterCast">
          <!-- beta时间线 -->
          <BetaTimeLine v-if="1"></BetaTimeLine>
          <!-- alpha时间线 -->
          <AlphaTimeLine v-if="0"></AlphaTimeLine>
        </Row>
        <br />
        <Row class="product" id="product">
          <Row class="product_title">
            <Col span="8">
            </Col>
            <Col span="8">
            <div class="title_product"></div>
            </Col>
            <Col span="8">
            </Col>
          </Row>
          <Row class="product_body">
            <Col flex="5">
            </Col>
            <Col flex="5" class="product1">
            <a href="javascript:void(0);">
              <div class="product_BD">
                <span class="productBD_txt">Blu-ray<br /><span>DVD</span></span>
              </div>
            </a>
            </Col>
            <Col flex="5" class="product2">
            <a href="javascript:void(0);">
              <div class="product_CD">
                <span class="productCD_txt">CD</span>
              </div>
            </a>
            </Col>
            <Col flex="5" class="product3">
            <a href="javascript:void(0);">
              <div class="product_GOODS">
                <span class="productGOODS_txt">GOODS</span>
              </div>
            </a>
            </Col>
            <Col flex="5">
            </Col>
          </Row>
        </Row>
        <br />
        <GlobalFooter :links="links" :copyright="copyright" />
        <!-- 返回顶部按钮 -->
        <BackToTop></BackToTop>
      </div>
    </div>
    <!-- 侧边三按钮 -->
    <SideThreeNavBtn :btnimg="btnimgurl" :btnhref="btnurl" @MidClick="show_nav" @TopClick="change_infinite"></SideThreeNavBtn>
    <!-- 导航栏 -->
    <transition name="transition-drop">
      <Row class="nav" v-show="NavShow">
        <Col span="4">
          <a href="javascript:void(0);" class="nav_arrow" @click="close_nav">
            <img src="/src/assets/icons/方框反向双箭头-透明白色.png" />
          </a>
        </Col>
          <Col span="2"><a href="#top" class="nav_top"></a></Col>
          <Col span="3"><a :href= NavChangeHref[0] class="nav_story"></a></Col>
          <Col span="4"><a :href= NavChangeHref[1] class="nav_character"></a></Col>
          <Col span="4"><a :href= NavChangeHref[2] class="nav_cast"></a></Col>
          <Col span="4"><a href="#product" class="nav_product"></a></Col>
          <Col span="3">
        </Col>
      </Row>
    </transition>
    <!-- 时钟切换 -->
    <Row class="clock_change_box" v-if="ClockChangeDis">
      <Row class="clock_change">
        <ClockRand class="clock_click"></ClockRand>
        <TwinklingNoise class="twinkle_noise"></TwinklingNoise>
      </Row>
    </Row>
    <!-- 1080p video切换 -->
    <AnimeVideo1080pChange :VideoUrl=AnimeVideo1080pChange[0] v-if="ChangeDis[0]"></AnimeVideo1080pChange>
    <AnimeVideo1080pChange :VideoUrl=AnimeVideo1080pChange[1] v-if="ChangeDis[1]"></AnimeVideo1080pChange>
    <AnimeVideo1080pChange :VideoUrl=AnimeVideo1080pChange[2] v-if="ChangeDis[2]"></AnimeVideo1080pChange>
    <AnimeVideo1080pChange :VideoUrl=AnimeVideo1080pChange[3] v-if="ChangeDis[3]"></AnimeVideo1080pChange>
    <AnimeVideo1080pChange :VideoUrl=AnimeVideo1080pChange[4] v-if="ChangeDis[4]"></AnimeVideo1080pChange>
    <AnimeVideo1080pChange :VideoUrl=AnimeVideo1080pChange[5] v-if="ChangeDis[5]"></AnimeVideo1080pChange>
  </div>
</template>

<style scoped>
@import url("./Anime.css");
</style>

<script>
import ClockRand from "/src/components/globalReg/ClockRand.vue";
import AnimeVideo1080pChange from "/src/components/globalReg/AnimeVideo1080pChange.vue";
import TwinklingNoise from "/src/components/globalReg/TwinklingNoise.vue";
import TopImg from "/src/components/globalReg/TopImg.vue";
// import BackgroundLongImg from "/src/components/Anime_BackgroundLongImg/BackgroundLongImg.vue";
import BackToTop from "/src/components/globalReg/BackToTop.vue";
import SideThreeNavBtn from "/src/components/globalReg/SideThreeNavBtn.vue";
import AlphaTimeLine from "/src/components/Anime_AlphaTimeLine/AlphaTimeLine.vue";
import BetaTimeLine from "/src/components/Anime_BetaTimeLine/BetaTimeLine.vue";

export default {
  name: "Anime",

  components: {
    "ClockRand": ClockRand,
    "TwinklingNoise": TwinklingNoise,
    "AnimeVideo1080pChange":AnimeVideo1080pChange,
    // "BackgroundLongImg": BackgroundLongImg,
    "TopImg":TopImg,
    "BackToTop": BackToTop,
    "SideThreeNavBtn": SideThreeNavBtn,
    "AlphaTimeLine":AlphaTimeLine,
    "BetaTimeLine": BetaTimeLine,
},

  data() {
    return {
      //  作为单独组件引入，因此注释掉原变量iScol: "0"
      iScol: "0",//背景大图在页面滚动时向上的滚动距离

      theWholePage:15000,//整个html的高度
      thePageHeight:0,

      b_topimgurl:[
        "/src/assets/images/ttl_logo01_sp.svg",
        "/src/assets/images/bg_hero00.png",
      ],//顶部图片路径 beta线
      a_topimgurl:[
        "/src/assets/images/ttl_logo01_sp.svg",
        "/src/assets/images/a_top_img.png",
      ],//顶部图片路径 alpha线

      value: false, //布尔值 目前不清楚是在哪里用到
      hover: true, //将鼠标放在GridItem上是否有悬浮效果
      border: false, //GridItem是否有边框
      NavShow: false, //nav栏折叠动画效果判断条件

      Randnum:0,
      ChangeRandNum:6,//切换时间线所需的随机数   
      ChangeDisStatus: [0,0,0,0,0,0,1,0],//[video0,video1,v2,v3,v4,v5,alpha,beta]状态码，范围0~6，代表鼠标点击次数，到6之后就清零，表示该对象可再次出现
      ChangeDis:[0,0,0,0,0,0,1,0],//[video0,video1,v2,v3,v4,v5,alpha,beta]显示码，0表示不显示，1表示显示
      ClockChangeDis:0,//clock动画是否显示，0为隐藏，1为显示
      NavChangeHref:[ "#a_story", "#a_characters", "#a_cast/staff"],//Nav栏在不同时间线下的指向id

      //1080p视url
      AnimeVideo1080pChange:[
        "/src/assets/videos/Anime/Steins;Gate anime series OP;ED/1-石头门OP-1080P 高清-AVC.mp4",
        "/src/assets/videos/Anime/Steins;Gate anime series OP;ED/2-石头门ED-1080P 高清-AVC.mp4",
        "/src/assets/videos/Anime/Steins;Gate anime series OP;ED/3-石头门0 OP1-1080P 高清-AVC.mp4",
        "/src/assets/videos/Anime/Steins;Gate anime series OP;ED/4-石头门0 OP2-1080P 高清-AVC.mp4",
        "/src/assets/videos/Anime/Steins;Gate anime series OP;ED/5-石头门0 ED1-1080P 高清-AVC.mp4",
        "/src/assets/videos/Anime/Steins;Gate anime series OP;ED/6-石头门0 ED2-1080P 高清-AVC.mp4",
      ],
      //1080p视url

      //全局页脚
      links: [
        {
            key: '帮助',
            title: '帮助',
            href: 'javascript:void(0);',
            blankTarget: true
        },
        {
            key: 'github',
            icon: 'ios-infinite',
            href: 'javascript:void(0);',
            blankTarget: true
        },
        {
            key: '条款',
            title: '条款',
            href: 'javascript:void(0);',
            blankTarget: true
        }
      ],
      copyright: 'Copyright © 2022 iKenaka All Rights Reserved',
      //全局页脚


      //btn图片链接

      btnimgurl:[
        "/src/assets/icons/无穷-透明黑色.png",
        "/src/assets/icons/菜单-透明白色.png",
        "/src/assets/icons/双左-透明白色.png",
      ],
      //btn跳转链接
      btnurl:[
        "javascript:void(0);",
        "javascript:void(0);",
        "/home",
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);//监视页面滚动
    let container_el = document.getElementById("container")
    this.thePageHeight = document.documentElement.clientHeight;
    this.theWholePage = 1.83 * (container_el.clientHeight - this.thePageHeight) + container_el.clientHeight;
  },
  updated(){
    let container_el = document.getElementById("container")
    this.thePageHeight = document.documentElement.clientHeight;
    this.theWholePage = 1.83 * (container_el.clientHeight - this.thePageHeight) + container_el.clientHeight;
  },
  methods: {
    //监视网页滚动
    scrollToTop() {
      let scrollTop = Math.floor(
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop);
      this.iScol = - 1.8 * scrollTop ;
      // console.log(scrollTop);
    },
    //展开nav栏
    show_nav() {
      this.NavShow = true;
    },
    close_nav() {
      this.NavShow = false;
    },

    //切换alpha和beta线动画或者是视频，一共7个对象，分别是video0~5，alpha，beta线，
    //若用户点击超过6次，则此对象可进入下一次随机循环
    change_infinite() {
      //时钟动画先出现，然后1s之后消失
      this.ClockChangeDis = 1;
      setTimeout(() => {
        this.ClockChangeDis = 0;
      }, 1200);
      //在时钟动画出现过程中，生成一个随机数
      while(true){
        this.Randnum = this.getRndInteger(0, 7)
        if(this.ChangeDisStatus[this.Randnum] === 0){
          break;
        }
      }
      this.ChangeDis[this.Randnum] = 1;//显示某个对象
      if(this.Randnum === 6 || this.Randnum === 7){
        this.NavChangeHref = [ "#b_story", "#b_characters", "#b_cast/staff"];
      }
      this.ChangeDis[this.ChangeRandNum] = 0;//将上次显示的对象改为不显示
      for(let i=0; i<this.ChangeDisStatus.length; i++){
        if(this.ChangeDisStatus[i] === 6){
          this.ChangeDisStatus[i] = 0;
        }
        if(this.ChangeDisStatus[i] >= 1){
          this.ChangeDisStatus[i]++;
        }
      }//遍历每一个状态码，对于大于等于1的进行自加1，表示用户已点击次数，若用户点击超过6次，则此对象可进入下一次随机循环
      this.ChangeDisStatus[this.Randnum] = 1;//将这次显示的对象的显示状态改为1，表示点击了一次
      this.ChangeRandNum = this.Randnum;//记录此次对象的编号
      console.log(this.ChangeDisStatus);
      // 如果前一次是alpha线
      // if(this.ChangeRandNum === 1){
      //   // 向beta线和圣地巡礼动画切换
      //   this.ChangeRandNum = this.getRndInteger(2, 3);
      //   //切换到beta线
      //   if(this.ChangeRandNum = 2){
      //     //时钟动画出现，然后alpha线和时钟动画消失，beta线出现
      //     this.ClockChangeDis[0] = 1;
      //     setTimeout(() => {
      //       this.ClockChangeDis[0] = 0;
      //     }, 1000);
      //     this.ChangAlphaBetaNum = [0,1];
      //     this.NavChangeHref = [ "#b_story", "#b_characters", "#b_cast/staff"];
      //   }
      //   else{
      //     //否则圣地巡礼动画出现
      //     this.ClockChangeDis[1] = 1;
      //   }
      // }
      // // 如果前一次是beta线
      // else if(this.ChangeRandNum === 2){
      //   //等概率生成alpha线还是圣地巡礼动画
      //   let randnum = this.getRndInteger(1, 10);
      //   if(randnum <=5){
      //     // 生成alpha线，时钟动画出现，时钟动画和beta线消失
      //     this.ChangeRandNum = 1;
      //     this.ClockChangeDis[0] = 1;
      //     setTimeout(() => {
      //       this.ClockChangeDis[0] = 0;
      //     }, 1000);
      //     this.ChangAlphaBetaNum = [1,0];
      //     this.NavChangeHref = [ "#a_story", "#a_characters", "#a_cast/staff"];
      //   }
      //   else{
      //     //生成圣地巡礼视频
      //     this.ChangeRandNum = 3;
      //     this.ClockChangeDis[1] = 1;
      //   }
      // }
      // // 如果前一次是圣地巡礼动画
      // else{
      //   this.ClockChangeDis[1] = 0;//圣地巡礼视频消失
      //   //判断生成alpha线还是beta线
      //   this.ChangeRandNum = this.getRndInteger(1, 2);
      //   if(this.ChangeRandNum = 1){
      //     // 生成alpha线
      //     this.ClockChangeDis[0] = 1;
      //     setTimeout(() => {
      //       this.ClockChangeDis[0] = 0;
      //     }, 1000);
      //     this.ChangAlphaBetaNum = [1,0];
      //     this.NavChangeHref = [ "#a_story", "#a_characters", "#a_cast/staff"];
      //   }
      //   else{
      //     // 生成beta线
      //     this.ClockChangeDis[0] = 1;
      //     setTimeout(() => {
      //       this.ClockChangeDis[0] = 0;
      //     }, 1000);
      //     this.ChangAlphaBetaNum = [0,1];
      //     this.NavChangeHref = [ "#b_story", "#b_characters", "#b_cast/staff"];
      //   }
      // } 
    },
    //获取[min,max]间的随机数
    getRndInteger(min, max){
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
  },
};
</script>