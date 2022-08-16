<template>
    <!-- 开场动画部分 -->
    <div class="firpage"  id="firstpage" :style="{display:[disn]}">
        <div class="startani">
            <img src="/src/assets/images/ttl_logo01_1.svg" class="img1">
            <img src="/src/assets/images/ttl_logo01_3.svg" class="img2">
            <img src="/src/assets/images/ttl_logo01_sp.svg" class="img3">
            <div class="startleft">
                
            </div>
            <div class="startright">
                <img src="/src/assets/images/bg_opening00.jpg" class="rightimage0">
                <img src="/src/assets/images/bg_opening01.jpg" class="rightimage1">
                <img src="/src/assets/images/bg_opening02.jpg" class="rightimage2">
                <img src="/src/assets/images/bg_opening03.jpg" class="rightimage3">
                <img src="/src/assets/images/img_noise01.png" class="rightimg1">
                <img src="/src/assets/images/img_noise02.png" class="rightimg2">
                <img src="/src/assets/images/img_noise03.png" class="rightimg3">
                <img src="/src/assets/images/img_noise04.png" class="rightimg4">
            </div>
        </div>
    </div>

    <!-- 第二页选项部分 -->
    <div class="secpage" id="secendpage">
        <!-- 顶部时间部分 -->
        <div class="toptime" name="top">
            <div class="time" id="time">{{ hour + ':' + minute + ':' + second }}</div>
        </div>

        <!-- 选择部分的图片 -->
        <div class="middleimg" name="middle">
            <!-- <a href="#" class="lefturl"> -->
            <router-link to="/anime" class="lefturl">
                <div class="leftbox" name="middle">
                    <img src="/src/assets/images/left.png" class="secrightimg">
                </div>
            </router-link>
            <!-- </a> -->
            <!-- <div class="leftbox" name="middle">
                <a href="www.baidu.com" class="lefturl">
                    <img src="./images/left.png" class="secleftimg">
                </a>
            </div> -->
            <!-- <div class="rightbox" name="middle">
                <a href="#" class="righturl">
                    <img src="./images/right.png" class="secrightimg">
                </a>
            </div> -->
            <router-link to="/game" class="righturl">
            <!-- <a href="#" class="righturl"> -->
                <div class="rightbox" name="middle">
                    <img src="/src/assets/images/right.png" class="secrightimg">
                </div>
            <!-- </a> -->
            </router-link>
        </div>


        <!-- 底部日期部分 -->
        <div class="bottomdate">
            <div class="date" id="date">{{ currentDate }}</div>
        </div>
    </div>
</template>


<script>
export default{
    name:'Home',
    data() {
        return { 
            hour: '',
            minute: '',
            second: '',
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            disn:'block',
        }
    },
    mounted(){
        setTimeout(()=>{this.disn='none'},2000)
        this.getCurrentTime()
    },
    methods:{
        getCurrentTime(){
            let _this = this;
            setInterval(()=>{
                const date = new Date()
                _this.hour = date.getHours().toString()
                _this.minute = _this.time2str(date.getMinutes())
                _this.second = _this.time2str(date.getSeconds())
            },1000)
            
        },
        time2str(num){
            return ('0' + num).slice(-2)
        },
    },
    computed: {
        currentDate() {
            const date = new Date()
            let year = date.getFullYear()
            let month = this.time2str(date.getMonth()+1)
            let day = this.time2str(date.getDate())
            let week = this.days[date.getDay()]
            return (year + '-' + month + '-' + day + '-' + week)
        }
    }
    // mounted() {
    //     setTimeout(this.goToHomePage, 2000),
    //     this.getCurrentTime()
    // },
    // methods: {
    //     goToHomePage() {
    //         this.$router.push({name: 'home'})
    //     },
    //     getCurrentTime() {
    //         let that = this
    //         setInterval(() => {
    //             const date = new Date()
    //             that.hour = date.getHours().toString()
    //             that.minute = that.time2str(date.getMinutes())
    //             that.second = that.time2str(date.getSeconds())
    //         }, 1000)
    //     },
    //     time2str(digit : number | String) {
    //         return ('0' + digit).slice(-2)
    //     }
    // },
    // computed: {
    //     currentDate() {
    //         const date = new Date()
    //         let year = date.getFullYear()
    //         let month = this.time2str(date.getMonth()+1)
    //         let day = this.time2str(date.getDate())
    //         let week = this.days[date.getDay()]
    //         return (year + '-' + month + '-' + day + '-' + week)
    //     }
    // }
}
</script>


