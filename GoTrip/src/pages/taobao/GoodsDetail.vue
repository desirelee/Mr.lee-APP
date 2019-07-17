<template>
    <div>
        <img-swiper :imglist='imgList'></img-swiper>
    </div>
</template>
<script>
import ImgSwiper from './components/taobaoimg'
import axios from 'axios'

export default {
    name:'taobao',
    data() {
        return {
            imgList:[]
        }
    },
    methods:{
        getTaobaoInfo(){
            axios.get('/static/test/taobaolist.json').then(this.getTaobaoInfoSucc)
        },
        getTaobaoInfoSucc(res){
            if(res.data.ret==true && res.data){
                this.imgList = res.data.airjordanimg;
            }
        }

    },
    mounted(){
        this.getTaobaoInfo();
    },
    components:{
        ImgSwiper:ImgSwiper
    }
}
</script>
<style scoped>

</style>

