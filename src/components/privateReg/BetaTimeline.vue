<template>
<!-- beta时间线 -->
<Row class="beta_timeline">
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
<Row class="b_cast" id="b_cast/staff">
    <Row class="bcast_title">
    <Col span="8">
    </Col>
    <Col span="8">
    <div class="title_cast"></div>
    </Col>
    <Col span="8">
    </Col>
    </Row>
    <Row class="bcast_body">
    <Col span="4">
    </Col>
    <Col span="8" class="bcastbody_row1">
    <Row class="bcast_name11">
        <span class="bcastname11_left">岡部倫太郎</span>
        <span class="bcastname11_mid">|</span>
        <span class="bcastname11_right">宮野真守</span>
    </Row>
    <Row class="bcast_name12">
        <span class="bcastname12_left">椎名まゆり</span>
        <span class="bcastname12_mid">|</span>
        <span class="bcastname12_right">花澤香菜</span>
    </Row>
    <Row class="bcast_name13">
        <span class="bcastname13_left">橋田至</span>
        <span class="bcastname13_mid">|</span>
        <span class="bcastname13_right">関智一</span>
    </Row>
    <Row class="bcast_name14">
        <span class="bcastname14_left">牧瀬紅莉栖</span>
        <span class="bcastname14_mid">|</span>
        <span class="bcastname14_right">今井麻美</span>
    </Row>
    <Row class="bcast_name15">
        <span class="bcastname15_left">桐生萌郁</span>
        <span class="bcastname15_mid">|</span>
        <span class="bcastname15_right">後藤沙緒里</span>
    </Row>
    <Row class="bcast_name16">
        <span class="bcastname16_left">漆原るか</span>
        <span class="bcastname16_mid">|</span>
        <span class="bcastname16_right">小林ゆう</span>
    </Row>
    <Row class="bcast_name17">
        <span class="bcastname17_left">フェイリス・ニャンニャン</span>
        <span class="bcastname17_mid">|</span>
        <span class="bcastname17_right">桃井はるこ</span>
    </Row>
    <Row class="bcast_name18">
        <span class="bcastname18_left">阿万音鈴羽</span>
        <span class="bcastname18_mid">|</span>
        <span class="bcastname18_right">田村ゆかり</span>
    </Row>
    </Col>
    <Col span="8" class="bcastbody_row1">
    <Row class="bcast_name21">
        <span class="bcastname21_left">比屋定真帆</span>
        <span class="bcastname21_mid">|</span>
        <span class="bcastname21_right">矢作紗友里</span>
    </Row>
    <Row class="bcast_name22">
        <span class="bcastname22_left">椎名かがり</span>
        <span class="bcastname22_mid">|</span>
        <span class="bcastname22_right">潘めぐみ</span>
    </Row>
    <Row class="bcast_name23">
        <span class="bcastname23_left">阿万音由季</span>
        <span class="bcastname23_mid">|</span>
        <span class="bcastname23_right">田村ゆかり</span>
    </Row>
    <Row class="bcast_name24">
        <span class="bcastname24_left">天王寺綯</span>
        <span class="bcastname24_mid">|</span>
        <span class="bcastname24_right">山本彩乃</span>
    </Row>
    <Row class="bcast_name25">
        <span class="bcastname25_left">中瀬克美</span>
        <span class="bcastname25_mid">|</span>
        <span class="bcastname25_right">本多真梨子</span>
    </Row>
    <Row class="bcast_name26">
        <span class="bcastname26_left">来嶋かえで</span>
        <span class="bcastname26_mid">|</span>
        <span class="bcastname26_right">木野日菜</span>
    </Row>
    <Row class="bcast_name27">
        <span class="bcastname27_left">アレクシス・レスキネン</span>
        <span class="bcastname27_mid">|</span>
        <span class="bcastname27_right">上田燿司</span>
    </Row>
    <Row class="bcast_name28">
        <span class="bcastname28_left">ジュディ・レイエス</span>
        <span class="bcastname28_mid">|</span>
        <span class="bcastname28_right">にしむら まや</span>
    </Row>
    </Col>
    <Col span="4">
    </Col>
    </Row>
