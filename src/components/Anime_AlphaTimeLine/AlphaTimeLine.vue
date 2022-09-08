<template>
<!-- alpha时间线 -->
<Row class="alpha_timeline">
    <!-- story部分 -->
    <Row class="a_story" id="a_story">
        <Row class="a_st_title">
            <Col span="8"></Col>
            <Col span="8">
                <Row class="a_t_img"></Row>
            </Col>
            <Col span="8"></Col>
        </Row>
        <Row class="a_st_body">
            <Row class="body_text">
                <ul class="textbody">
                    <li class="storytxt01"><div></div></li>
                    <li class="storytxt02"><div></div></li>
                    <li class="storytxt03"><div></div></li>
                    <li class="storytxt04"><div></div></li>
                    <li class="storytxt05"><div></div></li>
                    <li class="storytxt06"><div></div></li>
                    <li class="storytxt07"><div></div></li>
                    <li class="storytxt08"><div></div></li>
                    <li class="storytxt09"><div></div></li>
                    <li class="storytxt10"><div></div></li>
                    <li class="storytxt11"><div></div></li>
                    <li class="storytxt12"><div></div></li>
                    <li class="storytxt13"><div></div></li>
                    <li class="storytxt14"><div></div></li>
                    <li class="storytxt15"><div></div></li>
                    <li class="storytxt16"><div></div></li>
                    <li class="storytxt17"><div></div></li>
                    <li class="storytxt18"><div></div></li>
                    <li class="storytxt19"><div></div></li>
                    <li class="storytxt20"><div></div></li>
                    <li class="storytxt21"><div></div></li>
                    <li class="storytxt22"><div></div></li>
                    <li class="storytxt23"><div></div></li>
                    <li class="storytxt24"><div></div></li>
                    <li class="storytxt25"><div></div></li>
                </ul>
            </Row>
            <Row class="body_img">
                <Row class="body_slideimg">
                <Col span="15" class="slideimg_left">
                    <div class="leftimg" :style="{ transform: `translateY(${LeftUp})` }">
                    <ul class="leftimg_moveup" id="LeftimgMoveup">
                    <li v-for="leftimg_moveup in leftimgs_moveup" :key="leftimg_moveup.id">
                        <img :src="leftimg_moveup.src">
                    </li>
                    </ul>
                    </div>
                </Col>
                <Col span="6" class="slideimg_middle">
                    <Row class="midimg" :style="{ transform: `translateY(${MidUp})` }">
                        <Row class="midimg_movedown" id="midimgMoveup">
                            <img src="/src/assets/images/img_story01_02.png"/>
                            <img src="/src/assets/images/img_story02_02.png"/>
                            <img src="/src/assets/images/img_story03_02.png"/>
                            <img src="/src/assets/images/img_story04_02.png"/>
                            <img src="/src/assets/images/img_story05_02.png"/>
                            <img src="/src/assets/images/img_story06_02.png"/>
                            <img src="/src/assets/images/img_story07_02.png"/>
                            <img src="/src/assets/images/img_story08_02.png"/>
                            <img src="/src/assets/images/img_story09_02.png"/>
                            <img src="/src/assets/images/img_story10_02.png"/>
                            <img src="/src/assets/images/img_story11_02.png"/>
                            <img src="/src/assets/images/img_story12_02.png"/>
                            <img src="/src/assets/images/img_story13_02.png"/>
                            <img src="/src/assets/images/img_story14_02.png"/>
                            <img src="/src/assets/images/img_story15_02.png"/>
                            <img src="/src/assets/images/img_story16_02.png"/>
                            <img src="/src/assets/images/img_story17_02.png"/>
                            <img src="/src/assets/images/img_story18_02.png"/>
                            <img src="/src/assets/images/img_story19_02.png"/>
                            <img src="/src/assets/images/img_story20_02.png"/>
                            <img src="/src/assets/images/img_story21_02.png"/>
                            <img src="/src/assets/images/img_story22_02.png"/>
                            <img src="/src/assets/images/img_story23_02.png"/>
                            <img src="/src/assets/images/img_story24_02.png"/>
                            <img src="/src/assets/images/img_story25_02.png"/>
                        </Row>
                    </Row>
                </Col>
                <Col span="3" class="slideimg_right">
                    <div class="rightimg" :style="{ transform: `translateY(${RightUp})` }">
                        <ul class="rightimg_moveup" id="rightimgMoveup">
                            <li v-for="rightimg_moveup in rightimgs_moveup" :key="rightimg_moveup.id">
                            <img :src="rightimg_moveup.src">
                            </li>
                        </ul>
                    </div>
                </Col>
                </Row>
            </Row>
        <Row class="a_st_footer">
            <a class="num_nav">
            <Grid :border="true" :col="15" padding="0" square @click="change_st($event)">
                <GridItem id="navItem01" class="Item"></GridItem>
                <GridItem id="navItem02" class="Item"></GridItem>
                <GridItem id="navItem03" class="Item"></GridItem>
                <GridItem id="navItem04" class="Item"></GridItem>
                <GridItem id="navItem05" class="Item"></GridItem>
                <GridItem id="navItem06" class="Item"></GridItem>
                <GridItem id="navItem07" class="Item"></GridItem>
                <GridItem id="navItem08" class="Item"></GridItem>
                <GridItem id="navItem09" class="Item"></GridItem>
                <GridItem id="navItem10" class="Item"></GridItem>
                <GridItem id="navItem11" class="Item"></GridItem>
                <GridItem id="navItem12" class="Item"></GridItem>
                <GridItem id="navItem13" class="Item"></GridItem>
                <GridItem id="navItem14" class="Item"></GridItem>
                <GridItem id="navItem15" class="Item"></GridItem>
                <GridItem id="navItem16" class="Item"></GridItem>
                <GridItem id="navItem17" class="Item"></GridItem>
                <GridItem id="navItem18" class="Item"></GridItem>
                <GridItem id="navItem19" class="Item"></GridItem>
                <GridItem id="navItem20" class="Item"></GridItem>
                <GridItem id="navItem21" class="Item"></GridItem>
                <GridItem id="navItem22" class="Item"></GridItem>
                <GridItem id="navItem23" class="Item"></GridItem>
                <GridItem id="navItem24" class="Item"></GridItem>
                <GridItem id="navItem25" class="Item"></GridItem>
            </Grid>
            </a>
        </Row>
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
        <Row class="a_charas_body"></Row>
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
</template>

