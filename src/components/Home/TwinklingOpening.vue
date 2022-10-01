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
</template>

<script>
export default {
    name:'TwinklingImg',
    data() {
        return { 
            disn:'block',
        }
    },
    mounted(){
        setTimeout(()=>{this.disn='none'},2000);
    },
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