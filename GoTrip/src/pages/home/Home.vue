<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <icons></icons>
        <icons2></icons2>
    </div>   
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import Icons from './components/Icons'
import Icons2 from './components/icons2'

export default {
    name:'Home',
    data(){
        return{

        }
    },
    components:{
        HomeHeader:HomeHeader,
        HomeSwiper:HomeSwiper,
        Icons:Icons,
        Icons2:Icons2,
    }
}
</script>
<style>

</style>

