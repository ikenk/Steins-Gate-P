<template>
    <!-- 时钟切换 -->
    <Row class="clock_change_box">
      <Row class="clock_change" v-show="ClockChangeDis">
        <ClockRand class="clock_click"></ClockRand>
        <TwinklingNoise class="twinkle_noise"></TwinklingNoise>
      </Row>
    </Row>
</template>

<script>
export default {
    name:"ClockChangeAni",
}
</script>

<style scoped>

/* 时钟切换样式 */
  .clock_change_box{
    position: fixed;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index:1001;
  }
  .clock_change{
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgb(254, 253, 253);
  }

  .clock_click{
    position: absolute;
    width: 100%;
    top:10vw;
    z-index: 200;
    transform: scale(2);
  }

  .twinkle_noise{
    position: absolute;
    width: 100%;
    z-index: 199;
  }

</style>