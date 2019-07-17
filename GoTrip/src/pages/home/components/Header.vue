<template>
<div>
    <div class='header'>
        <div class='header-left'>
            <div class="iconfont back-icon">&#xe652;</div>
        </div>
        <div class='header-input'>
            <span class='iconfont search-icon'>&#xe666;</span>输入城市/景点/游玩主题
        </div>
        <router-link to="/selectcity">
            <div class='header-right'>
                <span class='iconfont location-icon'>&#xe665;</span>{{this.city}}
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'homeheader',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(['city']),
    },
    // props:{
    //     selectcity:String
    // }
}
</script>
<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .header
        display:flex
        height: .86rem
        background: $headerbackgroundcolor
        color:#fff
    .header-left
        width:.64rem
        float:left
        line-height: .86rem
        .back-icon
            text-align:center
            font-size:.4rem

    .header-input
        flex:1
        height:.64rem
        line-height: .64rem
        margin-top:.12rem
        padding-left:.2rem
        background:#fff
        border-radius:.1rem
        color:#ccc
        .search-icon
            font-size:.3rem
            vertical-align:middle
    .header-right
        width: 1.24rem
        float:right
        line-height: .86rem
        text-align:center
        color:white
        .location-icon
            font-size:.31rem
            margin-right:.04rem
</style>