<script>
export default {
    name:'AlphaTimeLine',

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
                {id:1, src:'/src/assets/images/img_story01_01.png'},
                {id:2, src:'/src/assets/images/img_story02_01.png'},
                {id:3, src:'/src/assets/images/img_story03_01.png'},
                {id:4, src:'/src/assets/images/img_story04_01.png'},
                {id:5, src:'/src/assets/images/img_story05_01.png'},
                {id:6, src:'/src/assets/images/img_story06_01.png'},
                {id:7, src:'/src/assets/images/img_story07_01.png'},
                {id:8, src:'/src/assets/images/img_story08_01.png'},
                {id:9, src:'/src/assets/images/img_story09_01.png'},
                {id:10, src:'/src/assets/images/img_story10_01.png'},
                {id:11, src:'/src/assets/images/img_story11_01.png'},
                {id:12, src:'/src/assets/images/img_story12_01.png'},
                {id:13, src:'/src/assets/images/img_story13_01.png'},
                {id:14, src:'/src/assets/images/img_story14_01.png'},
                {id:15, src:'/src/assets/images/img_story15_01.png'},
                {id:16, src:'/src/assets/images/img_story16_01.png'},
                {id:17, src:'/src/assets/images/img_story17_01.png'},
                {id:18, src:'/src/assets/images/img_story18_01.png'},
                {id:19, src:'/src/assets/images/img_story19_01.png'},
                {id:20, src:'/src/assets/images/img_story20_01.png'},
                {id:21, src:'/src/assets/images/img_story21_01.png'},
                {id:22, src:'/src/assets/images/img_story22_01.png'},
                {id:23, src:'/src/assets/images/img_story23_01.png'},
                {id:24, src:'/src/assets/images/img_story24_01.png'},
                {id:25, src:'/src/assets/images/img_story25_01.png'},
            ],//v-for展示左侧滑动图片
            rightimgs_moveup:[
                {id:1, src:'/src/assets/images/img_story01_03.png'},
                {id:2, src:'/src/assets/images/img_story02_03.png'},
                {id:3, src:'/src/assets/images/img_story03_03.png'},
                {id:4, src:'/src/assets/images/img_story04_03.png'},
                {id:5, src:'/src/assets/images/img_story05_03.png'},
                {id:6, src:'/src/assets/images/img_story06_03.png'},
                {id:7, src:'/src/assets/images/img_story07_03.png'},
                {id:8, src:'/src/assets/images/img_story08_03.png'},
                {id:9, src:'/src/assets/images/img_story09_03.png'},
                {id:10, src:'/src/assets/images/img_story10_03.png'},
                {id:11, src:'/src/assets/images/img_story11_03.png'},
                {id:12, src:'/src/assets/images/img_story12_03.png'},
                {id:13, src:'/src/assets/images/img_story13_03.png'},
                {id:14, src:'/src/assets/images/img_story14_03.png'},
                {id:15, src:'/src/assets/images/img_story15_03.png'},
                {id:16, src:'/src/assets/images/img_story16_03.png'},
                {id:17, src:'/src/assets/images/img_story17_03.png'},
                {id:18, src:'/src/assets/images/img_story18_03.png'},
                {id:19, src:'/src/assets/images/img_story19_03.png'},
                {id:20, src:'/src/assets/images/img_story20_03.png'},
                {id:21, src:'/src/assets/images/img_story21_03.png'},
                {id:22, src:'/src/assets/images/img_story22_03.png'},
                {id:23, src:'/src/assets/images/img_story23_03.png'},
                {id:24, src:'/src/assets/images/img_story24_03.png'},
                {id:25, src:'/src/assets/images/img_story25_03.png'},
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
    },
}
</script>

<style scoped>

    @import url("./AlphaTimeLine.css");

</style>