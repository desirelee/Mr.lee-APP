<template>
    <div>
        <div class='hot-title'>当季热门度假</div>
        <div class='hottitle-items'>
            <div :class="item.id%2==0?'items-two':'items-one'" v-for='item in leftlist' :key="item.id">
                <div :class="item.id%2==0?'items-two-wrapper':'items-one-wrapper'">
                    <img :class="item.id%2==0?'img-two':'img-one'" :src='item.imgurl'>
                </div>
                <div :class="item.id%2==0?'two-img-text':'one-img-text'">
                    <p class='content'>{{item.content}}</p>
                    <p class="price">￥{{item.price}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'HotTitle',
    data() {
        return {
            leftlist:[
                {
                    id:1,
                    imgurl:require('@/assets/img/leshandafo.jpg'),
                    content:'含往返飞机票+6晚住宿',
                    price:3349
                },
                {
                    id:2,
                    imgurl:require('@/assets/img/dishini.jpg'),
                    content:'含往门票和香港岛内游',
                    price:4549
                },
                 {
                    id:3,
                    imgurl:require('@/assets/img/paifang.jpg'),
                    content:'温泉度假+各景点门票',
                    price:1235
                },
                {
                    id:4,
                    imgurl:require('@/assets/img/threeumbra.jpg'),
                    content:'顺德吃喝游玩+哥顿酒店入住',
                    price:4582
                },
            ]
            
        }
    },
    computed: {
        oddOreven(item){
            if(item%2==0){
                return true
            }
            else{
                return false
            }
            // return false

        }
    },
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .hot-title
        line-height:.8rem
        background: #eee
        text-indent:.2rem
        margin-top:.2rem
    .hottitle-items
        position:absolute
        left:0.2rem
        right:0.2rem
        height:0
        overflow:hidden
        padding-bottom:103%
        // background:red
        .items-one
            margin-top:.1rem
            float:left
            overflow:hidden
            height:0
            padding-bottom:46%
            width:49%
            // background:blue
            position:relative
            .items-one-wrapper
                position:absolute
                overflow:hidden
                border-radius:.22rem
                left:0
                top:0
                bottom:1rem
                .img-one
                    display:block
                    margin:0 auto
                    height:100%
                    width:100%
            .one-img-text
                position:absolute
                height:1rem
                padding-top:.1rem
                left:0
                right:0
                bottom:0
                .content
                    padding-left:.05rem
                    font-size:.3rem
                .price
                    margin-top:.1rem
                    font-size:.5rem
                    color:$pricecolor
                    overflow:hidden
                    white-space:nowrap
                    text-overflow:ellipsis
        .items-two
            margin-top:.1rem
            float:right
            overflow:hidden
            height:0
            padding-bottom:46%
            width:49%
            // background:blue
            position:relative
            .items-two-wrapper
                position:absolute
                overflow:hidden
                border-radius:.22rem
                left:0
                top:0
                bottom:1rem
                .img-two
                    display:block
                    margin:0 auto
                    height:100%
                    width:100%
            .two-img-text
                position:absolute
                height:1rem
                padding-top:.1rem
                left:0
                right:0
                bottom:0
                .content
                    // text-align:center
                    padding-left:.05rem
                    font-size:.3rem
                .price
                    margin-top:.1rem
                    font-size:.5rem
                    color:$pricecolor
                    overflow:hidden
                    white-space:nowrap
                    text-overflow:ellipsis
                    


       

        

</style>
