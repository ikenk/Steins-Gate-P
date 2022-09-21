<template>
    <!-- 顶部时间部分 -->
    <div class="toptime" name="top" ref="ClockRand">
        <div class="time" id="time">{{ hour + ':' + minute + ':' + second }}</div>
    </div>
</template>

<script>
export default {
    name:'Clock',
    data() {
        return { 
            hour: '',
            minute: '',
            second: '',
            timesRun:0,
        }
    },
    mounted(){
        // setTimeout(()=>{
        //     this.getRandomTime()
        // },500)
        this.getRandomTime();
        // this.stopRandomTime();
    },
    methods:{
        getRandomTime(){
            let _this = this;
            let intervalTime = setInterval(()=>{
                _this.timesRun += 1;
                console.log(_this.timesRun);
                if(_this.timesRun === 11){
                    _this.timesRun = 0;
                    clearInterval(intervalTime);
                }
                let rand_hour = Math.floor(Math.random()*24);
                let rand_min = Math.floor(Math.random()*60);
                let rand_sec = Math.floor(Math.random()*60);
                _this.hour = _this.time2str(rand_hour);
                _this.minute = _this.time2str(rand_min);
                _this.second = _this.time2str(rand_sec);
            },50);
        },
        time2str(num){
            return ('0' + num).slice(-2);
        },
        // stopRandomTime(){
        //     setTimeout(()=>{
        //         this.getRandomTime()
        //     },800);

        // },
    },
}
</script>

<style scoped>
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

        /* 2.1 顶部时间样式 */
    .toptime{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items:flex-end;
        padding: 0%;
        position: relative;
        width: 100%;
        height: 25%;
        z-index: -2;
    }
    .toptime::before{
        position: absolute;
        content: "00-00-00";
        font-family: "BONX-Frame";
        font-size: 15vh;
        color:#000000;
        opacity:0.5;
    }
    .toptime::after{
        position: absolute;
        content: "00-00-00";
        font-family: "BONX-Silhouette";
        font-size: 15vh;
        color: #58120D;
        z-index: -1;
    }
    .time{
        position: absolute;
        font-family: "BONX-Number";
        font-size: 15vh;
        color: #D9A600;
        text-shadow: -3px 0 2px #eb2900, 0 3px 2px #eb2900, 3px 0 2px #eb2900, 0 -3px 2px #eb2900;
        
    }
</style>