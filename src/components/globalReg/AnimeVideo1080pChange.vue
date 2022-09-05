<template>
<!-- 1080p video切换 -->
<Row class="video_1080p_change_box">
    <img src="/src/assets/images/video_bgimg.png" class="video_1080p_bgimg">
    <Row class="video_1080p_change">
        <video class="video_1080p_player" controls autoplay muted loop>
            <source :src="VideoUrl" type="video/mp4" class="video_1080p_source">
        </video>
    </Row>
</Row>
</template>

<script>
export default {
    name:'AnimeVideo1080pChange',
    props:[
        'VideoUrl',
    ],
}
</script>

<style>

    /* 横屏1080p视频样式 */
    .video_1080p_change_box{
        position: fixed;
        left: 0vw;
        top: 0vw;
        width: 100vw;
        height: 100vh;
        z-index:99;
    }

    .video_1080p_bgimg{
        position: absolute;
        width: auto;
        height: auto;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
    }

    .video_1080p_change_box::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-color:rgba(0,0,0,0.8);
        z-index: 0;
    }

    .video_1080p_change{
        width: 100vw;
        height: 100vh;
    }

    .video_1080p_player{
        width: 100vw;
        height: 100vh;
        z-index: 1;
    }

    .video_1080p_source{
        height: 100%;
    }

</style>