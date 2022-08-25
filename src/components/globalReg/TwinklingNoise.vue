<template>
    <div class="firpage"  id="firstpage" :style="{display:[disn]}">
        <div class="startani">
            <img src="/src/assets/images/img_noise01.png" class="rightimg1">
            <img src="/src/assets/images/img_noise02.png" class="rightimg2">
            <img src="/src/assets/images/img_noise03.png" class="rightimg3">
            <img src="/src/assets/images/img_noise04.png" class="rightimg4">
        </div>
    </div>
</template>

<script>
export default {
    name:'TwinklingNoise',
     data() {
        return { 
            disn:'block',
        }
    },
    // mounted(){
    //     setTimeout(()=>{this.disn='none'},2000)
    // },
}
</script>

<style scoped>

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
.rightimg1{
    position: absolute;
    width: 55%;
    height: 100%;
    animation: twinkling 0.1s  8 ;
}
.rightimg2{
    position: absolute;
    width: 15%;
    height: 100%;
    left: 55%;
    animation: twinkling 0.1s  0.2s 7 ;
}
.rightimg3{
    position: absolute;
    width: 15%;
    height: 100%;
    left: 70%;
    animation: twinkling 0.1s  0.1s 8 ;
}
.rightimg4{
    position: absolute;
    width: 15%;
    height: 100%;
    left: 85%;
    animation: twinkling 0.1s 0.2s 7 ;
}

</style>