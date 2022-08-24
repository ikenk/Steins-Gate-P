<template>
    <!-- 开场动画部分 -->
    <TwinklingOpening></TwinklingOpening>

    <!-- 第二页选项部分 -->
    <div class="secpage" id="secendpage">
        <!-- 顶部时间部分 -->
        <clock></clock>

        <!-- 选择部分的图片 -->
        <div class="middleimg" name="middle">
            <!-- <a href="#" class="lefturl"> -->
            <router-link to="/anime" class="lefturl">
                <div class="leftbox" name="middle">
                    <img src="/src/assets/images/left.png" class="secrightimg">
                </div>
            </router-link>
            <router-link to="/game" class="righturl">
            <!-- <a href="#" class="righturl"> -->
                <div class="rightbox" name="middle">
                    <img src="/src/assets/images/right.png" class="secrightimg">
                </div>
            <!-- </a> -->
            </router-link>
        </div>

        <!-- 底部日期部分 -->
        <Date></Date>
    </div>
</template>

<style scoped>
    @import url("./Home.css");
</style>

<script>
import Clock from '/src/components/globalReg/Clock.vue';
import Date from '/src/components/globalReg/Date.vue';
import TwinklingOpening from '/src/components/globalReg/TwinklingOpening.vue';

export default{
    name:'Home',
    components:{
    "Clock": Clock,
    "Date": Date,
    "TwinklingOpening": TwinklingOpening,
    },
}
</script>


