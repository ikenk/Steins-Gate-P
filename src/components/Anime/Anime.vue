<template>
  <div class="container">
    <div class="bg_img" :style="{ top: iScol + 'px' }">
      <div class="bg_longimg"></div>
      <div class="bg_grayimg"></div>
      <div class="bg_pointimg"></div>
    </div>
    <div class="contents_is_show">
      <div class="contents">
        <div class="top_img">
          <div class="top_img_left"></div>
          <div class="top_img_right"></div>
        </div>
        <Row class="StoryCharacterCast">
            <Row class="beta_timeline">
                <Row class="b_story">
                    <Row class="b_st_title">
                        <Col span="8" ></Col>
                        <Col span="8" >
                            <Row class="b_t_img"></Row>
                        </Col>
                        <Col span="8" ></Col>
                    </Row>
                    <Row class="b_st_body">
                        <Row class="body_text"></Row>
                        <Row class="body_img">
                            <Row class="body_slideimg">                                                           
                                <Col span="15" class="slideimg_left" >
                                  <div class="leftimg" :style="{transform: `translateY(${LeftUp})`}">
                                      <ul class="leftimg_moveup" id="LeftimgMoveup" >
                                        <li><img src="/src/assets/images/img_story01_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story02_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story03_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story04_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story05_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story06_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story07_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story08_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story09_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story10_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story11_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story12_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story13_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story14_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story15_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story16_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story17_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story18_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story19_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story20_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story21_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story22_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story23_01.png.png"></li>
                                        <li><img src="/src/assets/images/img_story24_01.png.png"></li>
                                      </ul>
                                  </div>
                                </Col>
                                <Col span="6" class="slideimg_middle">
                                    <Row class="midimg" :style="{transform:`translateY(${MidUp})`}">
                                        <Row class="midimg_movedown" id="midimgMoveup" >
                                        <img src="/src/assets/images/img_story01_02.png.png">
                                        <img src="/src/assets/images/img_story02_02.png.png">
                                        <img src="/src/assets/images/img_story03_02.png.png">
                                        <img src="/src/assets/images/img_story04_02.png.png">
                                        <img src="/src/assets/images/img_story05_02.png.png">
                                        <img src="/src/assets/images/img_story06_02.png.png">
                                        <img src="/src/assets/images/img_story07_02.png.png">
                                        <img src="/src/assets/images/img_story08_02.png.png">
                                        <img src="/src/assets/images/img_story09_02.png.png">
                                        <img src="/src/assets/images/img_story10_02.png.png">
                                        <img src="/src/assets/images/img_story11_02.png.png">
                                        <img src="/src/assets/images/img_story12_02.png.png">
                                        <img src="/src/assets/images/img_story13_02.png.png">
                                        <img src="/src/assets/images/img_story14_02.png.png">
                                        <img src="/src/assets/images/img_story15_02.png.png">
                                        <img src="/src/assets/images/img_story16_02.png.png">
                                        <img src="/src/assets/images/img_story17_02.png.png">
                                        <img src="/src/assets/images/img_story18_02.png.png">
                                        <img src="/src/assets/images/img_story19_02.png.png">
                                        <img src="/src/assets/images/img_story20_02.png.png">
                                        <img src="/src/assets/images/img_story21_02.png.png">
                                        <img src="/src/assets/images/img_story22_02.png.png">
                                        <img src="/src/assets/images/img_story23_02.png.png">
                                        <img src="/src/assets/images/img_story24_02.png.png">
                                            <!-- <div><img src="/src/assets/images/img_story24_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story23_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story22_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story21_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story20_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story19_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story18_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story17_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story16_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story15_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story14_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story13_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story12_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story11_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story10_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story09_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story08_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story07_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story06_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story05_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story04_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story03_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story02_02.png.png"></div>
                                            <div><img src="/src/assets/images/img_story01_02.png.png"></div> -->
                                        </Row>
                                    </Row>
                                </Col>
                                <Col span="3" class="slideimg_right">
                                    <div class="rightimg" :style="{transform:`translateY(${RightUp})`}">
                                        <ul class="rightimg_moveup" id="rightimgMoveup">
                                            <li><img src="/src/assets/images/img_story01_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story02_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story03_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story04_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story05_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story06_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story07_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story08_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story09_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story10_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story11_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story12_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story13_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story14_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story15_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story16_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story17_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story18_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story19_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story20_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story21_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story22_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story23_03.png.png"></li>
                                            <li><img src="/src/assets/images/img_story24_03.png.png"></li>
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
                <Row class="b_characters">
                    <Row class="b_charas_title">
                        <Col span="8" ></Col>
                        <Col span="8" >
                            <Row class="b_c_img"></Row>
                        </Col>
                        <Col span="8" ></Col>
                    </Row>
                    <Row class="b_charas_body">
                      <Row class="charas_text"></Row>
                      <Row class="charas_cut">
                        <Row class="charas_main">
                          <Row class="float_img_whole">
                            <Row class="float_top_img">
                              <Row class="float_chara1">
                                <div class="float_chara_1_1">
                                  <img src="/src/assets/images/img_charamain01_1.png.png">
                                </div>
                                <div class="float_chara_1_2">
                                  <img src="/src/assets/images/img_charamain01_2.png.png">
                                </div>
                                <div class="float_chara_1_3">
                                  <img src="/src/assets/images/img_charamain01_3.png.png">
                                </div>
                              </Row>
                              <!-- <Row class="float_chara2">
                                <div class="float_chara_2_1">
                                <img src="/src/assets/images/img_charamain02_1.png.png">
                                </div>
                                <div class="float_chara_2_2">
                                <img src="/src/assets/images/img_charamain02_2.png.png">
                                </div>
                                <div class="float_chara_2_3">
                                <img src="/src/assets/images/img_charamain02_3.png.png">
                                </div>
                              </Row>
                              <Row class="float_chara3">
                                <div class="float_chara_3_1">
                                <img src="/src/assets/images/img_charamain03_1.png.png">
                                </div>
                                <div class="float_chara_3_2">
                                <img src="/src/assets/images/img_charamain03_2.png.png">
                                </div>
                                <div class="float_chara_3_3">
                                <img src="/src/assets/images/img_charamain03_3.png.png">
                                </div>
                              </Row>
                              <Row class="float_chara4">
                                <div class="float_chara_4_1">
                                <img src="/src/assets/images/img_charamain04_1.png.png">
                                </div>
                                <div class="float_chara_4_2">
                                <img src="/src/assets/images/img_charamain04_2.png.png">
                                </div>
                                <div class="float_chara_4_3">
                                <img src="/src/assets/images/img_charamain04_3.png.png">
                                </div>
                              </Row>
                              <Row class="float_chara5">
                                <div class="float_chara_5_1">
                                <img src="/src/assets/images/img_charamain05_1.png.png">
                                </div>
                                <div class="float_chara_5_2">
                                <img src="/src/assets/images/img_charamain05_2.png.png">
                                </div>
                                <div class="float_chara_5_3">
                                <img src="/src/assets/images/img_charamain05_3.png.png">
                                </div>
                              </Row>
                              <Row class="float_chara6">
                                <div class="float_chara_6_1">
                                <img src="/src/assets/images/img_charamain06_1.png.png">
                                </div>
                                <div class="float_chara_6_2">
                                <img src="/src/assets/images/img_charamain06_2.png.png">
                                </div>
                                <div class="float_chara_6_3">
                                <img src="/src/assets/images/img_charamain06_3.png.png">
                                </div>
                              </Row>
                              <Row class="float_chara7">
                                <div class="float_chara_7_1">
                                <img src="/src/assets/images/img_charamain07_1.png.png">
                                </div>
                                <div class="float_chara_7_2">
                                <img src="/src/assets/images/img_charamain07_2.png.png">
                                </div>
                                <div class="float_chara_7_3">
                                <img src="/src/assets/images/img_charamain07_3.png.png">
                                </div>
                              </Row>
                              <Row class="float_chara8">
                                <div class="float_chara_8_1">
                                <img src="/src/assets/images/img_charamain08_1.png.png">
                                </div>
                                <div class="float_chara_8_2">
                                <img src="/src/assets/images/img_charamain08_2.png.png">
                                </div>
                                <div class="float_chara_8_3">
                                <img src="/src/assets/images/img_charamain08_3.png.png">
                                </div>
                              </Row>
                              <Row class="float_chara9">
                                <div class="float_chara_9_1">
                                <img src="/src/assets/images/img_charamain09_1.png.png">
                                </div>
                                <div class="float_chara_9_2">
                                <img src="/src/assets/images/img_charamain09_2.png.png">
                                </div>
                                <div class="float_chara_9_3">
                                <img src="/src/assets/images/img_charamain09_3.png.png">
                                </div>
                              </Row>
                              <Row class="float_chara10">
                                <div class="float_chara_10_1">
                                <img src="/src/assets/images/img_charamain10_1.png.png">
                                </div>
                                <div class="float_chara_10_2">
                                <img src="/src/assets/images/img_charamain10_2.png.png">
                                </div>
                                <div class="float_chara_10_3">
                                <img src="/src/assets/images/img_charamain10_3.png.png">
                                </div>
                              </Row>
                              <Row class="float_chara11">
                                <div class="float_chara_11_1">
                                <img src="/src/assets/images/img_charamain11_1.png.png">
                                </div>
                                <div class="float_chara_11_2">
                                <img src="/src/assets/images/img_charamain11_2.png.png">
                                </div>
                                <div class="float_chara_11_3">
                                <img src="/src/assets/images/img_charamain11_3.png.png">
                                </div>
                              </Row>
                              <Row class="float_chara12">
                                <div class="float_chara_12_1">
                                <img src="/src/assets/images/img_charamain12_1.png.png">
                                </div>
                                <div class="float_chara_12_2">
                                <img src="/src/assets/images/img_charamain12_2.png.png">
                                </div>
                              </Row>
                              <Row class="float_chara13">
                                <div class="float_chara_13_1">
                                <img src="/src/assets/images/img_charamain13_1.png.png">
                                </div>
                                <div class="float_chara_13_2">
                                <img src="/src/assets/images/img_charamain13_2.png.png">
                                </div>
                                <div class="float_chara_13_3">
                                <img src="/src/assets/images/img_charamain13_3.png.png">
                                </div>
                              </Row>
                              <Row class="float_chara14">
                                <div class="float_chara_14_1">
                                <img src="/src/assets/images/img_charamain14_1.png.png">
                                </div>
                                <div class="float_chara_14_2">
                                <img src="/src/assets/images/img_charamain14_2.png.png">
                                </div>
                                <div class="float_chara_14_3">
                                <img src="/src/assets/images/img_charamain14_3.png.png">
                                </div>
                              </Row>
                              <Row class="float_chara15">
                                <div class="float_chara_15_1">
                                <img src="/src/assets/images/img_charamain15_1.png.png">
                                </div>
                                <div class="float_chara_15_2">
                                <img src="/src/assets/images/img_charamain15_2.png.png">
                                </div>
                                <div class="float_chara_15_3">
                                <img src="/src/assets/images/img_charamain15_3.png.png">
                                </div>
                              </Row>
                              <Row class="float_chara16">
                                <div class="float_chara_16_1">
                                <img src="/src/assets/images/img_charamain16_1.png.png">
                                </div>
                                <div class="float_chara_16_2">
                                <img src="/src/assets/images/img_charamain16_2.png.png">
                                </div>
                                <div class="float_chara_16_3">
                                <img src="/src/assets/images/img_charamain16_3.png.png">
                                </div>
                              </Row> -->
                            </Row>
                            <Row class="float_bg_img">
                              <Row class="float_bg_img1">
                                <img src="/src/assets/images/bg_story01.png">
                              </Row>
                              <Row class="float_bg_img2">
                                <img src="/src/assets/images/bg_story02.png">
                              </Row>
                              <Row class="float_bg_img3">
                                <img src="/src/assets/images/bg_story03.png">
                              </Row>
                            </Row>
                          </Row>
                          <Row class="slide_img_whole">
                            <Col span="18"></Col>
                            <Col span="3" class="slide_img_col" >
                              <div class="slide_img" :style="{transform: `translateY(${SlideimgUp})`}">
                                <img src="/src/assets/images/img_charabg01.png.png" id="SlideImg01">
                                <img src="/src/assets/images/img_charabg02.png.png" id="SlideImg02">
                                <img src="/src/assets/images/img_charabg03.png.png" id="SlideImg03">
                                <img src="/src/assets/images/img_charabg04.png.png" id="SlideImg04">
                                <img src="/src/assets/images/img_charabg05.png.png" id="SlideImg05">
                                <img src="/src/assets/images/img_charabg06.png.png" id="SlideImg06">
                                <img src="/src/assets/images/img_charabg07.png.png" id="SlideImg07">
                                <img src="/src/assets/images/img_charabg08.png.png" id="SlideImg08">
                                <img src="/src/assets/images/img_charabg09.png.png" id="SlideImg09">
                                <img src="/src/assets/images/img_charabg10.png.png" id="SlideImg10">
                                <img src="/src/assets/images/img_charabg11.png.png" id="SlideImg11">
                                <img src="/src/assets/images/img_charabg12.png.png" id="SlideImg12">
                                <img src="/src/assets/images/img_charabg13.png.png" id="SlideImg13">
                                <img src="/src/assets/images/img_charabg14.png.png" id="SlideImg14">
                                <img src="/src/assets/images/img_charabg15.png.png" id="SlideImg15">
                                <img src="/src/assets/images/img_charabg16.png.png" id="SlideImg16">
                              </div>
                            </Col>
                            <Col span="3"></Col>
                        </Row>
                        </Row>
                      </Row>
                      <Row class="charas_footer">
                        <Row class="charas_nav" > 
                          <Row class="char_row1" >
                            <Col span="3" class="char_item01" @click="change_chara($event)">
                              <a><img src='/src/assets/images/img_charaft01.png' id="CharItem1"></a>
                            </Col>
                            <Col span="3" class="char_item02" @click="change_chara($event)">
                              <a><img src='/src/assets/images/img_charaft02.png' id="CharItem2"></a>
                            </Col>
                            <Col span="3" class="char_item03" @click="change_chara($event)">
                              <a><img src='/src/assets/images/img_charaft03.png' id="CharItem3"></a>
                            </Col>
                            <Col span="3" class="char_item04" @click="change_chara($event)">
                              <a><img src='/src/assets/images/img_charaft04.png' id="CharItem4"></a>
                            </Col>
                            <Col span="3" class="char_item05" @click="change_chara($event)">
                              <a><img src='/src/assets/images/img_charaft05.png' id="CharItem5"></a>
                            </Col>
                            <Col span="3" class="char_item06" @click="change_chara($event)">
                              <a><img src='/src/assets/images/img_charaft06.png' id="CharItem6"></a>
                            </Col>
                            <Col span="3" class="char_item07" @click="change_chara($event)">
                              <a><img src='/src/assets/images/img_charaft07.png' id="CharItem7"></a>
                            </Col>
                            <Col span="3" class="char_item08" @click="change_chara($event)">
                              <a><img src='/src/assets/images/img_charaft08.png' id="CharItem8"></a></Col>
                          </Row>
                          <Row class="char_row2">
                            <Col span="3" class="char_item09" @click="change_chara($event)">
                              <a><img src='/src/assets/images/img_charaft09.png' id="CharItem9"></a>
                            </Col>
                            <Col span="3" class="char_item10" @click="change_chara($event)">
                              <a><img src='/src/assets/images/img_charaft10.png' id="CharItem10"></a>
                            </Col>
                            <Col span="3" class="char_item11" @click="change_chara($event)">
                              <a><img src='/src/assets/images/img_charaft11.png' id="CharItem11"></a>
                            </Col>
                            <Col span="3" class="char_item12" @click="change_chara($event)">
                              <a><img src='/src/assets/images/img_charaft12.png' id="CharItem12"></a>
                            </Col>
                            <Col span="3" class="char_item13" @click="change_chara($event)">
                              <a><img src='/src/assets/images/img_charaft13.png' id="CharItem13"></a>
                            </Col>
                            <Col span="3" class="char_item14" @click="change_chara($event)">
                              <a><img src='/src/assets/images/img_charaft14.png' id="CharItem14"></a>
                            </Col>
                            <Col span="3" class="char_item15" @click="change_chara($event)">
                              <a><img src='/src/assets/images/img_charaft15.png' id="CharItem15"></a>
                            </Col>
                            <Col span="3" class="char_item16" @click="change_chara($event)">
                              <a><img src='/src/assets/images/img_charaft16.png' id="CharItem16"></a>
                            </Col>
                          </Row>
                        </Row>
                      </Row>
                    </Row>
                </Row>
                <Row class="b_cast"></Row>
            </Row>
            <Row class="alpha_timeline">
                <Row class="a_story">
                    <Row class="a_st_title"></Row>
                    <Row class="a_st_body"></Row>
                    <Row class="a_st_footer"></Row>
                </Row>
                <Row class="a_characters"></Row>
                <Row class="a_footer"></Row>
            </Row>
        </Row>
        <br />
        <Row class="product"></Row>
        <br />
        <Row class="back_to_top">    
          <BackTop :height="7000" class="btt_body">
            <div class="btt_img"></div>
          </BackTop>
        </Row>
      </div>
    </div>
    <Row class="navbtn_is_show">
      <Row class="three_btn">
          <Grid :border="false" :hover="hover" :col="1" square padding="0">
              <a href="javascript:void(0);"><GridItem class="top_btn"></GridItem></a>
              <a href="javascript:void(0);"><GridItem class="mid_btn"></GridItem></a>
              <a href="/home"><GridItem class="bottom_btn"></GridItem></a>
          </Grid>
      </Row>
    </Row>
    <Row class="nav">
      <Col span="4"></Col>
      <Col span="2" ><a href="#" class="nav_top"></a></Col>
      <Col span="3"><a href="#" class="nav_story"></a></Col>
      <Col span="4"><a href="#" class="nav_character"></a></Col>
      <Col span="3"><a href="#" class="nav_cast"></a></Col>
      <Col span="4"><a href="#" class="nav_product"></a></Col>
      <Col span="4"></Col>
    </Row>
  </div>