</Row>
<Row class="b_staff">
    <Row class="bstaff_title">
    <Col span="8">
    </Col>
    <Col span="8">
    <div class="title_staff"></div>
    </Col>
    <Col span="8">
    </Col>
    </Row>
    <Row class="bstaff_body">
    <Col span="4">
    </Col>
    <Col span="8" class="bstaffbody_row1">
    <Row class="bstaff_name11">
        <span class="bstaffname11_left">原作</span>
        <span class="bstaffname11_mid">|</span>
        <span class="bstaffname11_right">志倉千代丸/MAGES.</span>
    </Row>
    <Row class="bstaff_name12">
        <span class="bstaffname12_left">監督</span>
        <span class="bstaffname12_mid">|</span>
        <span class="bstaffname12_right">川村賢一</span>
    </Row>
    <Row class="bstaff_name13">
        <span class="bstaffname13_left">シリーズ構成</span>
        <span class="bstaffname13_mid">|</span>
        <span class="bstaffname13_right">花田十輝</span>
    </Row>
    <Row class="bstaff_name14">
        <span class="bstaffname14_left">シナリオ監修</span>
        <span class="bstaffname14_mid">|</span>
        <span class="bstaffname14_right">林 直孝、松原達也、<br />西村卓也、安本 了</span>
    </Row>
    <Row class="bstaff_name15">
        <span class="bstaffname15_left">キャラクター原案</span>
        <span class="bstaffname15_mid">|</span>
        <span class="bstaffname15_right">huke</span>
    </Row>
    <Row class="bstaff_name16">
        <span class="bstaffname16_left">未来ガジェット原案</span>
        <span class="bstaffname16_mid">|</span>
        <span class="bstaffname16_right">SH@RP</span>
    </Row>
    <Row class="bstaff_name17">
        <span class="bstaffname17_left">キャラクターデザイン</span>
        <span class="bstaffname17_mid">|</span>
        <span class="bstaffname17_right">稲吉智重</span>
    </Row>
    <Row class="bstaff_name18">
        <span class="bstaffname18_left">プロップデザイン</span>
        <span class="bstaffname18_mid">|</span>
        <span class="bstaffname18_right">稲吉朝子、灯夢、<br />コレサワシゲユキ</span>
    </Row>
    <Row class="bstaff_name19">
        <span class="bstaffname19_left">美術設定</span>
        <span class="bstaffname19_mid">|</span>
        <span class="bstaffname19_right">灯夢、コレサワシゲユキ</span>
    </Row>
    <Row class="bstaff_name110">
        <span class="bstaffname110_left">美術監督</span>
        <span class="bstaffname110_mid">|</span>
        <span class="bstaffname110_right">小髙 猛</span>
    </Row>
    <Row class="bstaff_name111">
        <span class="bstaffname111_left">色彩設計</span>
        <span class="bstaffname111_mid">|</span>
        <span class="bstaffname111_right">佐藤美由紀</span>
    </Row>
    <Row class="bstaff_name112">
        <span class="bstaffname112_left">オープニング主題歌</span>
        <span class="bstaffname112_mid">|</span>
        <span class="bstaffname112_right">「ファティマ」<br />
        歌：いとうかなこ</span>
    </Row>
    </Col>
    <Col span="8" class="bstaffbody_row2">
    <Row class="bstaff_name21">
        <span class="bstaffname21_left">特効監修</span>
        <span class="bstaffname21_mid">|</span>
        <span class="bstaffname21_right">谷口久美子</span>
    </Row>
    <Row class="bstaff_name22">
        <span class="bstaffname22_left">撮影監督</span>
        <span class="bstaffname22_mid">|</span>
        <span class="bstaffname22_right">塩川智幸</span>
    </Row>
    <Row class="bstaff_name23">
        <span class="bstaffname23_left">３Ｄディレクター</span>
        <span class="bstaffname23_mid">|</span>
        <span class="bstaffname23_right">ヨシダミキ</span>
    </Row>
    <Row class="bstaff_name24">
        <span class="bstaffname24_left">モデリング</span>
        <span class="bstaffname24_mid">|</span>
        <span class="bstaffname24_right">相馬 洋</span>
    </Row>
    <Row class="bstaff_name25">
        <span class="bstaffname25_left">編集</span>
        <span class="bstaffname25_mid">|</span>
        <span class="bstaffname25_right">須藤 瞳</span>
    </Row>
    <Row class="bstaff_name26">
        <span class="bstaffname26_left">音響監督</span>
        <span class="bstaffname26_mid">|</span>
        <span class="bstaffname26_right">山口貴之</span>
    </Row>
    <Row class="bstaff_name27">
        <span class="bstaffname27_left">音楽</span>
        <span class="bstaffname27_mid">|</span>
        <span class="bstaffname27_right">阿保 剛、信澤宣明、日向 萌</span>
    </Row>
    <Row class="bstaff_name28">
        <span class="bstaffname28_left">音楽プロデューサー</span>
        <span class="bstaffname28_mid">|</span>
        <span class="bstaffname28_right">金谷雄文</span>
    </Row>
    <Row class="bstaff_name29">
        <span class="bstaffname29_left">音楽制作</span>
        <span class="bstaffname29_mid">|</span>
        <span class="bstaffname29_right">MAGES.</span>
    </Row>
    <Row class="bstaff_name210">
        <span class="bstaffname210_left">アニメーション制作</span>
        <span class="bstaffname210_mid">|</span>
        <span class="bstaffname210_right">WHITE FOX</span>
    </Row>
    <Row class="bstaff_name211">
        <span class="bstaffname211_left">製作</span>
        <span class="bstaffname211_mid">|</span>
        <span class="bstaffname211_right">未来ガジェット研究所</span>
    </Row>
    <Row class="bstaff_name212">
        <span class="bstaffname212_left">エンディング主題歌</span>
        <span class="bstaffname212_mid">|</span>
        <span class="bstaffname212_right">「LAST GAME」<br />歌:Zwei</span>
    </Row>
    </Col>
    <Col span="4">
    </Col>
    </Row>
</Row>
</Row>
</template>

