<template>
  <div class="container">
    <!-- 背景长图 -->
    <!-- 作为单独组件引入，因此可将原代码注释 -->
    <BackgroundLongImg></BackgroundLongImg>
    <!-- <div class="bg_img" :style="{ top: iScol + 'px' }">
      <div class="bg_longimg"></div>
      <div class="bg_grayimg"></div>
      <div class="bg_pointimg"></div>
    </div> -->
    <div class="contents_is_show">
      <div class="contents">
        <!-- 最顶部图片 -->
        <div class="top_img" id="top">
          <div class="top_img_left"></div>
          <div class="top_img_right"></div>
        </div>
        <!-- 两条不同时间线的内容 -->
        <Row class="StoryCharacterCast">
          <!-- beta时间线 -->
          <BetaTimeline v-if="false"></BetaTimeline>
          <!-- alpha时间线 -->
          <Row class="alpha_timeline" v-if="true">
            <!-- story部分 -->
            <Row class="a_story" id="a_story">
              <Row class="a_st_title">
                <Col span="8">
                </Col>
                <Col span="8">
                <Row class="a_t_img"></Row>
                </Col>
                <Col span="8">
                </Col>
              </Row>
            </Row>
            <!-- characters部分 -->
            <Row class="a_characters" id="a_characters">
              <Row class="a_charas_title">
                <Col span="8">
                </Col>
                <Col span="8">
                <Row class="a_c_img"></Row>
                </Col>
                <Col span="8">
                </Col>
              </Row>
            </Row>
            <!-- cast/staff部分 -->
            <Row class="a_cast" id="a_cast/staff">
              <Row class="acast_title">
                <Col span="8">
                </Col>
                <Col span="8">
                <div class="title_cast"></div>
                </Col>
                <Col span="8">
                </Col>
              </Row>
              <Row class="acast_body">
                <Col span="4">
                </Col>
                <Col span="8" class="acastbody_row1">
                <Row class="acast_name11">
                  <span class="acastname11_left">岡部倫太郎</span>
                  <span class="acastname11_mid">|</span>
                  <span class="acastname11_right">宮野真守</span>
                </Row>
                <Row class="acast_name12">
                  <span class="acastname12_left">椎名まゆり</span>
                  <span class="acastname12_mid">|</span>
                  <span class="acastname12_right">花澤香菜</span>
                </Row>
                <Row class="acast_name13">
                  <span class="acastname13_left">橋田至</span>
                  <span class="acastname13_mid">|</span>
                  <span class="acastname13_right">関智一</span>
                </Row>
                <Row class="acast_name14">
                  <span class="acastname14_left">牧瀬紅莉栖</span>
                  <span class="acastname14_mid">|</span>
                  <span class="acastname14_right">今井麻美</span>
                </Row>
                <Row class="acast_name15">
                  <span class="acastname15_left">桐生萌郁</span>
                  <span class="acastname15_mid">|</span>
                  <span class="acastname15_right">後藤沙緒里</span>
                </Row>
                <!-- 预留空位 -->
                <!-- <Row class="acast_name16">
                  <span class="acastname16_left">漆原るか</span>
                  <span class="acastname16_mid">|</span>
                  <span class="acastname16_right">小林ゆう</span>
                </Row> -->
                </Col>
                <Col span="8" class="acastbody_row1">
                <Row class="acast_name21">
                  <span class="acastname21_left">阿万音鈴羽</span>
                  <span class="acastname21_mid">|</span>
                  <span class="acastname21_right">田村ゆかり</span>
                </Row>
                <Row class="acast_name22">
                  <span class="acastname22_left">フェイリス・ニャンニャン</span>
                  <span class="acastname22_mid">|</span>
                  <span class="acastname22_right">桃井はるこ</span>
                </Row>
                <Row class="acast_name23">
                  <span class="acastname23_left">天王寺裕吾</span>
                  <span class="acastname23_mid">|</span>
                  <span class="acastname23_right">寺杣昌纪</span>
                </Row>
                <Row class="acast_name24">
                  <span class="acastname24_left">天王寺綯</span>
                  <span class="acastname24_mid">|</span>
                  <span class="acastname24_right">山本彩乃</span>
                </Row>
                <Row class="acast_name25">
                  <span class="acastname25_left">漆原るか</span>
                  <span class="acastname25_mid">|</span>
                  <span class="acastname25_right">小林ゆう</span>
                </Row>
                <!-- 预留空位 -->
                <!-- <Row class="acast_name26">
                  <span class="acastname26_left">来嶋かえで</span>
                  <span class="acastname26_mid">|</span>
                  <span class="acastname26_right">木野日菜</span>
                </Row> -->
                </Col>
                <Col span="4">
                </Col>
              </Row>
            </Row>
            <Row class="a_staff">
              <Row class="astaff_title">
                <Col span="8">
                </Col>
                <Col span="8">
                <div class="title_staff"></div>
                </Col>
                <Col span="8">
                </Col>
              </Row>
              <Row class="astaff_body">
                <Col span="4">
                </Col>
                <Col span="8" class="astaffbody_row1">
                <Row class="astaff_name11">
                  <span class="astaffname11_left">原作</span>
                  <span class="astaffname11_mid">|</span>
                  <span class="astaffname11_right">志倉千代丸/Nitroplus.</span>
                </Row>
                <Row class="astaff_name12">
                  <span class="astaffname12_left">監督</span>
                  <span class="astaffname12_mid">|</span>
                  <span class="astaffname12_right">佐藤卓哉、滨崎博嗣</span>
                </Row>
                <Row class="astaff_name13">
                  <span class="astaffname13_left">シリーズ構成</span>
                  <span class="astaffname13_mid">|</span>
                  <span class="astaffname13_right">花田十輝</span>
                </Row>
                <Row class="astaff_name14">
                  <span class="astaffname14_left">キャラクター原案</span>
                  <span class="astaffname14_mid">|</span>
                  <span class="astaffname14_right">huke</span>
                </Row>
                <Row class="astaff_name15">
                  <span class="astaffname15_left">未来ガジェット原案</span>
                  <span class="astaffname15_mid">|</span>
                  <span class="astaffname15_right">SH@RP</span>
                </Row>
                <Row class="astaff_name16">
                  <span class="astaffname16_left">キャラクターデザイン</span>
                  <span class="astaffname16_mid">|</span>
                  <span class="astaffname16_right">坂井久太</span>
                </Row>
                <Row class="astaff_name17">
                  <span class="astaffname17_left">プロップデザイン</span>
                  <span class="astaffname17_mid">|</span>
                  <span class="astaffname17_right">中村和久<br />コレサワシゲユキ</span>
                </Row>
                <Row class="astaff_name18">
                  <span class="astaffname18_left">美術設定</span>
                  <span class="astaffname18_mid">|</span>
                  <span class="astaffname18_right">金平和茂</span>
                </Row>
                <Row class="astaff_name19">
                  <span class="astaffname19_left">色彩設計</span>
                  <span class="astaffname19_mid">|</span>
                  <span class="astaffname19_right">佐藤美由紀</span>
                </Row>
                <!-- 保留空位 -->
                <!-- <Row class="astaff_name110">
                  <span class="astaffname110_left">色彩設計</span>
                  <span class="astaffname110_mid">|</span>
                  <span class="astaffname110_right">佐藤美由紀</span>
                </Row> -->
                <Row class="astaff_name111">
                  <span class="astaffname111_left">オープニング主題歌</span>
                  <span class="astaffname111_mid">|</span>
                  <span class="astaffname111_right">「Hacking to the Gate」<br />&nbsp;歌：いとうかなこ</span>
                </Row>
                </Col>
                <Col span="8" class="astaffbody_row2">
                <Row class="astaff_name21">
                  <span class="astaffname21_left">特効効果</span>
                  <span class="astaffname21_mid">|</span>
                  <span class="astaffname21_right">垣田由紀子</span>
                </Row>
                <Row class="astaff_name22">
                  <span class="astaffname22_left">撮影監督</span>
                  <span class="astaffname22_mid">|</span>
                  <span class="astaffname22_right">中村圭介</span>
                </Row>
                <Row class="astaff_name23">
                  <span class="astaffname23_left">美術監督</span>
                  <span class="astaffname23_mid">|</span>
                  <span class="astaffname23_right">衛藤功二</span>
                </Row>
                <Row class="astaff_name24">
                  <span class="astaffname24_left">モデリング</span>
                  <span class="astaffname24_mid">|</span>
                  <span class="astaffname24_right">相馬 洋</span>
                </Row>
                <Row class="astaff_name25">
                  <span class="astaffname25_left">編集</span>
                  <span class="astaffname25_mid">|</span>
                  <span class="astaffname25_right">後藤正浩</span>
                </Row>
                <Row class="astaff_name26">
                  <span class="astaffname26_left">音響監督</span>
                  <span class="astaffname26_mid">|</span>
                  <span class="astaffname26_right">藤山房伸</span>
                </Row>
                <Row class="astaff_name27">
                  <span class="astaffname27_left">音楽</span>
                  <span class="astaffname27_mid">|</span>
                  <span class="astaffname27_right">阿保 剛、村上 純</span>
                </Row>
                <Row class="astaff_name28">
                  <span class="astaffname28_left">アニメーション制作</span>
                  <span class="astaffname28_mid">|</span>
                  <span class="astaffname28_right">WHITE FOX</span>
                </Row>
                <Row class="astaff_name29">
                  <span class="astaffname29_left">製作</span>
                  <span class="astaffname29_mid">|</span>
                  <span class="astaffname29_right">未来ガジェット研究所</span>
                </Row>
                <!-- 保留空位 -->
                <!-- <Row class="astaff_name210">
                  <span class="astaffname210_left">アニメーション制作</span>
                  <span class="astaffname210_mid">|</span>
                  <span class="astaffname210_right">WHITE FOX</span>
                </Row> -->
                <Row class="astaff_name211">
                  <span class="astaffname211_left">エンディング主題歌</span>
                  <span class="astaffname211_mid">|</span>
                  <span class="astaffname211_right">「刻司ル十二ノ盟约」<br />&nbsp;歌:Zwei</span>
                </Row>
                </Col>
                <Col span="4">
                </Col>
              </Row>
            </Row>
          </Row>
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
    <SideThreeNavBtn :btnimg="btnimgurl" :btnhref="btnurl" @MidClick="show_nav" @TopClick="change_line"></SideThreeNavBtn>
    <!-- 导航栏 -->
    <transition name="transition-drop">
      <Row class="nav" v-show="NavShow">
        <Col span="4">
        <a href="javascript:void(0);" class="nav_arrow" @click="close_nav">
          <img src="/src/assets/icons/方框反向双箭头-透明白色.png" />
        </a>
        </Col>
        <Col span="2"><a href="#top" class="nav_top"></a></Col>
        <Col span="3"><a href="#b_story" class="nav_story"></a></Col>
        <Col span="4"><a href="#b_characters" class="nav_character"></a></Col>
        <Col span="4"><a href="#b_cast/staff" class="nav_cast"></a></Col>
        <Col span="4"><a href="#product" class="nav_product"></a></Col>
        <Col span="3">
        </Col>
      </Row>
    </transition>
    <!-- 时钟切换 -->
    <Row class="clock_change_box" v-show="ClockChangeDis">
      <Row class="clock_change">
        <ClockRand class="clock_click"></ClockRand>
        <TwinklingNoise class="twinkle_noise"></TwinklingNoise>
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

