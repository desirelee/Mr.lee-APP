<template>
    <div class='wrapper'>
         <div class='advising iconfont'>&#xe662;<span>广告</span></div>
        <swiper :options="swiperOption">
            <swiper-slide v-for='item of swiperList' :key="item.id">
                <img :src="item.imgurl" class='swiper-img'>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination">
            </div>
        </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeSwiper',
    data(){
        return{
            swiperOption: {
                loop:true,
                autoplay:true,
                pagination: {
                    el: '.swiper-pagination',
                    bulletElement : 'li',
                    dynamicBullets: true,
                }
            },
            swiperList:[
                {
                    id:1,
                    imgurl:require('@/assets/img/1.jpg'),
                },
                {
                    id:2,
                    imgurl:require('@/assets/img/2.jpg'),
                },
                {
                    id:3,
                    imgurl:require('@/assets/img/3.jpg'),
                },
                {
                    id:4,
                    imgurl:require('@/assets/img/4.jpg'),
                },
                {
                    id:5,
                    imgurl:require('@/assets/img/5.jpg'),
                }
            ],
            computed:{
                swiper() {
                    return this.$refs.mySwiper.swiper
                 }
            },
            mounted() {
                this.swiper.slideTo(3,1000,false)
            },

        }
    }
}
</script>
<style lang='stylus' scoped>
    .wrapper >>>.swiper-pagination-bullet-active
                    background-color:red
                    opacity:0.7
    .wrapper >>>li.swiper-pagination-bullet-active-prev,
                li.swiper-pagination-bullet-active-prev-prev,
                li.swiper-pagination-bullet-active-next,
                li.swiper-pagination-bullet-active-next-next
                    background-color:#333
                    opacity:0.9
    .wrapper
        width:100%
        height:0
        overflow:hidden
        padding-bottom:30%
        position:relative
        .swiper-img
            width:100%
    div.advising
        position:absolute
        background-color:#2d5f72
        line-height:0.3rem
        padding:0.05rem 0.07rem
        font-size:0.2rem
        left:0
        bottom:0rem
        opacity:0.7
        color:white
        z-index:10
        

       

            
</style>

