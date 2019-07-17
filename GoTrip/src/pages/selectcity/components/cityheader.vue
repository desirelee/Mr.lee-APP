<template>
    <div class='header'>
        <div>
            <div class='cityheader'>
                <router-link to="/">
                    <div class='city-header-left'>
                        <div class='iconfont icon-down'>&#xe655;</div>
                    </div>
                </router-link>
                <div class='city-header-right'>
                    <span class='iconfont search-icon'>&#xe666;</span>
                    <input class='search-text' v-model='keyword' type='text' placeholder="输入城市中文或拼音">
                </div>
            </div>
            <div class='popular-header border-bottom'>
                <div class='popular-header-content'>
                    <span class='iconfont icon-location'>&#xe665;</span>
                    当前定位城市 {{this.city}}
                </div>
            </div>
        </div>
        <transition name='fade'>
        <div class='search-content' v-show='listshow' ref="wrapper">
            <ul>
                <li class='search-city border-bottom' v-for='item in list' :key="item.id" 
                    @click='changecity(item)'>{{item}}</li>
            </ul>
        </div>
        </transition>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
/////这是VueX中的方法，可以将Vuex中的state里面的值映射过来
import {mapState, mapMutations} from 'vuex'

export default {
    name:'cityheader',
    data(){
        return{
            keyword:'',
            list:[],
            listshow:false,
           
        }
    },
    computed: {
         ...mapState(['city']),
        //  ...mapState{currrentcity:'city'},可以是数组 ，也可以是对象
    },
    mounted() {
         this.scroll = new BScroll(this.$refs.wrapper);
    },
    methods:{
        changecity(city){
            this.listshow=false;
            this.keyword ='';
            this.changeCity(city);
            this.$router.push('/');
        },
        ...mapMutations(['changeCity'])
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[];
                this.listshow=false;
                return
            }
            else{
            this.listshow=true;
            this.timer=setTimeout(() => {
                const newlist=[]
                for(let i in this.citynav){
                this.citynav[i].forEach(value => {
                    if(value.spell.match(this.keyword)||value.name.match(this.keyword)){
                        newlist.push(value.name);
                        }
                    });
                };
                this.list=newlist;
            }, 100);}
           
        }
    },
    props:{citynav:Object}
}
</script>
<style scoped>
/* 这里是Vue自带的过渡动画 */
        .fade-leave-to,
        .fade-enter{
            transform: translateX(-50px);
            opacity: 0;
        }
        .fade-enter-active,
        .fade-leave-active{
            transition:all 0.3s ease;
        }
        /* .fade-move{
            transition: all 0.5s ease;
        } */
/* 这里是Vue自带的过渡动画 */

    .header{
         width:100%;
         background: white;
    }
    .search-content{
        position:absolute;
        z-index: 10;
        bottom:0;
        left:0;
        top:1.1rem;
        right:0;
        background: white;
        overflow: hidden;
        }
        .search-city{
            height:0.7rem;
            line-height:0.7rem;
            margin-left:0.3rem;
            margin-right:0.6rem
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
                    font-size: 0.29rem;
                    letter-spacing: 0.03rem;
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
