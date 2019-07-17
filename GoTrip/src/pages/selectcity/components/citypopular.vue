<template>
    <div>
        <div class='citypopular' ref='wrapper'>
            <div>
                <div class='area-title-active' ref='a'>热门城市</div>
                <div class='area'>
                    <div class='button-list'>
                        <div class='button-wrapper' v-for="item of citydata.hotCity" :key="item.id">
                            <div class='button' @click="changecity(item.name)">
                                {{item.name}}</div>
                        </div>
                    </div>
                </div>
                <div class='area' v-for='(item,key) in citydata.city' :key="key" :ref='key'>
                    <div class='area-title' >{{key}}</div>
                    <ul class='city-list'>
                        <li class='city border-bottom' @click="changecity(inneritem.name)" v-for='inneritem in item' :key="inneritem.id">{{inneritem.name}}</li>
                    </ul>
                </div>
            </div>   
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
    name:'cityofpolular',
    data() {
        return {
            city:'广州',
            scrollmsg:'',
            symboltouch:false,
        }
    },
    props:{
        citydata:Object,
        navtopopular:String,
    },
    methods:{
        ...mapMutations(['changeCity']),
        changecity(city){
            this.changeCity(city);
            this.$router.push('/');
        },
        scrollling(){
                this.scroll.on('scroll',(pos)=>{
                    let position =Math.floor(Math.abs(
                        (pos=>{
                            let position=0;
                            if(pos+8<0){
                                position=pos
                            }
                            else{
                                position=0;
                            }
                            return position
                        })(pos.y)));
                        if(pos.y>-10){
                             if(this.scrollmsg!='no'){
                            this.scrolltonav('no');}
                        }
                        else{
                            for(let i in this.citydata.city){
                                if(position> this.$refs[i][0].offsetTop &&
                                    position<this.$refs[i][0].offsetTop+this.$refs[i][0].clientHeight){
                                        if(this.scrollmsg!=i){
                                        this.scrolltonav(i);}
                                        
                                }
                            }
                        }
                
                }
            )
        },
        scrolltonav(item){
            this.$emit('changenav',item);
            this.scrollmsg =item;
        }
           
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{ probeType: 3});
        this.scrollling();
    },
    watch:{
        navtopopular(){
            if(this.navtopopular){
                const element =this.$refs[this.navtopopular][0];
                this.scroll.scrollToElement(element);
                }
           
        }
    }
}
</script>
<style scoped>
    .citypopular{
        position: absolute;
        z-index:0;
        overflow:hidden;
        width:100%;
        top:1.83rem;
        bottom:0;
        }
        .area-title-active{
            /* float:left; */
            /* position: fixed; */
            top:0;
            left:0; 
            color: darkgray;
            width: 100%;
            height:0.5rem;
            margin-top:0.15rem;
            line-height:0.5rem;
            padding-left: 0.2rem;
        }
        .area-title{
            color: darkgray;
            width: 100%;
            height:0.5rem;
            margin-top:0.15rem;
            line-height:0.5rem;
            padding-left: 0.2rem;
        }
        .button-list{
            padding:0 0.6rem 0.2rem 0.1rem;
            overflow: hidden;
            }
            .button-wrapper{
                float:left;
                width:25%;
                }
                .button{
                    margin:0.1rem;
                    height:0.7rem;
                    line-height: 0.7rem;
                    /* padding:0.05rem; */
                    background:rgb(236, 236, 236);
                    text-align: center;
                    border-radius: 0.05rem;
                    }
        li.city{
            height:0.7rem;
            line-height:0.7rem;
            margin-left:0.3rem;
            margin-right:0.6rem
            }
</style>


