<template>
    <div><router-view></router-view></div>
</template>


<script>
import Anime from './components/Anime/Anime.vue'


export default {
    name:'MyApp',

    components:{
        'Anime':Anime,
    }
}

</script>



<style scoped>

</style>
