<template>
<div class='swiper-header'>
    <div class='wrapper' @click.prevent="showGallery">
        <div class='header'>
            <div class='header-left'><span class='back-icon iconfont'>&#xe672;</span></div>
            <div class='header-right'><span class='shopping-icon iconfont'>&#xe63f;</span></div>
        </div>
        <div class='pagecolor'></div>
        <swiper :options="swiperOption">
            <swiper-slide v-for='item of imglist' :key="item.id">
                <img :src="item.imgurl" class='swiper-img'>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination">
            </div>
        </swiper>
    </div>
    <transition name='fade'>
        <swiper-gallery :imglist='imglist' v-if='galleryshow' @closethis='closeGallery'></swiper-gallery>
    </transition>
    <div><h1>{{$route.params.id}}</h1></div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
import swiperGallery from '../../swipergallery/swipergallery'

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
            galleryshow:false

        }
    },
    methods: {
        showGallery(){
            this.galleryshow=true;
        },
        closeGallery(){
            this.galleryshow=false;
        }
    },
    components:{
        swiperGallery
    },
    computed:{

    },
    mounted() {
        console.log(this.imglist)
    },
    props:{imglist:Array}
}
</script>
<style lang='stylus' scoped>
        .fade-leave-to,
        .fade-enter
            transform: translateY(-50px)
            opacity:0
        .fade-enter-active,
        .fade-leave-active
            transition:all 0.3s ease;
        .wrapper >>>.swiper-pagination-fraction
            left:6.5rem
            width:10%
            height:0.4rem
            line-height:0.4rem
            border-radius:0.2rem
            letter-spacing:-1.5px
            color:white
            background: rgba(100,100,100,.6)
        .wrapper
            height:0
            overflow:hidden
            padding-bottom: 100%
            position:relative
            .swiper-img
                width:100%
        .header 
            position:absolute
            top:0.3rem
            width:100%
            z-index:99
            .header-left
                float:left
                margin-left:0.3rem
                height:0.8rem
                width:0.8rem
                border-radius:0.7rem
                background:#333
                opacity:0.5
                line-height:0.8rem
                text-align:center
                .back-icon
                    padding-right:0.05rem
                    color:white
                    font-size:0.5rem
            .header-right
                float:right
                margin-right:0.3rem
                height:0.8rem
                width:0.8rem
                border-radius:0.7rem
                background:#333
                opacity:0.5
                line-height:0.8rem
                text-align:center
                .shopping-icon
                    // padding-right:0.05rem
                    color:white
                    font-size:0.5rem
    
</style>
