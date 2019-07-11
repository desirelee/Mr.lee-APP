<template>
    <div>
        <home-header :selectcity='selectCity'></home-header>
        <home-swiper></home-swiper>
        <icons></icons>
        <icons2 :iconlist='iconlist'></icons2>
        <hot-title></hot-title>
    </div>   
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import Icons from './components/Icons'
import Icons2 from './components/icons2'
import HotTitle from './components/HotTitle'
import axios from 'axios'

export default {
    name:'Home',
    data(){
        return{
            iconlist:[],
            selectCity:''
        }
    },
    components:{
        HomeHeader:HomeHeader,
        HomeSwiper:HomeSwiper,
        Icons:Icons,
        Icons2:Icons2,
        HotTitle:HotTitle,
    },
    methods:{
        getHomeInfo(){
            axios.get('/static/test/index.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            if(res.data.ret && res.data){
                this.iconlist = res.data.iconlist;//////传入图标列表中
                this.selectCity = res.data.city;
            }
        }
    },
    mounted() {
        this.getHomeInfo()
    },

}
</script>
<style>

</style>

