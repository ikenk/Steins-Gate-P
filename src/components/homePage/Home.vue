<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return { 
            hour: '',
            minute: '',
            second: '',
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        }
    },
    mounted() {
        this.getCurrentTime()
    },
    methods: {
        getCurrentTime() {
            let that = this
            setInterval(() => {
                const date = new Date()
                that.hour = date.getHours().toString()
                that.minute = that.time2str(date.getMinutes())
                that.second = that.time2str(date.getSeconds())
            }, 1000)
        },
        time2str(digit : number | String) {
            return ('0' + digit).slice(-2)
        }
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
})
</script>



<template>
    <!-- 第二页选项部分 -->
    <div class="secpage" id="secendpage">
        <!-- 顶部时间部分 -->
        <div class="toptime" name="top">
            <div class="time" id="time">
                {{ hour + ':' + minute + ':' + second }}
            </div>
        </div>

        <!-- 选择部分的图片 -->
        <div class="middleimg" name="middle">
            <a href="#" class="lefturl">
                <div class="leftbox" name="middle">
                    <img src="../assets/imgs/left.png" class="secrightimg">
                </div>
            </a>
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
            <a href="#" class="righturl">
                <div class="rightbox" name="middle">
                    <img src="../assets/imgs/right.png" class="secrightimg">
                </div>
            </a>
        </div>


        <!-- 底部日期部分 -->
        <div class="bottomdate">
            <div class="date" id="date">{{ currentDate }}</div>
        </div>
    </div>
</template>



<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

@font-face{
    font-family:"BONX-Frame";
    src:url("@/assets/fonts/BONX-Frame.otf")format('opentype');
}
@font-face{
    font-family:"BONX-Silhouette";
    src:url("@/assets/fonts/BONX-Silhouette.otf")format('opentype');
}
@font-face{
    font-family:"BONX-Number";
    src:url("@/assets/fonts/BONX-Medium.otf")format('opentype');
}

/* 2.0 secondpage整体布局 */
.secpage{
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -15;
    background-image: url("htimg/img_noise01.png");
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
    background:rgba(0,0,0,0.6) url("htimg/Anime.png") no-repeat;
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
    background:rgba(0,0,0,0.6) url("htimg/Game.png") no-repeat;
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
</style>