<script>
export default {
    name:"BetaTimeline",

    data(){
        return{
            hover: true, //将鼠标放在GridItem上是否有悬浮效果
            border: false, //GridItem是否有边框
            number_move: 0, //change_st(e)中使用到的移动几个图片单位
            LeftUp: "0px", //change_st(e)中使用到的左侧图片移动距离
            MidUp: "0px", //change_st(e)中使用到的中间图片移动距离
            RightUp: "0px", //change_st(e)中使用到的右侧图片移动距离
            SlideimgUp: "0px", //character部分角色滑块滑动距离
            chara_num: 0, //change_chara(e)中使用到的移动图片单位
            chara_img: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //不同角色切换使用到的数组，1为true，0为false
            leftimgs_moveup:[
                {id:1, src:'/src/assets/images/img_story01_01.png.png'},
                {id:2, src:'/src/assets/images/img_story02_01.png.png'},
                {id:3, src:'/src/assets/images/img_story03_01.png.png'},
                {id:4, src:'/src/assets/images/img_story04_01.png.png'},
                {id:5, src:'/src/assets/images/img_story05_01.png.png'},
                {id:6, src:'/src/assets/images/img_story06_01.png.png'},
                {id:7, src:'/src/assets/images/img_story07_01.png.png'},
                {id:8, src:'/src/assets/images/img_story08_01.png.png'},
                {id:9, src:'/src/assets/images/img_story09_01.png.png'},
                {id:10, src:'/src/assets/images/img_story10_01.png.png'},
                {id:11, src:'/src/assets/images/img_story11_01.png.png'},
                {id:12, src:'/src/assets/images/img_story12_01.png.png'},
                {id:13, src:'/src/assets/images/img_story13_01.png.png'},
                {id:14, src:'/src/assets/images/img_story14_01.png.png'},
                {id:15, src:'/src/assets/images/img_story15_01.png.png'},
                {id:16, src:'/src/assets/images/img_story16_01.png.png'},
                {id:17, src:'/src/assets/images/img_story17_01.png.png'},
                {id:18, src:'/src/assets/images/img_story18_01.png.png'},
                {id:19, src:'/src/assets/images/img_story19_01.png.png'},
                {id:20, src:'/src/assets/images/img_story20_01.png.png'},
                {id:21, src:'/src/assets/images/img_story21_01.png.png'},
                {id:22, src:'/src/assets/images/img_story22_01.png.png'},
                {id:23, src:'/src/assets/images/img_story23_01.png.png'},
                {id:24, src:'/src/assets/images/img_story24_01.png.png'},
            ],//v-for展示左侧滑动图片
            rightimgs_moveup:[
                {id:1, src:'/src/assets/images/img_story01_03.png.png'},
                {id:2, src:'/src/assets/images/img_story02_03.png.png'},
                {id:3, src:'/src/assets/images/img_story03_03.png.png'},
                {id:4, src:'/src/assets/images/img_story04_03.png.png'},
                {id:5, src:'/src/assets/images/img_story05_03.png.png'},
                {id:6, src:'/src/assets/images/img_story06_03.png.png'},
                {id:7, src:'/src/assets/images/img_story07_03.png.png'},
                {id:8, src:'/src/assets/images/img_story08_03.png.png'},
                {id:9, src:'/src/assets/images/img_story09_03.png.png'},
                {id:10, src:'/src/assets/images/img_story10_03.png.png'},
                {id:11, src:'/src/assets/images/img_story11_03.png.png'},
                {id:12, src:'/src/assets/images/img_story12_03.png.png'},
                {id:13, src:'/src/assets/images/img_story13_03.png.png'},
                {id:14, src:'/src/assets/images/img_story14_03.png.png'},
                {id:15, src:'/src/assets/images/img_story15_03.png.png'},
                {id:16, src:'/src/assets/images/img_story16_03.png.png'},
                {id:17, src:'/src/assets/images/img_story17_03.png.png'},
                {id:18, src:'/src/assets/images/img_story18_03.png.png'},
                {id:19, src:'/src/assets/images/img_story19_03.png.png'},
                {id:20, src:'/src/assets/images/img_story20_03.png.png'},
                {id:21, src:'/src/assets/images/img_story21_03.png.png'},
                {id:22, src:'/src/assets/images/img_story22_03.png.png'},
                {id:23, src:'/src/assets/images/img_story23_03.png.png'},
                {id:24, src:'/src/assets/images/img_story24_03.png.png'},
            ],//v-for展示右侧滑动图片
        }
    },
    methods:{
        //点击集数按钮切换不同剧集的图片和介绍文本
        change_st(e) {
        //监测各元素高度并且修改图片移动的距离
        let el_left = document.getElementById("LeftimgMoveup").children;
        // console.log(el_left[0].clientHeight);
        let el_mid = document.getElementById("midimgMoveup").children;
        // console.log(el_mid[0].clientHeight);
        let el_right = document.getElementById("rightimgMoveup").children;
        // console.log(el_right[0].clientHeight);

        let itemid = e.target.id;
        console.log(e.target.id);
        this.number_move = parseInt(itemid.slice(7)) - 1;
        console.log(this.number_move);

        // 图片移动
        let left_height = el_left[0].clientHeight;
        let mid_height = el_mid[0].clientHeight;
        let right_height = el_right[0].clientHeight;

        this.LeftUp = -left_height * this.number_move + "px";
        console.log(this.LeftUp);
        this.MidUp = mid_height * this.number_move + "px";
        console.log(this.MidUp);
        this.RightUp = -right_height * this.number_move + "px";
        console.log(this.RightUp);

        //文本移动
        },

        //点击不同人物头像切换人物图片和介绍文本
        change_chara(e) {
        let chara_slide = document.getElementById("SlideImg01");
        //打印单张图片高度
        // console.log(chara_slide.clientHeight);

        let charaitem = e.target.id;
        console.log(e);
        console.log(charaitem);
        this.chara_num = parseInt(charaitem.slice(8)) - 1;
        console.log(this.chara_num);

        this.SlideimgUp = chara_slide.clientHeight * this.chara_num + "px";
        // console.log(this.SlideimgUp);

        this.chara_img = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.chara_img[this.chara_num] = 1;
        },
    },
}
</script>

<style scoped>

