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
        <Row class="StoryCharacterStaffCast">
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
                      <Row class="charas_main">
                        <Row class="float_img"></Row>
                        <Row class="slide_img"></Row>
                      </Row>
                      <Row class="charas_footer"></Row>
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
        <Row class="footer"></Row>
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
      <Col span="4" class="nav_left"></Col>
      <Col span="2" class="nav_top"></Col>
      <Col span="3" class="nav_story"></Col>
      <Col span="4" class="nav_character"></Col>
      <Col span="3" class="nav_cast"></Col>
      <Col span="4" class="nav_product"></Col>
      <Col span="4" class="nav_right"></Col>
    </Row>
  </div>
</template>


<script>
export default {
  name: "Anime",
  data() {
    return {
      iScol: "0",
      value: false, //布尔值
      hover: true,
      border: false,
      number_move:0,
      LeftUp:'0px',
      MidUp:'0px',
      RightUp:'0px',
    };
  },
  beforeMount(){
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  methods: {
    scrollToTop() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
      this.iScol = -1.8 * scrollTop;
    },
    change_st(e){ //监测各元素高度并且修改图片移动的距离
      let el_left = document.getElementById("LeftimgMoveup").children;
      // console.log(el_left[0].clientHeight);
      let el_mid = document.getElementById("midimgMoveup").children;
      // console.log(el_mid[0].clientHeight);
      let el_right = document.getElementById("rightimgMoveup").children;
      // console.log(el_right[0].clientHeight);

      let itemid = e.target.id;
      console.log(e.target.id);
      this.number_move = parseInt(itemid.slice(7))-1;
      console.log(this.number_move);


      // console.log(e.target.innerHTML);
      // if(e.target.innerHTML == '#SP'){
      //   this.number_move = 23;
      // }
      // else{
      //   this.number_move = parseInt(e.target.innerHTML.slice(1))-1;
      // }
      // console.log(this.number_move);



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
    }
}
</script>

<style scoped>
@import url("./Anime.css");
</style>