<style scoped>

@font-face{
    font-family:"BONX-Frame";
    src:url("/src/assets/fonts/BONX-Frame.otf")format('opentype');
}
@font-face{
    font-family:"BONX-Silhouette";
    src:url("/src/assets/fonts/BONX-Silhouette.otf")format('opentype');
}
@font-face{
    font-family:"BONX-Number";
    src:url("/src/assets/fonts/BONX-Medium.otf")format('opentype');
}

/* 0.通用样式 */
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
/* 2.0 secondpage整体布局 */
.secpage{
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -15;
    background-image: url("/src/assets/images/img_noise01.png");
    /* display: flex;
    flex-direction: column; */
}

/* 2.1 顶部时间样式 */
.toptime{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items:flex-end;
    padding: 1%;
    position: relative;
    width: 100%;
    height: 25%;
    /* background-color:aqua; */
    z-index: -2;
}
.toptime::before{
    position: absolute;
    content: "00-00-00";
    font-family: BONX-Frame;
    font-size: 15vh;
    color:#000000;
    opacity:0.5;
}
.toptime::after{
    position: absolute;
    content: "00-00-00";
    font-family: BONX-Silhouette;
    font-size: 15vh;
    color: #58120D;
    z-index: -1;
}
.time{
    position: absolute;
    font-family: BONX-Number;
    font-size: 15vh;
    color: #D9A600;
    text-shadow: -3px 0 2px #eb2900, 0 3px 2px #eb2900, 3px 0 2px #eb2900, 0 -3px 2px #eb2900;
}


/* 2.2 底部时间样式 */
.bottomdate{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 18%;
    padding: 2.3%;
    /* background-color:pink; */
    z-index: -2;
}
.bottomdate::before{
    position: absolute;
    content: "0000-00-00.000";
    font-family: BONX-Frame;
    font-size: 7.5vh;
    color:#000000;
    opacity:0.5;
}
.bottomdate::after{
    position: absolute;
    content: "0000-MM-DD.000";
    font-family: BONX-Silhouette;
    font-size: 7.5vh;
    color: #58120D;
    z-index: -1;
}
.date{
    position: absolute;
    font-family: BONX-Number;
    font-size: 7.5vh;
    color: #D9A600;
    text-shadow: -3px 0 2px #eb2900, 0 3px 2px #eb2900, 3px 0 2px #eb2900, 0 -3px 2px #eb2900;
}

/* 2.3 图片样式 */
.middleimg{
    width: 100%;
    height: 57%;
    /* background-color: #eb2900; */
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
}
.middleimg .leftbox{
    display: flex;
    position: relative;
    transition: all 1s;
}
.middleimg .rightbox{
    display: flex;
    position: relative;
    transition: all 1s;
}
    /* 2.3(1) 左图样式 */
.middleimg .leftbox::before{
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    /* background-color:rgba(0,0,0,0.8); */
    background:rgba(0,0,0,0.6) url("/src/assets/images/Anime.png") no-repeat;
    background-size: 53%;
    background-position: 16% 18%;

}
    /* 2.3(2) 右图样式 */
.middleimg .rightbox::before{
    position: absolute;
    /* content: "Game"; */
    content: "";
    width: 100%;
    height: 100%;
    /* background-color:rgba(0,0,0,0.6); */
    background:rgba(0,0,0,0.6) url("/src/assets/images/Game.png") no-repeat;
    background-size: 50%;
    background-position: 80% 9%;
}