/* 0.通用样式 */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
  

  .beta_timeline {
    width: 100vw;
    /* background-color: pink; */
  }
  
  
  
  
  /* 3.1 story整体样式 */

  .b_story{
      width: 100vw;
  }
  /* 3.1.1 story title样式 */

  .b_st_title {
      width: 100%;
      padding: 10% 0 10%;
      /* background-color: rgba(128,0,128,0.5); */
  }
  
  .b_t_img{
      width: 100%;
      padding-top: 11%;
      background-image: url("/src/assets/images/story.svg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 50%;
  }
  
  
  
  /* 3.1.2story body样式 */

  .b_st_body{
    position: relative;
    width: 100vw;
    padding-top: 85%;
    overflow: hidden;
  }

  /* 3.1.2.1story body text样式 */
  .body_text{
    width: 100%;
  }

  /* 3.1.2.2story body img样式 */
  .body_img{
    width: 180vw;
    position: absolute;
    bottom:24%;
    left:-70%;
    padding-top: 56%;
    transform:  rotate(-8deg);
    overflow: hidden;
  }
  
  .body_slideimg{
    position: absolute;
    width: 100vw;
    top:-11%;
    left: 41.6%;
    transform:rotate(8deg);
  }






  /* 3.1.2.3左、中、右分部分调整 */
  .leftimg{
    width: 100%;
    position: absolute;
    /* background-color: red; */
    transition: all 0.8s;
  }

  .midimg{
    width: 100%;
    position: absolute;
    /* background-color: aqua; */
    transition: all 0.8s;
  }

  .rightimg{
    position: absolute;
    /* background-color:orange; */
    transition: all 0.8s;
  }


  .leftimg_moveup{
    width: 100%;
  }

  .leftimg_moveup img{
    width: 100%;
    height: auto;
    padding-left: 1%;
    padding-right: 1%;
  }



  .midimg_movedown{
    width: 100%;
    height:97.88vw;
    flex-direction: column-reverse;
    flex-wrap: nowrap;
  }
  .midimg_movedown img{
    display: block;
    width: 100%;
    height: auto;
    padding-left: 2%;
    padding-right: 2%;
  }



  .rightimg_moveup{
    width: 100%;
  }
  .rightimg_moveup>li>img{
    width: 100%;
    height: auto;
    padding-left: 1%;
    padding-right: 2%;
  }

  /* 3.1.2.1story body number样式 */
  .b_st_footer{
    position: absolute;
    width: 60vw;
    bottom: 11%;
    left: 39%;
  }

  .num_nav{
    width: 100%;
    font-size: 2em;
    text-align: center;
    /* line-height: 71px; */
    /* margin: 1%; */
  }

  #navItem01{
    background-image: url("/src/assets/icons/无穷-透明黑色.png");
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .Item{
    margin: 0.3%;
    padding: 2px;
  }

  
  
  /* 3.2characters总体样式 */

  .b_characters{
    width: 100vw;
    overflow: hidden;
    /* background-color: rgb(177, 115, 126); */
  }


  /* 3.2.1 title样式 */
  .b_charas_title{
    width: 100%;
    padding: 8% 0 8%;
    /* background-color: purple; */
  }

  .b_c_img{
    width: 100%;
    padding-top:12%;
    background-image: url("/src/assets/images/characters.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  /* 3.2.2 body样式 */
  .b_charas_body{
    position: relative;
    width: 100vw;
    height: 73vw;
    /* background-color:orange; */
  }

  .charas_cut{
    position: absolute;
    left:-52%;
    top: 3%;
    padding-top: 46%;
    width: 180vw;
    transform: rotate(-10deg);
    background: rgb(241, 241, 241);
    overflow: hidden;
  }
  

  .charas_main{
    position: absolute;
    left: 31%;
    top: -15%;
    transform: rotate(10deg);
    width: 100vw;
  }

  /* 3.2.2.1 txt 样式 */



  /* 3.2.2.2 slide_img 样式 */
  .slide_img_whole{
    position: absolute;
    width: 100vw;
    z-index: 201;
  }

  .slide_img{
    display: flex;
    width: 100%;
    height: 49.616vw;
    flex-direction: column-reverse;
    flex-wrap: nowrap;
    transition: all 0.6s;
  }

  .slide_img img{
    width: 100%;
  }

  .slide_img_col{
    width: 100%;
    height: 49.616vw;
  }




  /* 3.2.2.3 float_img样式 */
  .float_img_whole{
    position: absolute;
    width: 100vw;
  }


    /*  float_bg_img样式 */
  .float_bg_img{
    position: relative;
    width: 100vw;
  }

  .float_bg_img img{
    position: absolute;
    opacity: 0.3;
    width: 100%;
  }



    /* float_top_img 样式 */
  .float_top_img{
    position: relative;
    width: 100vw;
  }

  .float_top_img div{
    position: absolute;
    left: 15%;
    top: 10%;
    width: 100%;
    z-index: 100;
  }

  .float_top_img div img{
    position: absolute;
    width: 35%;
    top: 10vw;
    z-index: 100;
  }

  .float_top_img div[class$='_1']{
    z-index: 105;
  }

  .float_top_img div[class$='_2']{
    animation: move_left 1s forwards;
    /* transform: translate(-12vw,2vw); */
    z-index: 104;
    opacity: 0.6;
  }
  
  .float_top_img div[class$='_3']{
    animation: move_right 1s forwards;
    /* transform: translate(7vw,-1vw); */
    z-index: 103;
    opacity: 0.6;
  }

  @keyframes move_left {
    100% {
      transform: translate(-12vw,2vw);
    }
  }

  @keyframes move_right {
    100% {
      transform: translate(7vw,-1.5vw);
    }
  }


  /* 3.2.3 character_footer样式 */
  .charas_footer{
    position: absolute;
    width: 50vw;
    height:16vw;
    top:56vw;
    left: 15vw;
    /* background-color: red; */
  }

  .charas_nav{
    position: relative;
    width: 100%;
    height: 100%;
  }

  .char_row1{
    width: 100%;
    height: 50%;
  }


  .char_row2{
    position: absolute;
    top:5vw;
    left: 25vw;
    width: 100%;
    height: 50%;
  }

  .charas_nav img{
    position: absolute;
    width: 100%;
  }


  .charas_nav a{
    transition: all 1s;
  }

  .char_item01{
    top:0vw;
    left: 0vw;
  }

  .char_item01 a::before{
    opacity: 0;
    content: ' ';
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100%;
    height: 110%;
    background-color: rgb(0,0,0,1);
    transition: all 1s;
    z-index: 900;
    
  }

  .char_item01 a:hover::before{
    transition: all 1s;
    z-index: 900;
    opacity: 0.6;
  }


  @keyframes opac {
    100%{
        opacity: 0;   
    }
  }



  .char_item02{
    top:-1.5vw;
    left:0.5vw;
  }

  .char_item02 a::before{
    opacity: 0;
    content: ' ';
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100%;
    height: 110%;
    background-color: rgb(0,0,0,1);
    transition: all 1s;
    z-index: 900;
  }

  .char_item02 a:hover::before{
    transition: all 1s;
    z-index: 900;
    opacity: 0.6;
  }




  .char_item03{
    top:-3vw;
    left:1vw;
  }

  .char_item03 a::before{
    opacity: 0;
    content: ' ';
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100%;
    height: 110%;
    background-color: rgb(0,0,0,1);
    transition: all 1s;
    z-index: 900;
  }

  .char_item03 a:hover::before{
    transition: all 1s;
    z-index: 900;
    opacity: 0.6;
  }





  .char_item04{
    top:-4.5vw;
    left:1.5vw;
  }

  .char_item04 a::before{
    opacity: 0;
    content: ' ';
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100%;
    height: 110%;
    background-color: rgb(0,0,0,1);
    transition: all 1s;
    z-index: 900;
  }

  .char_item04 a:hover::before{
    transition: all 1s;
    z-index: 900;
    opacity: 0.6;
  }





  .char_item05{
    top:-6vw;
    left:2vw;
  }

  .char_item05 a::before{
    opacity: 0;
    content: ' ';
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100%;
    height: 110%;
    background-color: rgb(0,0,0,1);
    transition: all 1s;
    z-index: 900;
  }

  .char_item05 a:hover::before{
    transition: all 1s;
    z-index: 900;
    opacity: 0.6;
  }



  .char_item06{
    top:-7.5vw;
    left:2.5vw;
  }

  .char_item06 a::before{
    opacity: 0;
    content: ' ';
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100%;
    height: 110%;
    background-color: rgb(0,0,0,1);
    transition: all 1s;
    z-index: 900;
  }

  .char_item06 a:hover::before{
    transition: all 1s;
    z-index: 900;
    opacity: 0.6;
  }





  .char_item07{
    top:-9vw;
    left:3vw;
  }

  .char_item07 a::before{
    opacity: 0;
    content: ' ';
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100%;
    height: 110%;
    background-color: rgb(0,0,0,1);
    transition: all 1s;
    z-index: 900;
  }

  .char_item07 a:hover::before{
    transition: all 1s;
    z-index: 900;
    opacity: 0.6;
  }






  .char_item08{
    top:-10.5vw;
    left:3.5vw;
  }

  .char_item08 a::before{
    opacity: 0;
    content: ' ';
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100%;
    height: 110%;
    background-color: rgb(0,0,0,1);
    transition: all 1s;
    z-index: 900;
  }

  .char_item08 a:hover::before{
    transition: all 1s;
    z-index: 900;
    opacity: 0.6;
  }






  .char_item09{
    top: 0vw;
    left: 0vw;
  }

  .char_item09 a::before{
    opacity: 0;
    content: ' ';
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100%;
    height: 110%;
    background-color: rgb(0,0,0,1);
    transition: all 1s;
    z-index: 900;
  }

  .char_item09 a:hover::before{
    transition: all 1s;
    z-index: 900;
    opacity: 0.6;
  }





  .char_item10{
    top: -1.5vw;
    left: 0.5vw;
  }

  .char_item10 a::before{
    opacity: 0;
    content: ' ';
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100%;
    height: 110%;
    background-color: rgb(0,0,0,1);
    transition: all 1s;
    z-index: 900;
  }

  .char_item10 a:hover::before{
    transition: all 1s;
    z-index: 900;
    opacity: 0.6;
  }






  .char_item11{
    top: -3vw;
    left: 1vw;
  }

  .char_item11 a::before{
    opacity: 0;
    content: ' ';
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100%;
    height: 110%;
    background-color: rgb(0,0,0,1);
    transition: all 1s;
    z-index: 900;
  }

  .char_item11 a:hover::before{
    transition: all 1s;
    z-index: 900;
    opacity: 0.6;
  }





  .char_item12{
    top:-4.5vw;
    left:1.5vw;
  }

  .char_item12 a::before{
    opacity: 0;
    content: ' ';
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100%;
    height: 110%;
    background-color: rgb(0,0,0,1);
    transition: all 1s;
    z-index: 900;
  }

  .char_item12 a:hover::before{
    transition: all 1s;
    z-index: 900;
    opacity: 0.6;
  }



  .char_item13{
    top:-6vw;
    left:2vw;
  }

  .char_item13 a::before{
    opacity: 0;
    content: ' ';
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100%;
    height: 110%;
    background-color: rgb(0,0,0,1);
    transition: all 1s;
    z-index: 900;
  }

  .char_item13 a:hover::before{
    transition: all 1s;
    z-index: 900;
    opacity: 0.6;
  }






  .char_item14{
    top:-7.5vw;
    left:2.5vw;
  }
  
  .char_item14 a::before{
    opacity: 0;
    content: ' ';
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100%;
    height: 110%;
    background-color: rgb(0,0,0,1);
    transition: all 1s;
    z-index: 900;
  }

  .char_item14 a:hover::before{
    transition: all 1s;
    z-index: 900;
    opacity: 0.6;
  }






  .char_item15{
    top:-9vw;
    left:3vw;
  }

  .char_item15 a::before{
    opacity: 0;
    content: ' ';
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100%;
    height: 110%;
    background-color: rgb(0,0,0,1);
    transition: all 1s;
    z-index: 900;
  }

  .char_item15 a:hover::before{
    transition: all 1s;
    z-index: 900;
    opacity: 0.6;
  }





  .char_item16{
    top:-10.5vw;
    left:3.5vw;
  }

  .char_item16 a::before{
    opacity: 0;
    content: ' ';
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100%;
    height: 110%;
    background-color: rgb(0,0,0,1);
    transition: all 1s;
    z-index: 900;
  }

  .char_item16 a:hover::before{
    transition: all 1s;
    z-index: 900;
    opacity: 0.6;
  }







  /* 3.2.4 cast部分样式 */
  .b_cast{
    width: 100vw;
  }

  .bcast_title{
    width: 100%;
    padding: 8% 0 6% ;
    /* background-color: aqua; */
  }

  /* cast title部分样式 */
  .title_cast{
    width: 100%;
    padding-top: 11%;
    background-image: url("/src/assets/images/cast.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  /* cast body样式部分 */
  .bcast_body{
    width: 100%;
    height: 50vw;
    /* background-color: rgb(128,12,42); */
    font-family: 'notoserif', serif, sans-serif;
    color: #fff;
  }

  .bcast_body span{
    display: inline-block;
  }

  .bcastbody_row1{
    position: relative;
    flex-direction: column;
    /* background-color: #fff; */
  }

  .bcastbody_row2{
    flex-direction: column;
    /* background-color: rgb(25, 15, 15); */
  }

  .bcast_name11{
    position: absolute;
    left: -2vw;
    top: 0vw;
    width: 100%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bcast_name12{
    position: absolute;
    left: -2vw;
    top: 6vw;
    width: 100%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bcast_name13{
    position: absolute;
    left: -2vw;
    top: 12vw;
    width: 100%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bcast_name14{
    position: absolute;
    left: -2vw;
    top: 18vw;
    width: 100%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bcast_name15{
    position: absolute;
    left: -2vw;
    top: 24vw;
    width: 100%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bcast_name16{
    position: absolute;
    left: -2vw;
    top: 30vw;
    width: 100%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bcast_name17{
    position: absolute;
    left: -2vw;
    top: 36vw;
    width: 100%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bcast_name18{
    position: absolute;
    left: -2vw;
    top: 42vw;
    width: 100%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bcast_name21{
    position: absolute;
    left: 0vw;
    top: 0vw;
    width: 100%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bcast_name22{
    position: absolute;
    left: 0vw;
    top: 6vw;
    width: 100%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bcast_name23{
    position: absolute;
    left: 0vw;
    top: 12vw;
    width: 100%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bcast_name24{
    position: absolute;
    left: 0vw;
    top: 18vw;
    width: 100%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bcast_name25{
    position: absolute;
    left: 0vw;
    top: 24vw;
    width: 100%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bcast_name26{
    position: absolute;
    left: 0vw;
    top: 30vw;
    width: 100%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bcast_name27{
    position: absolute;
    left: 0vw;
    top: 36vw;
    width: 100%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bcast_name28{
    position: absolute;
    left: 0vw;
    top: 42vw;
    width: 100%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }




  .bcastname11_left{
    position: absolute;
    right: 52%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bcastname11_mid{
    font-size: 3vw;
  }
  .bcastname11_right{
    position: absolute;
    left: 53%;
    top: 26%;
    font-size: 1.8vw;
    margin-left: 0.5vw;
  }




  .bcastname12_left{
    position: absolute;
    right: 52%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bcastname12_mid{
    font-size: 3vw;
  }
  .bcastname12_right{
    position: absolute;
    left: 53%;
    top: 26%;
    font-size: 1.8vw;
    margin-left: 0.5vw;
  }



  
  .bcastname13_left{
    position: absolute;
    right: 52%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bcastname13_mid{
    font-size: 3vw;
  }
  .bcastname13_right{
    position: absolute;
    left: 53%;
    top: 26%;
    font-size: 1.8vw;
    margin-left: 0.5vw;
  }




  .bcastname14_left{
    position: absolute;
    right: 52%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bcastname14_mid{
    font-size: 3vw;
  }
  .bcastname14_right{
    position: absolute;
    left: 53%;
    top: 26%;
    font-size: 1.8vw;
    margin-left: 0.5vw;
  }




  .bcastname15_left{
    position: absolute;
    right: 52%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bcastname15_mid{
    font-size: 3vw;
  }
  .bcastname15_right{
    position: absolute;
    left: 53%;
    top: 26%;
    font-size: 1.8vw;
    margin-left: 0.5vw;
  }


  .bcastname16_left{
    position: absolute;
    right: 52%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bcastname16_mid{
    font-size: 3vw;
  }
  .bcastname16_right{
    position: absolute;
    left: 53%;
    top: 26%;
    font-size: 1.8vw;
    margin-left: 0.5vw;
  }




  .bcastname17_left{
    position: absolute;
    right: 52%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bcastname17_mid{
    font-size: 3vw;
  }
  .bcastname17_right{
    position: absolute;
    left: 53%;
    top: 26%;
    font-size: 1.8vw;
    margin-left: 0.5vw;
  }



  .bcastname18_left{
    position: absolute;
    right: 52%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bcastname18_mid{
    font-size: 3vw;
  }
  .bcastname18_right{
    position: absolute;
    left: 53%;
    top: 26%;
    font-size: 1.8vw;
    margin-left: 0.5vw;
  }



  .bcastname21_left{
    position: absolute;
    right: 52%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bcastname21_mid{
    font-size: 3vw;
  }
  .bcastname21_right{
    position: absolute;
    left: 53%;
    top: 26%;
    font-size: 1.8vw;
    margin-left: 0.5vw;
  } 
  
  
  
  
  .bcastname22_left{
    position: absolute;
    right: 52%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bcastname22_mid{
    font-size: 3vw;
  }
  .bcastname22_right{
    position: absolute;
    left: 53%;
    top: 26%;
    font-size: 1.8vw;
    margin-left: 0.5vw;
  }


  .bcastname23_left{
    position: absolute;
    right: 52%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bcastname23_mid{
    font-size: 3vw;
  }
  .bcastname23_right{
    position: absolute;
    left: 53%;
    top: 26%;
    font-size: 1.8vw;
    margin-left: 0.5vw;
  } 




  .bcastname24_left{
    position: absolute;
    right: 52%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bcastname24_mid{
    font-size: 3vw;
  }
  .bcastname24_right{
    position: absolute;
    left: 53%;
    top: 26%;
    font-size: 1.8vw;
    margin-left: 0.5vw;
  } 
  



  .bcastname25_left{
    position: absolute;
    right: 52%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bcastname25_mid{
    font-size: 3vw;
  }
  .bcastname25_right{
    position: absolute;
    left: 53%;
    top: 26%;
    font-size: 1.8vw;
    margin-left: 0.5vw;
  } 
  
  

  .bcastname26_left{
    position: absolute;
    right: 52%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bcastname26_mid{
    font-size: 3vw;
  }
  .bcastname26_right{
    position: absolute;
    left: 53%;
    top: 26%;
    font-size: 1.8vw;
    margin-left: 0.5vw;
  } 
  


  .bcastname27_left{
    position: absolute;
    right: 52%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bcastname27_mid{
    font-size: 3vw;
  }
  .bcastname27_right{
    position: absolute;
    left: 53%;
    top: 26%;
    font-size: 1.8vw;
    margin-left: 0.5vw;
  } 
  


  .bcastname28_left{
    position: absolute;
    right: 52%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bcastname28_mid{
    font-size: 3vw;
  }
  .bcastname28_right{
    position: absolute;
    left: 53%;
    top: 26%;
    font-size: 1.8vw;
    margin-left: 0.5vw;
  } 
  







  /* 3.2.5 staff部分样式 */
  .b_staff{
    width: 100vw;
  }

  .bstaff_title{
    width: 100%;
    padding: 8% 0 6% ;
    /* background-color: aqua; */
  }

  /* staff title部分样式 */
  .title_staff{
    width: 100%;
    padding-top: 11%;
    background-image: url("/src/assets/images/staff.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  /* staff body样式部分 */
  .bstaff_body{
    width: 100%;
    height: 75vw;
    /* background-color: rgb(128,12,42); */
    font-family: 'notoserif', serif, sans-serif;
    color: #fff;
  }

  /* .bstaff_body span{
    display: inline-block;
  } */

  .bstaffbody_row1{
    position: relative;
    flex-direction: column;
    /* background-color: rgb(7, 184, 116); */
  }

  .bstaffbody_row2{
    flex-direction: column;
    /* background-color: rgb(25, 15, 15); */
  }




  .bstaff_name11{
    position: absolute;
    left: -11vw;
    top: 0vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name12{
    position: absolute;
    left: -11vw;
    top: 6vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name13{
    position: absolute;
    left: -11vw;
    top: 12vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name14{
    position: absolute;
    left: -11vw;
    top: 18vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name15{
    position: absolute;
    left: -11vw;
    top: 24vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name16{
    position: absolute;
    left: -11vw;
    top: 30vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name17{
    position: absolute;
    left: -11vw;
    top: 36vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name18{
    position: absolute;
    left: -11vw;
    top: 42vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name19{
    position: absolute;
    left: -11vw;
    top: 48vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name110{
    position: absolute;
    left: -11vw;
    top: 54vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name111{
    position: absolute;
    left: -11vw;
    top: 60vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name112{
    position: absolute;
    left: -11vw;
    top: 66vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }






  .bstaff_name21{
    position: absolute;
    left: -7.5vw;
    top: 0vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name22{
    position: absolute;
    left: -7.5vw;
    top: 6vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name23{
    position: absolute;
    left: -7.5vw;
    top: 12vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name24{
    position: absolute;
    left: -7.5vw;
    top: 18vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name25{
    position: absolute;
    left: -7.5vw;
    top: 24vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name26{
    position: absolute;
    left: -7.5vw;
    top: 30vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name27{
    position: absolute;
    left: -7.5vw;
    top: 36vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name28{
    position: absolute;
    left: -7.5vw;
    top: 42vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name29{
    position: absolute;
    left: -7.5vw;
    top: 48vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name210{
    position: absolute;
    left: -7.5vw;
    top: 54vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name211{
    position: absolute;
    left: -7.5vw;
    top: 60vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }

  .bstaff_name212{
    position: absolute;
    left: -7.5vw;
    top: 66vw;
    width: 150%;
    height: 5vw;
    justify-content: center;
    align-items: center;
  }







  .bstaffname11_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname11_mid{
    font-size: 3vw;
  }
  .bstaffname11_right{
    position: absolute;
    left: 51%;
    top: 27%;
    font-size: 1.7vw;
    margin-left: 0.5vw;
  }




  .bstaffname12_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname12_mid{
    font-size: 3vw;
  }
  .bstaffname12_right{
    position: absolute;
    left: 51%;
    top: 27%;
    font-size: 1.7vw;
    margin-left: 0.5vw;
  }



  
  .bstaffname13_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname13_mid{
    font-size: 3vw;
  }
  .bstaffname13_right{
    position: absolute;
    left: 51%;
    top: 27%;
    font-size: 1.7vw;
    margin-left: 0.5vw;
  }




  .bstaffname14_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname14_mid{
    font-size: 3vw;
  }
  .bstaffname14_right{
    position: absolute;
    left: 51%;
    top: 12%;
    font-size: 1.5vw;
    margin-left: 0.5vw;
  }




  .bstaffname15_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname15_mid{
    font-size: 3vw;
  }
  .bstaffname15_right{
    position: absolute;
    left: 51%;
    top: 27%;
    font-size: 1.7vw;
    margin-left: 0.5vw;
  }


  .bstaffname16_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname16_mid{
    font-size: 3vw;
  }
  .bstaffname16_right{
    position: absolute;
    left: 51%;
    top: 27%;
    font-size: 1.7vw;
    margin-left: 0.5vw;
  }




  .bstaffname17_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname17_mid{
    font-size: 3vw;
  }
  .bstaffname17_right{
    position: absolute;
    left: 51%;
    top: 27%;
    font-size: 1.7vw;
    margin-left: 0.5vw;
  }



  .bstaffname18_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname18_mid{
    font-size: 3vw;
  }
  .bstaffname18_right{
    position: absolute;
    left: 51%;
    top: 12%;
    font-size: 1.5vw;
    margin-left: 0.5vw;
  }




  .bstaffname19_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname19_mid{
    font-size: 3vw;
  }
  .bstaffname19_right{
    position: absolute;
    left: 51%;
    top: 35%;
    font-size: 1.5vw;
    margin-left: 0.5vw;
  }




  .bstaffname110_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname110_mid{
    font-size: 3vw;
  }
  .bstaffname110_right{
    position: absolute;
    left: 51%;
    top: 27%;
    font-size: 1.7vw;
    margin-left: 0.5vw;
  }





  .bstaffname111_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname111_mid{
    font-size: 3vw;
  }
  .bstaffname111_right{
    position: absolute;
    left: 51%;
    top: 27%;
    font-size: 1.7vw;
    margin-left: 0.5vw;
  }



  .bstaffname112_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname112_mid{
    font-size: 3vw;
  }
  .bstaffname112_right{
    position: absolute;
    left: 51%;
    top: 12%;
    font-size: 1.5vw;
    margin-left: 0.5vw;
  }


  





  .bstaffname21_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname21_mid{
    font-size: 3vw;
  }
  .bstaffname21_right{
    position: absolute;
    left: 51%;
    top: 27%;
    font-size: 1.7vw;
    margin-left: 0.5vw;
  }




  .bstaffname22_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname22_mid{
    font-size: 3vw;
  }
  .bstaffname22_right{
    position: absolute;
    left: 51%;
    top: 27%;
    font-size: 1.7vw;
    margin-left: 0.5vw;
  }



  
  .bstaffname23_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname23_mid{
    font-size: 3vw;
  }
  .bstaffname23_right{
    position: absolute;
    left: 51%;
    top: 27%;
    font-size: 1.7vw;
    margin-left: 0.5vw;
  }




  .bstaffname24_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname24_mid{
    font-size: 3vw;
  }
  .bstaffname24_right{
    position: absolute;
    left: 51%;
    top: 12%;
    font-size: 1.5vw;
    margin-left: 0.5vw;
  }




  .bstaffname25_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname25_mid{
    font-size: 3vw;
  }
  .bstaffname25_right{
    position: absolute;
    left: 51%;
    top: 27%;
    font-size: 1.7vw;
    margin-left: 0.5vw;
  }


  .bstaffname26_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname26_mid{
    font-size: 3vw;
  }
  .bstaffname26_right{
    position: absolute;
    left: 51%;
    top: 27%;
    font-size: 1.7vw;
    margin-left: 0.5vw;
  }




  .bstaffname27_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname27_mid{
    font-size: 3vw;
  }
  .bstaffname27_right{
    position: absolute;
    left: 51%;
    top: 27%;
    font-size: 1.7vw;
    margin-left: 0.5vw;
  }



  .bstaffname28_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname28_mid{
    font-size: 3vw;
  }
  .bstaffname28_right{
    position: absolute;
    left: 51%;
    top: 12%;
    font-size: 1.5vw;
    margin-left: 0.5vw;
  }




  .bstaffname29_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname29_mid{
    font-size: 3vw;
  }
  .bstaffname29_right{
    position: absolute;
    left: 51%;
    top: 35%;
    font-size: 1.5vw;
    margin-left: 0.5vw;
  }




  .bstaffname210_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname210_mid{
    font-size: 3vw;
  }
  .bstaffname210_right{
    position: absolute;
    left: 51%;
    top: 27%;
    font-size: 1.7vw;
    margin-left: 0.5vw;
  }





  .bstaffname211_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname211_mid{
    font-size: 3vw;
  }
  .bstaffname211_right{
    position: absolute;
    left: 51%;
    top: 27%;
    font-size: 1.7vw;
    margin-left: 0.5vw;
  }



  .bstaffname212_left{
    position: absolute;
    right: 51%;
    top: 35%;
    font-size: 1.35vw;
    margin-right: 1vw;
  }
  .bstaffname212_mid{
    font-size: 3vw;
  }
  .bstaffname212_right{
    position: absolute;
    left: 51%;
    top: 12%;
    font-size: 1.5vw;
    margin-left: 0.5vw;
  }

</style>