<template>
    <div class="container" @touchstart.self='touchstartEvent'>
        <div class='icon-container' @touchstart.prevent='touchstartEvent'><span class='iconfont back-icon'>&#xe657;</span></div>
        <div class='wrapper'>
            <swiper :options="swiperOption">
                <swiper-slide v-for='item of imglist' :key="item.id">
                    <img :src="item.imgurl" class='swiper-img'>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination">
                </div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
             swiperOption:{
                loop:false,
                 pagination: {
                    el: '.swiper-pagination',
                    type:'fraction',
                    bulletElement : 'li',
                }
            },
        }
    },
    methods: {
        touchstartEvent(){
                this.$emit('closethis');}
    },
    props:{imglist:Array}
}
</script>
<style lang="stylus" scoped>
    .container
        display:flex
        flex-direction:column
        justify-content:center
        position:fixed
        z-index:99
        padding:0
        bottom:0
        top:0
        left:0
        right:0
        background:black
        .icon-container
            position:fixed
            z-index:99
            top:0
            right:0
            margin-top:0.2rem
            margin-right:0.1rem
            .back-icon
                color:white
                font-size:0.5rem
        .wrapper >>>.swiper-pagination-fraction
            position:fixed
            width:10%
            left:7rem
            height:0.4rem
            line-height:0.4rem
            letter-spacing:0px
            color:white
            left:0
            top:0
            margin-top:0.2rem
            margin-left:0.1rem
        .wrapper
            height:0
            padding-bottom:100%
            overflow:hidden
            // background:white
            height:100px
            .swiper-img
                width:100%

    
</style>
