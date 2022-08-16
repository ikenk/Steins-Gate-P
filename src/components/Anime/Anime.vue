<template>
    <div class="container">
        <div class="bg_img" :style="{top: iScol + 'px'}" >
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
                <div class="SCSC">
                    <!-- <Switch v-model="value" @on-change="change" class="switch_timeline"/> -->
                    <div class="alpha_timeline">
                        <div class="story"></div>
                        <div class="characters"></div>
                        <div class="staff-cast"></div>
                    </div>
                    <div class="beta_timeline">
                        <div class="story"></div>
                        <div class="characters"></div>
                        <div class="staff-cast"></div>
                    </div>
                </div>
                <div class="product"></div>
                <div class="footer"></div>
            </div>
        </div>
        <div class="navbtn_is_show"></div>
        <div class="nav"></div>
    </div>
</template>


<script>
export default {
    name:'Anime',
    data(){
        return{
            iScol:'0',
            value: false,//布尔值
        }
    },
    mounted () {
        window.addEventListener('scroll', this.scrollToTop)
    },
    methods:{
        scrollToTop() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            console.log(scrollTop)
            this.iScol = -1.8*scrollTop
        },
        change (status) {
                this.$Message.info('开关状态：' + status);
                //value与status无直接关系，即使注释掉上面一句也可以打印出value
                console.log(this.value);
                
        },
    }



}
</script>

<style scoped>
/* 0.通用样式 */
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}


/* 1.背景样式 */
.bg_img{
    position: absolute;
    width: 100vw;
    height: 50000px;
    z-index: -1000;
}

.bg_img .bg_longimg{
    position: absolute;
    top:0;
    left: 0;
    width: 100vw;
    height: 50000px;
    background-image: url("/src/assets/images/bg_mainbg01.jpg");
    background-size: contain;
    background-repeat: repeat-y;
    z-index: -999;
}

.bg_img .bg_grayimg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50000px;
    background-color: rgba(0,0,0,0.85);
    z-index: -998;
}

.bg_img .bg_pointimg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50000px;
    background-image: url("/src/assets/images/whitepoint.png");
    opacity: 0.15;
    z-index: -997;
}

/* 2.Top图样式 */
.top_img{
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color:white;
    /*opacity: 0.9;*/
}
/* 2.1 Top-left图样式 */
.top_img .top_img_left{
    position: absolute;
    top:0;
    left: 0;
    width: 40vw;
    height: 100vh;
    background-image: url("/src/assets/images/ttl_logo01_sp.svg");
    background-repeat: no-repeat;
    background-position: center;
}
/* 2.2 Top-right图样式 */
.top_img .top_img_right{
    position: absolute;
    top:0;
    right:0;
    width: 60vw;
    height: 100vh;
    background-image: url("/src/assets/images/bg_hero00.png");
    background-position: right center;
    background-size: cover;
    background-repeat: no-repeat;
}


/*3.story/character/staff/cast样式*/
.switch_timeline{
    width: 100vw;
    height: 100vh;
    
}

.alpha_timeline{
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
}


</style>