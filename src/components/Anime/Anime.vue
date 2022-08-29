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
          <BetaTimeline v-if="true"></BetaTimeline>
          <!-- alpha时间线 -->
          <Row class="alpha_timeline" v-if="false">
            <!-- story部分 -->
            <Row class="b_story" id="b_story">
              <Row class="b_st_title">
                <Col span="8">
                </Col>
                <Col span="8">
                <Row class="b_t_img"></Row>
                </Col>
                <Col span="8">
                </Col>
              </Row>
              <Row class="b_st_body">
                <Row class="body_text"></Row>
                <Row class="body_img">
                  <Row class="body_slideimg">
                    <Col span="15" class="slideimg_left">
                    <div class="leftimg" :style="{ transform: `translateY(${LeftUp})` }">
                      <ul class="leftimg_moveup" id="LeftimgMoveup">
                        <li v-for="leftimg_moveup in leftimgs_moveup" :key="leftimg_moveup.id">
                          <img :src="leftimg_moveup.src">
                        </li>
                        <!-- v-for代替 -->
                        <!-- <li>
                          <img src="/src/assets/images/img_story01_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story02_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story03_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story04_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story05_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story06_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story07_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story08_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story09_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story10_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story11_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story12_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story13_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story14_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story15_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story16_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story17_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story18_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story19_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story20_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story21_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story22_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story23_01.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story24_01.png.png" />
                        </li> -->
                      </ul>
                    </div>
                    </Col>
                    <Col span="6" class="slideimg_middle">
                    <Row class="midimg" :style="{ transform: `translateY(${MidUp})` }">
                      <Row class="midimg_movedown" id="midimgMoveup">
                        <img src="/src/assets/images/img_story01_02.png.png" />
                        <img src="/src/assets/images/img_story02_02.png.png" />
                        <img src="/src/assets/images/img_story03_02.png.png" />
                        <img src="/src/assets/images/img_story04_02.png.png" />
                        <img src="/src/assets/images/img_story05_02.png.png" />
                        <img src="/src/assets/images/img_story06_02.png.png" />
                        <img src="/src/assets/images/img_story07_02.png.png" />
                        <img src="/src/assets/images/img_story08_02.png.png" />
                        <img src="/src/assets/images/img_story09_02.png.png" />
                        <img src="/src/assets/images/img_story10_02.png.png" />
                        <img src="/src/assets/images/img_story11_02.png.png" />
                        <img src="/src/assets/images/img_story12_02.png.png" />
                        <img src="/src/assets/images/img_story13_02.png.png" />
                        <img src="/src/assets/images/img_story14_02.png.png" />
                        <img src="/src/assets/images/img_story15_02.png.png" />
                        <img src="/src/assets/images/img_story16_02.png.png" />
                        <img src="/src/assets/images/img_story17_02.png.png" />
                        <img src="/src/assets/images/img_story18_02.png.png" />
                        <img src="/src/assets/images/img_story19_02.png.png" />
                        <img src="/src/assets/images/img_story20_02.png.png" />
                        <img src="/src/assets/images/img_story21_02.png.png" />
                        <img src="/src/assets/images/img_story22_02.png.png" />
                        <img src="/src/assets/images/img_story23_02.png.png" />
                        <img src="/src/assets/images/img_story24_02.png.png" />
                      </Row>
                    </Row>
                    </Col>
                    <Col span="3" class="slideimg_right">
                    <div class="rightimg" :style="{ transform: `translateY(${RightUp})` }">
                      <ul class="rightimg_moveup" id="rightimgMoveup">
                        <li v-for="rightimg_moveup in rightimgs_moveup" :key="rightimg_moveup.id">
                        <img :src="rightimg_moveup.src">
                        </li>
                        <!-- <li>
                          <img src="/src/assets/images/img_story01_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story02_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story03_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story04_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story05_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story06_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story07_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story08_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story09_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story10_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story11_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story12_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story13_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story14_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story15_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story16_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story17_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story18_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story19_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story20_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story21_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story22_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story23_03.png.png" />
                        </li>
                        <li>
                          <img src="/src/assets/images/img_story24_03.png.png" />
                        </li> -->
                      </ul>
                    </div>
                    </Col>
                  </Row>
                </Row>
                <Row class="b_st_footer">
                  <a class="num_nav">
                    <Grid :border="true" :col="14" padding="0" square @click="change_st($event)">
                      <GridItem id="navItem01" class="Item"></GridItem>
                      <GridItem id="navItem02" class="Item">#02</GridItem>
                      <GridItem id="navItem03" class="Item">#03</GridItem>
                      <GridItem id="navItem04" class="Item">#04</GridItem>
                      <GridItem id="navItem05" class="Item">#05</GridItem>
                      <GridItem id="navItem06" class="Item">#06</GridItem>
                      <GridItem id="navItem07" class="Item">#07</GridItem>
                      <GridItem id="navItem08" class="Item">#08</GridItem>
                      <GridItem id="navItem09" class="Item">#09</GridItem>
                      <GridItem id="navItem10" class="Item">#10</GridItem>
                      <GridItem id="navItem11" class="Item">#11</GridItem>
                      <GridItem id="navItem12" class="Item">#12</GridItem>
                      <GridItem id="navItem13" class="Item">#13</GridItem>
                      <GridItem id="navItem14" class="Item">#14</GridItem>
                      <GridItem id="navItem15" class="Item">#15</GridItem>
                      <GridItem id="navItem16" class="Item">#16</GridItem>
                      <GridItem id="navItem17" class="Item">#17</GridItem>
                      <GridItem id="navItem18" class="Item">#18</GridItem>
                      <GridItem id="navItem19" class="Item">#19</GridItem>
                      <GridItem id="navItem20" class="Item">#20</GridItem>
                      <GridItem id="navItem21" class="Item">#21</GridItem>
                      <GridItem id="navItem22" class="Item">#22</GridItem>
                      <GridItem id="navItem23" class="Item">#23</GridItem>
                      <GridItem id="navItem24" class="Item">#SP</GridItem>
                    </Grid>
                  </a>
                </Row>
              </Row>
            </Row>
            <!-- characters部分 -->
            <Row class="b_characters" id="b_characters">
              <Row class="b_charas_title">
                <Col span="8">
                </Col>
                <Col span="8">
                <Row class="b_c_img"></Row>
                </Col>
                <Col span="8">
                </Col>
              </Row>
              <Row class="b_charas_body">
                <Row class="charas_text"></Row>
                <Row class="charas_cut">
                  <Row class="charas_main">
                    <Row class="float_img_whole">
                      <Row class="float_top_img">
                        <Row class="float_chara1" v-if="chara_img[0]">
                          <div class="float_chara_1_1">
                            <img src="/src/assets/images/img_charamain01_1.png.png" />
                          </div>
                          <div class="float_chara_1_2">
                            <img src="/src/assets/images/img_charamain01_2.png.png" />
                          </div>
                          <div class="float_chara_1_3">
                            <img src="/src/assets/images/img_charamain01_3.png.png" />
                          </div>
                        </Row>
                        <Row class="float_chara2" v-if="chara_img[1]">
                          <div class="float_chara_2_1">
                            <img src="/src/assets/images/img_charamain02_1.png.png" />
                          </div>
                          <div class="float_chara_2_2">
                            <img src="/src/assets/images/img_charamain02_2.png.png" />
                          </div>
                          <div class="float_chara_2_3">
                            <img src="/src/assets/images/img_charamain02_3.png.png" />
                          </div>
                        </Row>
                        <Row class="float_chara3" v-if="chara_img[2]">
                          <div class="float_chara_3_1">
                            <img src="/src/assets/images/img_charamain03_1.png.png" />
                          </div>
                          <div class="float_chara_3_2">
                            <img src="/src/assets/images/img_charamain03_2.png.png" />
                          </div>
                          <div class="float_chara_3_3">
                            <img src="/src/assets/images/img_charamain03_3.png.png" />
                          </div>
                        </Row>
                        <Row class="float_chara4" v-if="chara_img[3]">
                          <div class="float_chara_4_1">
                            <img src="/src/assets/images/img_charamain04_1.png.png" />
                          </div>
                          <div class="float_chara_4_2">
                            <img src="/src/assets/images/img_charamain04_2.png.png" />
                          </div>
                          <div class="float_chara_4_3">
                            <img src="/src/assets/images/img_charamain04_3.png.png" />
                          </div>
                        </Row>
                        <Row class="float_chara5" v-if="chara_img[4]">
                          <div class="float_chara_5_1">
                            <img src="/src/assets/images/img_charamain05_1.png.png" />
                          </div>
                          <div class="float_chara_5_2">
                            <img src="/src/assets/images/img_charamain05_2.png.png" />
                          </div>
                          <div class="float_chara_5_3">
                            <img src="/src/assets/images/img_charamain05_3.png.png" />
                          </div>
                        </Row>
                        <Row class="float_chara6" v-if="chara_img[5]">
                          <div class="float_chara_6_1">
                            <img src="/src/assets/images/img_charamain06_1.png.png" />
                          </div>
                          <div class="float_chara_6_2">
                            <img src="/src/assets/images/img_charamain06_2.png.png" />
                          </div>
                          <div class="float_chara_6_3">
                            <img src="/src/assets/images/img_charamain06_3.png.png" />
                          </div>
                        </Row>
                        <Row class="float_chara7" v-if="chara_img[6]">
                          <div class="float_chara_7_1">
                            <img src="/src/assets/images/img_charamain07_1.png.png" />
                          </div>
                          <div class="float_chara_7_2">
                            <img src="/src/assets/images/img_charamain07_2.png.png" />
                          </div>
                          <div class="float_chara_7_3">
                            <img src="/src/assets/images/img_charamain07_3.png.png" />
                          </div>
                        </Row>
                        <Row class="float_chara8" v-if="chara_img[7]">
                          <div class="float_chara_8_1">
                            <img src="/src/assets/images/img_charamain08_1.png.png" />
                          </div>
                          <div class="float_chara_8_2">
                            <img src="/src/assets/images/img_charamain08_2.png.png" />
                          </div>
                          <div class="float_chara_8_3">
                            <img src="/src/assets/images/img_charamain08_3.png.png" />
                          </div>
                        </Row>
                        <Row class="float_chara9" v-if="chara_img[8]">
                          <div class="float_chara_9_1">
                            <img src="/src/assets/images/img_charamain09_1.png.png" />
                          </div>
                          <div class="float_chara_9_2">
                            <img src="/src/assets/images/img_charamain09_2.png.png" />
                          </div>
                          <div class="float_chara_9_3">
                            <img src="/src/assets/images/img_charamain09_3.png.png" />
                          </div>
                        </Row>
                        <Row class="float_chara10" v-if="chara_img[9]">
                          <div class="float_chara_10_1">
                            <img src="/src/assets/images/img_charamain10_1.png.png" />
                          </div>
                          <div class="float_chara_10_2">
                            <img src="/src/assets/images/img_charamain10_2.png.png" />
                          </div>
                          <div class="float_chara_10_3">
                            <img src="/src/assets/images/img_charamain10_3.png.png" />
                          </div>
                        </Row>
                        <Row class="float_chara11" v-if="chara_img[10]">
                          <div class="float_chara_11_1">
                            <img src="/src/assets/images/img_charamain11_1.png.png" />
                          </div>
                          <div class="float_chara_11_2">
                            <img src="/src/assets/images/img_charamain11_2.png.png" />
                          </div>
                          <div class="float_chara_11_3">
                            <img src="/src/assets/images/img_charamain11_3.png.png" />
                          </div>
                        </Row>
                        <Row class="float_chara12" v-if="chara_img[11]">
                          <div class="float_chara_12_1">
                            <img src="/src/assets/images/img_charamain12_1.png.png" />
                          </div>
                          <div class="float_chara_12_3">
                            <img src="/src/assets/images/img_charamain12_2.png.png" />
                          </div>
                        </Row>
                        <Row class="float_chara13" v-if="chara_img[12]">
                          <div class="float_chara_13_1">
                            <img src="/src/assets/images/img_charamain13_1.png.png" />
                          </div>
                          <div class="float_chara_13_2">
                            <img src="/src/assets/images/img_charamain13_2.png.png" />
                          </div>
                          <div class="float_chara_13_3">
                            <img src="/src/assets/images/img_charamain13_3.png.png" />
                          </div>
                        </Row>
                        <Row class="float_chara14" v-if="chara_img[13]">
                          <div class="float_chara_14_1">
                            <img src="/src/assets/images/img_charamain14_1.png.png" />
                          </div>
                          <div class="float_chara_14_2">
                            <img src="/src/assets/images/img_charamain14_2.png.png" />
                          </div>
                          <div class="float_chara_14_3">
                            <img src="/src/assets/images/img_charamain14_3.png.png" />
                          </div>
                        </Row>
                        <Row class="float_chara15" v-if="chara_img[14]">
                          <div class="float_chara_15_1">
                            <img src="/src/assets/images/img_charamain15_1.png.png" />
                          </div>
                          <div class="float_chara_15_2">
                            <img src="/src/assets/images/img_charamain15_2.png.png" />
                          </div>
                          <div class="float_chara_15_3">
                            <img src="/src/assets/images/img_charamain15_3.png.png" />
                          </div>
                        </Row>
                        <Row class="float_chara16" v-if="chara_img[15]">
                          <div class="float_chara_16_1">
                            <img src="/src/assets/images/img_charamain16_1.png.png" />
                          </div>
                          <div class="float_chara_16_2">
                            <img src="/src/assets/images/img_charamain16_2.png.png" />
                          </div>
                          <div class="float_chara_16_3">
                            <img src="/src/assets/images/img_charamain16_3.png.png" />
                          </div>
                        </Row>
                      </Row>
                      <Row class="float_bg_img">
                        <Row class="float_bg_img1">
                          <img src="/src/assets/images/bg_story01.png" />
                        </Row>
                        <Row class="float_bg_img2">
                          <img src="/src/assets/images/bg_story02.png" />
                        </Row>
                        <Row class="float_bg_img3">
                          <img src="/src/assets/images/bg_story03.png" />
                        </Row>
                      </Row>
                    </Row>
                    <Row class="slide_img_whole">
                      <Col span="18">
                      </Col>
                      <Col span="3" class="slide_img_col">
                      <div class="slide_img" :style="{ transform: `translateY(${SlideimgUp})` }">
                        <img src="/src/assets/images/img_charabg01.png.png" id="SlideImg01" />
                        <img src="/src/assets/images/img_charabg02.png.png" id="SlideImg02" />
                        <img src="/src/assets/images/img_charabg03.png.png" id="SlideImg03" />
                        <img src="/src/assets/images/img_charabg04.png.png" id="SlideImg04" />
                        <img src="/src/assets/images/img_charabg05.png.png" id="SlideImg05" />
                        <img src="/src/assets/images/img_charabg06.png.png" id="SlideImg06" />
                        <img src="/src/assets/images/img_charabg07.png.png" id="SlideImg07" />
                        <img src="/src/assets/images/img_charabg08.png.png" id="SlideImg08" />
                        <img src="/src/assets/images/img_charabg09.png.png" id="SlideImg09" />
                        <img src="/src/assets/images/img_charabg10.png.png" id="SlideImg10" />
                        <img src="/src/assets/images/img_charabg11.png.png" id="SlideImg11" />
                        <img src="/src/assets/images/img_charabg12.png.png" id="SlideImg12" />
                        <img src="/src/assets/images/img_charabg13.png.png" id="SlideImg13" />
                        <img src="/src/assets/images/img_charabg14.png.png" id="SlideImg14" />
                        <img src="/src/assets/images/img_charabg15.png.png" id="SlideImg15" />
                        <img src="/src/assets/images/img_charabg16.png.png" id="SlideImg16" />
                      </div>
                      </Col>
                      <Col span="3">
                      </Col>
                    </Row>
                  </Row>
                </Row>
                <Row class="charas_footer">
                  <Row class="charas_nav">
                    <Row class="char_row1">
                      <Col span="3" class="char_item01">
                      <a @click="change_chara($event)" id="CharItem1">
                        <img src="/src/assets/images/img_charaft01.png" />
                      </a>
                      </Col>
                      <Col span="3" class="char_item02">
                      <a @click="change_chara($event)" id="CharItem2">
                        <img src="/src/assets/images/img_charaft02.png" />
                      </a>
                      </Col>
                      <Col span="3" class="char_item03">
                      <a @click="change_chara($event)" id="CharItem3">
                        <img src="/src/assets/images/img_charaft03.png" />
                      </a>
                      </Col>
                      <Col span="3" class="char_item04">
                      <a @click="change_chara($event)" id="CharItem4">
                        <img src="/src/assets/images/img_charaft04.png" />
                      </a>
                      </Col>
                      <Col span="3" class="char_item05">
                      <a @click="change_chara($event)" id="CharItem5">
                        <img src="/src/assets/images/img_charaft05.png" />
                      </a>
                      </Col>
                      <Col span="3" class="char_item06">
                      <a @click="change_chara($event)" id="CharItem6">
                        <img src="/src/assets/images/img_charaft06.png" />
                      </a>
                      </Col>
                      <Col span="3" class="char_item07">
                      <a @click="change_chara($event)" id="CharItem7">
                        <img src="/src/assets/images/img_charaft07.png" />
                      </a>
                      </Col>
                      <Col span="3" class="char_item08">
                      <a @click="change_chara($event)" id="CharItem8">
                        <img src="/src/assets/images/img_charaft08.png" /> </a></Col>
                    </Row>
                    <Row class="char_row2">
                      <Col span="3" class="char_item09">
                      <a @click="change_chara($event)" id="CharItem9">
                        <img src="/src/assets/images/img_charaft09.png" />
                      </a>
                      </Col>
                      <Col span="3" class="char_item10">
                      <a @click="change_chara($event)" id="CharItem10">
                        <img src="/src/assets/images/img_charaft10.png" />
                      </a>
                      </Col>
                      <Col span="3" class="char_item11">
                      <a @click="change_chara($event)" id="CharItem11">
                        <img src="/src/assets/images/img_charaft11.png" />
                      </a>
                      </Col>
                      <Col span="3" class="char_item12">
                      <a @click="change_chara($event)" id="CharItem12">
                        <img src="/src/assets/images/img_charaft12.png" />
                      </a>
                      </Col>
                      <Col span="3" class="char_item13">
                      <a @click="change_chara($event)" id="CharItem13">
                        <img src="/src/assets/images/img_charaft13.png" />
                      </a>
                      </Col>
                      <Col span="3" class="char_item14">
                      <a @click="change_chara($event)" id="CharItem14">
                        <img src="/src/assets/images/img_charaft14.png" />
                      </a>
                      </Col>
                      <Col span="3" class="char_item15">
                      <a @click="change_chara($event)" id="CharItem15">
                        <img src="/src/assets/images/img_charaft15.png" />
                      </a>
                      </Col>
                      <Col span="3" class="char_item16">
                      <a @click="change_chara($event)" id="CharItem16">
                        <img src="/src/assets/images/img_charaft16.png" />
                      </a>
                      </Col>
                    </Row>
                  </Row>
                </Row>
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
import BackgroundLongImg from "/src/components/globalReg/BackgroundLongImg.vue";
import BackToTop from "/src/components/globalReg/BackToTop.vue";
import BetaTimeline from "/src/components/privateReg/BetaTimeline.vue";
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
