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

    <!-- 第二页选项部分 -->
    <div class="secpage" id="secendpage">
        <!-- 顶部时间部分 -->
        <div class="toptime" name="top">
            <div class="time" id="time">{{ hour + ':' + minute + ':' + second }}</div>
        </div>

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
        <div class="bottomdate">
            <div class="date" id="date">{{ currentDate }}</div>
        </div>
    </div>
</template>

<style scoped>
@import url("./Home.css");
</style>

<script>
export default{
    name:'Home',
    data() {
        return { 
            hour: '',
            minute: '',
            second: '',
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            disn:'block',
        }
    },
    mounted(){
        setTimeout(()=>{this.disn='none'},2000)
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
    // mounted() {
    //     setTimeout(this.goToHomePage, 2000),
    //     this.getCurrentTime()
    // },
    // methods: {
    //     goToHomePage() {
    //         this.$router.push({name: 'home'})
    //     },
    //     getCurrentTime() {
    //         let that = this
    //         setInterval(() => {
    //             const date = new Date()
    //             that.hour = date.getHours().toString()
    //             that.minute = that.time2str(date.getMinutes())
    //             that.second = that.time2str(date.getSeconds())
    //         }, 1000)
    //     },
    //     time2str(digit : number | String) {
    //         return ('0' + digit).slice(-2)
    //     }
    // },
    // computed: {
    //     currentDate() {
    //         const date = new Date()
    //         let year = date.getFullYear()
    //         let month = this.time2str(date.getMonth()+1)
    //         let day = this.time2str(date.getDate())
    //         let week = this.days[date.getDay()]
    //         return (year + '-' + month + '-' + day + '-' + week)
    //     }
    // }
}
</script>