</template>

<style scoped>
@import url("./Anime.css");
</style>

<script>
export default {
  name: "Anime",
  data() {
    return {
      iScol: "0",//背景大图在页面滚动时向上的滚动距离
      value: false, //布尔值 目前不清楚是在哪里用到
      hover: true,//将鼠标放在GridItem上是否有悬浮效果
      border: false,//GridItem是否有边框
      number_move:0,//change_st(e)中使用到的移动几个图片单位
      LeftUp:'0px',//change_st(e)中使用到的左侧图片移动距离
      MidUp:'0px',//change_st(e)中使用到的中间图片移动距离
      RightUp:'0px',//change_st(e)中使用到的右侧图片移动距离
      SlideimgUp:'0px',//character部分角色滑块滑动距离
      chara_num:0,//change_chara(e)中使用到的移动图片单位
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

    //点击集数按钮切换不同剧集的图片和介绍文本
    change_st(e){ //监测各元素高度并且修改图片移动的距离
      let el_left = document.getElementById("LeftimgMoveup").children;
      // console.log(el_left[0].clientHeight);
      let el_mid = document.getElementById("midimgMoveup").children;
      // console.log(el_mid[0].clientHeight);
      let el_right = document.getElementById("rightimgMoveup").children;
      // console.log(el_right[0].clientHeight);

      let itemid = e.target.id;
      console.log(e.target.id);
      this.number_move = parseInt(itemid.slice(8))-1;
      console.log(this.number_move);


      // 图片移动
      let left_height = el_left[0].clientHeight;
      let mid_height = el_mid[0].clientHeight;
      let right_height = el_right[0].clientHeight;

      this.LeftUp =- left_height * this.number_move + 'px';
      console.log(this.LeftUp);
      this.MidUp = mid_height * this.number_move + 'px';
      console.log(this.MidUp);
      this.RightUp =- right_height * this.number_move + 'px';
      console.log(this.RightUp);


      //文本移动

    },


    //点击不同人物头像切换人物图片和介绍文本
    change_chara(e){
      let chara_slide = document.getElementById("SlideImg01");
      //打印单张图片高度
      console.log(chara_slide.clientHeight);
      
      let charaitem = e.target.id;
      // console.log(charaitem);
      this.chara_num = parseInt(charaitem.slice(8))-1;
      // console.log(this.chara_num);

      this.SlideimgUp = chara_slide.clientHeight * this.chara_num + 'px';

      // console.log(this.SlideimgUp);
    },




    }
}
</script>

