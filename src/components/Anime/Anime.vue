<template>
  <div class="container">
    <!-- 背景长图 -->
    <BackgroundLongImg></BackgroundLongImg>
    <div class="contents_is_show">
      <div class="contents">
        <!-- 最顶部图片 -->
        <!-- beta线TopImg -->
        <TopImg :TopImgUrl="b_topimgurl" RightImgWidth='104.96vh' v-if="ChangAlphaBetaNum[1]"></TopImg>
        <!-- alpha线TopImg -->
        <TopImg :TopImgUrl="a_topimgurl" RightImgWidth='80vh' BackgroundColor='#ffffff' v-if="ChangAlphaBetaNum[0]"></TopImg>
        <!-- 两条不同时间线的内容 -->
        <Row class="StoryCharacterCast">
          <!-- beta时间线 -->
          <BetaTimeline v-if="ChangAlphaBetaNum[1]"></BetaTimeline>
          <!-- alpha时间线 -->
          <AlphaTimeline v-if="ChangAlphaBetaNum[0]"></AlphaTimeline>
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
    <Row class="clock_change_box" v-show="ClockChangeDis[0]">
      <Row class="clock_change">
        <ClockRand class="clock_click"></ClockRand>
        <TwinklingNoise class="twinkle_noise"></TwinklingNoise>
      </Row>
    </Row>
    <!-- video切换 -->
    <Row class="video_change_box" v-show="ClockChangeDis[1]">
      <img src="/src/assets/images/video_bgimg.png" class="video_bgimg">
      <div class="video_bgimg_mask"></div>
      <Row class="video_change">
        <Col span="8" class="video_col"></Col>
        <Col span="8" class="video_col">
          <video class="video_player" controls autoplay muted loop>
            <source src="/src/assets/videos/steinsgate - Compressed.mp4" type="video/mp4" class="video_source">
          </video>
        </Col>
        <Col span="8" class="video_col"></Col>
      </Row>
    </Row>
  </div>
</template>

<style scoped>
@import url("./Anime.css");
</style>

<script>
import ClockRand from "/src/components/globalReg/ClockRand.vue";
import TwinklingNoise from "/src/components/globalReg/TwinklingNoise.vue";
import BackgroundLongImg from "/src/components/Anime_BackgroundLongImg/BackgroundLongImg.vue";
import BackToTop from "/src/components/globalReg/BackToTop.vue";
import BetaTimeline from "/src/components/Anime_BetaTimeLine/BetaTimeline.vue";
import SideThreeNavBtn from "/src/components/globalReg/SideThreeNavBtn.vue";
import TopImg from "/src/components/globalReg/TopImg.vue";
import AlphaTimeline from "/src/components/Anime_AlphaTimeLine/AlphaTimeline.vue";

export default {
  name: "Anime",

  components: {
    "ClockRand": ClockRand,
    "TwinklingNoise": TwinklingNoise,
    "BackgroundLongImg": BackgroundLongImg,
    "BackToTop": BackToTop,
    "BetaTimeline": BetaTimeline,
    "SideThreeNavBtn": SideThreeNavBtn,
    "TopImg":TopImg,
    "AlphaTimeline":AlphaTimeline,
},

  data() {
    return {
      //  作为单独组件引入，因此注释掉原变量iScol: "0"
      // iScol: "0",//背景大图在页面滚动时向上的滚动距离

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



      ChangeRandNum:1,//切换时间线所需的随机数
      ChangAlphaBetaNum:[1,0],//切换alpha、beta线
      ClockChangeDis: [0,0], //出现切换时间线的过场动画还是圣地巡礼视频
      NavChangeHref:[ "#a_story", "#a_characters", "#a_cast/staff"],//Nav栏在不同时间线下的指向id



      //全局页脚
      links: [
        {
            key: '帮助',
            title: '帮助',
            href: 'https://www.iviewui.com',
            blankTarget: true
        },
        {
            key: 'github',
            icon: 'logo-github',
            href: 'https://github.com/view-design/ViewUIPlus',
            blankTarget: true
        },
        {
            key: '条款',
            title: '条款',
            href: '',
            blankTarget: true
        }
      ],
      copyright: 'Copyright © 2022 View Design All Rights Reserved',
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
  },
  methods: {
    //展开nav栏
    show_nav() {
      this.NavShow = true;
    },
    close_nav() {
      this.NavShow = false;
    },

    //切换alpha和beta线动画或者是圣地巡礼视频
    change_infinite() {
      console.log(this.ChangeRandNum);
      // 如果前一次是alpha线
      if(this.ChangeRandNum === 1){
        // 向beta线和圣地巡礼动画切换
        this.ChangeRandNum = this.getRndInteger(2, 3);
        //切换到beta线
        if(this.ChangeRandNum = 2){
          //时钟动画出现，然后alpha线和时钟动画消失，beta线出现
          this.ClockChangeDis[0] = 1;
          setTimeout(() => {
            this.ClockChangeDis[0] = 0;
          }, 1000);
          this.ChangAlphaBetaNum = [0,1];
          this.NavChangeHref = [ "#b_story", "#b_characters", "#b_cast/staff"];
        }
        else{
          //否则圣地巡礼动画出现
          this.ClockChangeDis[1] = 1;
        }
      }
      // 如果前一次是beta线
      else if(this.ChangeRandNum === 2){
        //等概率生成alpha线还是圣地巡礼动画
        let randnum = this.getRndInteger(1, 10);
        if(randnum <=5){
          // 生成alpha线，时钟动画出现，时钟动画和beta线消失
          this.ChangeRandNum = 1;
          this.ClockChangeDis[0] = 1;
          setTimeout(() => {
            this.ClockChangeDis[0] = 0;
          }, 1000);
          this.ChangAlphaBetaNum = [1,0];
          this.NavChangeHref = [ "#a_story", "#a_characters", "#a_cast/staff"];
        }
        else{
          //生成圣地巡礼视频
          this.ChangeRandNum = 3;
          this.ClockChangeDis[1] = 1;
        }
      }
      // 如果前一次是圣地巡礼动画
      else{
        this.ClockChangeDis[1] = 0;//圣地巡礼视频消失
        //判断生成alpha线还是beta线
        this.ChangeRandNum = this.getRndInteger(1, 2);
        if(this.ChangeRandNum = 1){
          // 生成alpha线
          this.ClockChangeDis[0] = 1;
          setTimeout(() => {
            this.ClockChangeDis[0] = 0;
          }, 1000);
          this.ChangAlphaBetaNum = [1,0];
          this.NavChangeHref = [ "#a_story", "#a_characters", "#a_cast/staff"];
        }
        else{
          // 生成beta线
          this.ClockChangeDis[0] = 1;
          setTimeout(() => {
            this.ClockChangeDis[0] = 0;
          }, 1000);
          this.ChangAlphaBetaNum = [0,1];
          this.NavChangeHref = [ "#b_story", "#b_characters", "#b_cast/staff"];
        }
      } 
    },
    //获取[min,max]间的随机数
    getRndInteger(min, max){
      return Math.floor(Math.random() * (max - min) ) + min;
    }
  },
};
</script>