export default {
  name: "Anime",

  components: {
    "ClockRand": ClockRand,
    "TwinklingNoise": TwinklingNoise,
    "BackgroundLongImg": BackgroundLongImg,
    "BackToTop": BackToTop,
    "BetaTimeline":BetaTimeline,
    'SideThreeNavBtn':SideThreeNavBtn,
},

  data() {
    return {
      //  作为单独组件引入，因此注释掉原变量iScol: "0"
      // iScol: "0",//背景大图在页面滚动时向上的滚动距离
      value: false, //布尔值 目前不清楚是在哪里用到
      hover: true, //将鼠标放在GridItem上是否有悬浮效果
      border: false, //GridItem是否有边框
      NavShow: false, //nav栏折叠动画效果判断条件
      ClockChangeDis: false, //切换时间线的过场动画
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
      btnimgurl:[
        "/src/assets/icons/无穷-透明黑色.png",
        "/src/assets/icons/菜单-透明白色.png",
        "/src/assets/icons/双左-透明白色.png",
      ],
      btnurl:[
        "javascript:void(0);",
        "javascript:void(0);",
        "/home",
      ],
    };
  },
  mounted() {
    // 因作bg_img作为单独组件引入，因此注释掉原函数
    // window.addEventListener("scroll", this.scrollToTop);//监视页面滚动
  },
  methods: {
    // 因作bg_img作为单独组件引入，因此注释掉原函数
    //监视网页滚动
    // scrollToTop() {
    //   let scrollTop =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop;
    //   console.log(0.5*document.body.clientHeight);
    //   console.log(scrollTop);
    //   this.iScol = -1.8 * scrollTop;
    // },

  

    //展开nav栏
    show_nav() {
      this.NavShow = true;
    },
    close_nav() {
      this.NavShow = false;
    },

    //切换alpha和beta线动画
    change_line() {
      this.ClockChangeDis = true;
      // this.$refs.ClockRand.getRandomTime();
      setTimeout(() => {
        this.ClockChangeDis = false;
      }, 1000);
    },
  },
};
</script>
