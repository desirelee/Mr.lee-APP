<template>
    <div class='icons'>
        <div :class="item.id<=5?'icon':'icon-xs'" v-for='(item) in iconlist' :key="item.id">
            <div :class="item.id<=5?'icon-img':'icon-img-xs'">
                <img :class="item.id<=5?'icon-img-resource':'icon-img-resource-xs'" :src='item.imgurl'>
            </div>
            <p :class="item.id<=5?'icon-text':'icon-text-xs'" v-cloak>{{item.text}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeIcons2',
    data() {
        return {
            iconlist:[
                {
                    id:1,
                    imgurl:require('@/assets/img/group.png'),
                    text:'特惠酒店'
                },
                {
                    id:2,
                    imgurl:require('@/assets/img/bargainflight.png'),
                    text:'低价机票'
                },
                {
                    id:3,
                    imgurl:require('@/assets/img/kezhan.png'),
                    text:'客栈'
                },
                {
                    id:4,
                    imgurl:require('@/assets/img/haiwai.png'),
                    text:'海外酒店'
                },
                {
                    id:5,
                    imgurl:require('@/assets/img/inn.png'),
                    text:'名宿'
                },
                {
                    id:6,
                    imgurl:require('@/assets/img/car.png'),
                    text:'专车自驾'
                },
                {
                    id:7,
                    imgurl:require('@/assets/img/freeTravel.png'),
                    text:'自由行'
                },
                {
                    id:8,
                    imgurl:require('@/assets/img/logo_camel.png'),
                    text:'汽车票船票'
                },
                {
                    id:9,
                    imgurl:require('@/assets/img/tuan.png'),
                    text:'旅游团购'
                },
                {
                    id:10,
                    imgurl:require('@/assets/img/aroundtravel.png'),
                    text:'周边短途'
                },
                {
                    id:11,
                    imgurl:require('@/assets/img/jr.png'),
                    text:'金融理财'
                },
                {
                    id:12,
                    imgurl:require('@/assets/img/card.png'),
                    text:'保险车险'
                },
                {
                    id:13,
                    imgurl:require('@/assets/img/travel.png'),
                    text:'攻略'
                },
                {
                    id:14,
                    imgurl:require('@/assets/img/youlun.png'),
                    text:'邮轮'
                },
                {
                    id:15,
                    imgurl:require('@/assets/img/oversea.png'),
                    text:'换外币'
                },
            ],
            
        }
    },
}
</script>
<style lang="stylus" scoped>
    [v-cloak]
        display:none
    .icons
        overflow:hidden
        height:0
        padding-bottom:57%
        // background:green
        .icon
            overflow:hidden
            float:left
            width:20%
            height:0
            padding-bottom:20%
            position:relative
            // background:red
            .icon-img
                position:absolute
                top:0
                left:0
                right:0
                bottom:.4rem
                .icon-img-resource
                    display:block
                    height:100%
                    margin:0 auto
                    padding:.1rem 0
        .icon-xs
            overflow:hidden
            float:left
            width:20%
            height:0
            padding-bottom:18%
            position:relative
            // background:lightblue
            .icon-img-xs
                position:absolute
                top:0
                left:0
                right:0
                bottom:.42rem
                .icon-img-resource-xs
                    display:block
                    height:100%
                    margin:0 auto
                    padding:.22rem 0

                    
        .icon-text
            position:absolute
            height:.4rem
            line-height:.4rem
            text-align:center
            font-size:0.25rem
            left:0
            right:0
            bottom:0
            overflow:hidden
            white-space:nowrap
            text-overflow:ellipsis
        .icon-text-xs
            position:absolute
            height:.4rem
            line-height:.42rem
            text-align:center
            font-size:0.25rem
            left:0
            right:0
            bottom:0.05rem
            overflow:hidden
            white-space:nowrap
            text-overflow:ellipsis

            
                    


</style>

