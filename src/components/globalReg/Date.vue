<template>
    <!-- 底部日期部分 -->
    <div class="bottomdate">
        <div class="date" id="date">{{ currentDate }}</div>
    </div>
</template>

<script>
export default {
    name:'Date',
    data() {
        return { 
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        }
    },
    // mounted(){
    //     setTimeout(()=>{this.disn='none'},2000)
    // },
    methods:{
        time2str(num){
            return ('0' + num).slice(-2)
        },
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
}
</script>

<style scoped>

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
    font-family: "BONX-Frame";
    font-size: 7.5vh;
    color:#000000;
    opacity:0.5;
}
.bottomdate::after{
    position: absolute;
    content: "0000-MM-DD.000";
    font-family: "BONX-Silhouette";
    font-size: 7.5vh;
    color: #58120D;
    z-index: -1;
}
.date{
    position: absolute;
    font-family: "BONX-Number";
    font-size: 7.5vh;
    color: #D9A600;
    text-shadow: -3px 0 2px #eb2900, 0 3px 2px #eb2900, 3px 0 2px #eb2900, 0 -3px 2px #eb2900;
}

</style>