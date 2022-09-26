<template>
    <div class="clockchangepage" :style="{display:[disn]}">
        <div class="clockchangeani">
            <!-- <img src="/src/assets/images/img_noise01.png" class="rightimg1">
            <img src="/src/assets/images/img_noise02.png" class="rightimg2">
            <img src="/src/assets/images/img_noise03.png" class="rightimg3">
            <img src="/src/assets/images/img_noise04.png" class="rightimg4"> -->
            <video class="video_clock_player" autoplay muted loop>
                <source src="\src\assets\videos\Anime\clockbgvideo.mp4" type="video/mp4" class="video_clock_source">
            </video>
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

    @import url("/src/components/globalReg/ClockRandBG.css");

</style>