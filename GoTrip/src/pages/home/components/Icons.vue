<template>
    <div class='icons'>
         <swiper :options="swiperOption">
            <swiper-slide v-for='(page,index) in pages' :key='index'>
                <div class='icon' v-for='item in page' :key="item.id">
                    <div class='icon-img'>
                        <img class='icon-img-resource' :src='item.imgurl'>
                    </div>
                    <p class='icon-text' v-cloak>{{item.text}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
    name:'HomeIcons',
    data() {
        return {
            swiperOption: {
                loop:true
            },
            iconlist:[
                {
                    id:1,
                    imgurl:require('@/assets/img/hotview.png'),
                    text:'热门景点'
                },
                {
                    id:2,
                    imgurl:require('@/assets/img/hotel.png'),
                    text:'酒店'
                },
                 {
                    id:3,
                    imgurl:require('@/assets/img/flight.png'),
                    text:'飞机票'
                },
                 {
                    id:4,
                    imgurl:require('@/assets/img/package.png'),
                    text:'度假'
                },
                 {
                    id:5,
                    imgurl:require('@/assets/img/train.png'),
                    text:'火车票'
                },{
                    id:6,
                    imgurl:require('@/assets/img/kezhan.png'),
                    text:'客栈'
                },{
                    id:7,
                    imgurl:require('@/assets/img/kezhan.png'),
                    text:'客栈'
                },
                {
                    id:8,
                    imgurl:require('@/assets/img/kezhan.png'),
                    text:'客栈'
                },
            ],
        }
    },
    computed: {
        pages(){
            const Arrpages = [];
            this.iconlist.forEach((item,index)=>{
                if(!Arrpages[Math.floor(index/5)]){
                    Arrpages[Math.floor(index/5)]=[];
                }
                Arrpages[Math.floor(index/5)].push(item)
            })
            return Arrpages;
        }
    },  
}
</script>
<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    [v-cloak]
        display:none
    .icons >>>.swiper-container
        height:0
        padding-bottom:27%
        // background:green
        .icon
            overflow:hidden
            float:left
            width:20%
            padding-bottom:25%
            // background:red
            position:relative
            .icon-img
                position:absolute
                top:0
                left:0
                right:0
                bottom:.44rem
                // background:blue
                .icon-img-resource
                    display:block
                    height:100%
                    margin:0 auto
                    padding:5px 0
            .icon-text
                position:absolute
                left:0
                right:0
                bottom:0
                height:.44rem
                line-height:.44rem
                text-align:center
                color:$IconsTextcolor
                


</style>