/* 将左右url<a>改为flex，以便修改尺寸 */
.lefturl{
    display:flex;
}
.righturl{
    display:flex;
}

    /* 2.3(3) 鼠标效果 */
    /* before鼠标效果---mask消失 */
.leftbox:hover::before{
    animation: opac 1.9s 0.1s  forwards;
}
.rightbox:hover::before{
    animation: opac 1.9s 0.1s  forwards;
}
    /* left/right box鼠标效果---图片悬浮 */
.leftbox:hover {
    box-shadow: 0 16px 26px  rgba(48, 55, 66, 0.8);/* 鼠标悬浮时盒子出现的阴影 */
    transform: translate(0, -3px);/* 鼠标悬浮时盒子上移10px */
}
.rightbox:hover {
    box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.8);/* 鼠标悬浮时盒子出现的阴影 */
    transform: translate(0, -3px);/* 鼠标悬浮时盒子上移10px */
}

    /* 2.3(4) 动画效果 */
    /* mask消失动画 */
@keyframes opac {
    100%{
        opacity: 0;   
    }
}


/* 1.0 firstpage整体布局 */
.firpage{
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -10;
    /* background: black; */
    /* background-image: url("./images/img_noise01.png"); */
}


/* 1.1总体窗口布局 */
.startani{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    flex-flow: row nowrap;
}

/* 左右窗口布局 */
.startleft{
    position: relative;
    width: 50%;
    height: 100%;
    /* background-color: aqua; */
}
.startright{
    position: relative;
    width: 50%;
    height: 100%;
    background-color:white;
}

/* steinsgate图标样式 */
img[class^="img"]{
    position: absolute;
    width: 35%;
    top: 50%;
    left: 50%;
    transform:translate(-80%,-50%);
    z-index: 10;
}


/* rightimg样式 */
img[class^="rightimg"]{
    position: absolute;
    height: 100%;
    right:0;
}


/* rightimages样式 */
img[class^="rightimage"]{
    position: absolute;
    height: 100%;
}
.rightimage0{
    z-index: 4;
}
.rightimage1{
    z-index: 3;
}
.rightimage2{
    z-index: 2;
}
.rightimage3{
    z-index: 1;
}


/* 闪烁动画 */
@-webkit-keyframes twinkling{ 
    0%{ 
        opacity: 0.5; 
    } 
    100%{ 
        opacity: 1; 
    } 
} 
@keyframes twinkling{ 
    0%{ 
        opacity: 0.5; 
    } 
    100%{ 
        opacity: 1; 
    } 
}

/* 移位动画 */
@-webkit-keyframes move{ 
    100%{ 
        transform: translate(-2%,-2%); 
    } 
} 
@keyframes move{ 
    100%{ 
        transform: translate(0,-2%); 
    } 
}

/* 各部分闪烁和为宜 */
.img1{
    animation: twinkling 0.1s 6 ;
}
.img2{
    animation: twinkling 0.1s 0.2s 6 ;
}
.img3{
    animation: twinkling 0.1s 0.2s 6 ;
}
.rightimage0{
    animation: twinkling 0.1s 0.2s 5 , move 0.1s 0.2s;
}
.rightimage1{
    animation: twinkling 0.1s 0.2s 3 ;
}
.rightimage2{
    animation: twinkling 0.1s 0.2s 3 , move 0.1s 0.5s 5;
}
.rightimage3{
    /* animation: twinkling 0.1s 0.1s 5 ; */
    animation: move 0.1s 0.6s ;
}
.rightimg1{
    animation: twinkling 0.1s  6 ;
}
.rightimg2{
    animation: twinkling 0.1s  0.2s 6 ;
}
.rightimg3{
    animation: twinkling 0.1s  0.1s 6 ;
}
.rightimg4{
    animation: twinkling 0.1s 0.2s 6 ;
}

</style>