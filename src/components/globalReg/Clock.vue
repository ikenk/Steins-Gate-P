<template>
    <!-- 顶部时间部分 -->
    <div class="toptime" name="top">
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
        }
    },
    mounted(){
        this.getCurrentTime()
    },
    methods:{
        getCurrentTime(){
            let _this = this;
            setInterval(()=>{
                const date = new Date()
                _this.hour = _this.time2str(date.getHours())
                _this.minute = _this.time2str(date.getMinutes())
                _this.second = _this.time2str(date.getSeconds())
            },1000)
            
        },
        time2str(num){
            return ('0' + num).slice(-2)
        },
    },
}
</script>

<style scoped>
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