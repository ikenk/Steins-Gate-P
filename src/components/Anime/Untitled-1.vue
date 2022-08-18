*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

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
        <Row class="SCSC">
            <Row class="beta_timeline">
                <Row class="b_story">
                    <Row class="b_st_title">
                        <Col span="8" ></Col>
                        <Col span="8" >
                            <Row class="b_t_img"></Row>
                        </Col>
                        <Col span="8" ></Col>
                    </Row>
                    <Row class="b_st_body"></Row>
                    <Row class="b_st_footer"></Row>
                </Row>
                <Row class="b_characters"></Row>
                <Row class="b_footer"></Row>
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
        <Row class="product">
        </Row>
        <br />
        <Row class="footer">
        </Row>
        <!-- <div class="SCSC">
                    <div class="beta_timeline">
                        <div class="story">
                            <div class="b_st_title"></div>
                            <div class="b_st_body"></div>
                            <div class="b_st_footer"></div>
                        </div>
                        <div class="characters"></div>
                        <div class="staff-cast"></div>
                    </div>
                    <div class="alpha_timeline">
                        <div class="story"></div>
                        <div class="characters"></div>
                        <div class="staff-cast"></div>
                    </div>
                </div>
                <div class="product"></div>
                <div class="footer"></div> -->
      </div>
    </div>
    <div class="navbtn_is_show"></div>
    <div class="nav"></div>
  </div>
</template>
