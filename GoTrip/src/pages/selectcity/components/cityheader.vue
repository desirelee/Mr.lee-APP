<template>
    <div class='header'>
        <div class='cityheader'>
            <router-link to="/">
                <div class='city-header-left'>
                    <div class='iconfont icon-down'>&#xe655;</div>
                </div>
            </router-link>
            <div class='city-header-right'>
                <span class='iconfont search-icon'>&#xe666;</span>
                <input class='search-text' type='text' placeholder="输入城市中文或拼音">
            </div>
        </div>
        <div class='popular-header border-bottom'>
            <div class='popular-header-content'>
                <span class='iconfont icon-location'>&#xe665;</span>
                当前定位城市 {{city}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'cityheader',
    data(){
        return{
            city:'广州'
        }
    }
}
</script>
<style scoped>
    .header{
        position:fixed;
         width:100%;
         background: white;
    }
    .cityheader{
        display: flex;
        top:0;
        margin-top:0.1rem;
        height:0.86rem;
        /* background: lightskyblue;     */
        }
        .city-header-left{
            float:left;
            width:1rem;
            line-height: 1rem;
            color:#333;
            /* background: red; */
            overflow: hidden;    
        }
            .icon-down{
                font-size:0.5rem;
                margin:auto 0;
                text-align: center
            }
        .city-header-right{
            flex: 1;
            background: rgb(236, 236, 236);
            height:0.64rem;
            margin:auto 0;
            padding-left: 0.2rem;
            margin-right:0.2rem;
            border-radius: 0.1rem;
            overflow: hidden;
            display: flex;
            }
            .city-header-right-block{
                 height:0.86rem;
                 line-height: 0.86rem;
                 display:flex;
                }
                .search-icon{
                    float:left;
                    font-size:0.4rem;
                    margin:auto 0;
                }
                .search-text
                {
                    flex:1;
                    background: rgb(236, 236, 236);
                    height:0.64rem;
                    margin:auto 0;
                
                } 
        .popular-header{
            height:0.86rem;
            line-height:0.86rem
            }
            .popular-header-content{
                padding-left:0.2rem;
                }
                .icon-location{
                    color: darkgray;
                    font-size:0.35rem
                }
    
</style>
