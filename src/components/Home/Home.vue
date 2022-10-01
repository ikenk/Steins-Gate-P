<template>
    <!-- 开场动画部分 -->
    <TwinklingOpening v-if="display[0]"></TwinklingOpening>

    <ThreeDOpening v-if="display[1]" @ParticleClick="particleclick"></ThreeDOpening>

    <!-- 第二页选项部分 -->
    <Select v-if="display[2]"></Select>
</template>

<script>
import TwinklingOpening from '/src/components/Home/TwinklingOpening.vue';
import ThreeDOpening from "./3DOpening.vue";
import Select from "./Select.vue";

export default{
    name:'Home',

    components:{
    "TwinklingOpening": TwinklingOpening,
    "ThreeDOpening": ThreeDOpening,
    "Select": Select,
    },

    data(){
        return{
            display:[0,1,0],
            click_num:0,
        }
    },

    mounted(){
        setTimeout(() => {
            this.display[0] = 0;
            // this.display[1] = 1;
        }, 2000);
    },

    methods:{
        particleclick(){
            if(this.click_num >= 2){
                console.log(2);
                return ;
            }
            if(this.click_num ===1){
                console.log(1);
                setTimeout(() => {
                    this.display[2] = 1;
                    this.display[1] = 0;
                }, 2000);
            }

            this.click_num += 1;
            console.log(this.click_num);
        },
    },

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

    /* 1.0 firstpage整体布局 */

    /* 1.1总体窗口布局 */



    /* 2.0 secondpage整体布局 */
    .secpage{
        position: absolute;
        width: 100vw;
        height: 100vh;
        z-index: -15;
        /* background-color: rgb(17, 17, 17); */
        /* background-image: url("/src/assets/images/5-石头门0 OP2-1080P 高清-AVC.jpg"); */
        background-size: 15% auto;
    }

    .secpage::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.6);
    }

    /* 2.1 顶部时间样式 */

    /* 2.2 底部时间样式 */

    /* 2.3 图片样式 */
    .middleimg{
        width: 100vw;
        height: 100vh;
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
        background:rgba(0,0,0,0.6) url("/src/assets/images/Anime.png") no-repeat;
        background-size: 53%;
        background-position: 16% 18%;

    }
        /* 2.3(2) 右图样式 */
    .middleimg .rightbox::before{
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background:rgba(0,0,0,0.6) url("/src/assets/images/Game.png") no-repeat;
        background-size: 50%;
        background-position: 80% 9%;
    }

    /* 将左右url<a>改为flex，以便修改尺寸 */
    .lefturl{
        display:flex;
        width: 100vw;
        height: 100vh;
        justify-content: flex-end;
    }
    .righturl{
        display:flex;
        width: 100vw;
        height: 100vh;
        justify-content: flex-start;
    }

    .middleimg img{
        width: 50vw;
        height: 100vh;
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

