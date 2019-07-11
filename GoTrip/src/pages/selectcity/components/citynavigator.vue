<template>
    <div class='city-nav'>
        <ul>
            <li  class='city-nav-li' 
                :ref='item' 
                v-for='item in arrcity' 
                :key="item" 
                @click="runtotarget(item)"
                @touchstart='TouchStartEvent'
                @touchmove='TouchMoveEvent'
                @touchend='TouchEndEvent'>{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items:'',
            symboltouch:false
        }
    },
    props:{ citynav:Object,
            scrollmsg:String},
    computed:{
        arrcity(){
            const arrcity =[];
            ///////ES6中的遍历语法
            for(let i in this.citynav){
                arrcity.push(i);
            };
            return arrcity;
        }
    },
    methods: {
        runtotarget(item){
            this.$emit('changedata',item);
            if(item!=''){
                if(this.items!=''){
                    this.$refs[this.items][0].style.backgroundColor= '';
                }
                this.$refs[item][0].style.backgroundColor= 'orange';
                this.items=item;
            }
        },
        TouchStartEvent(){this.symboltouch=true},
        TouchMoveEvent(e){
            if(this.symboltouch){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const touchpos = Math.floor((e.touches[0].clientY-132.5)/18);
                    if(touchpos >=0 && touchpos < this.arrcity.length){
                    const element =this.arrcity[touchpos];
                    this.runtotarget(element);
                    // this.$emit('changedata',element);
                    }
                }, 20);
               
            }
        },
        TouchEndEvent(){this.symboltouch=false},
    },
    watch: {
        scrollmsg(){
            if(this.items!=''||this.scrollmsg=='no'){
                    this.$refs[this.items][0].style.backgroundColor= '';
                }
            if(this.scrollmsg!='no'&&this.scrollmsg!=0){
                this.$refs[this.scrollmsg][0].style.backgroundColor= 'orange';
                this.items=this.scrollmsg;
                }
            
        }
    },
 
}
</script>
<style scoped>
    .city-nav{
        position:fixed;
        right:0.25rem;
        top:2.65rem;
        width:0.3rem;
        }
        ul{
            display: flex;
            flex-direction:column;
            justify-content: center;
            height:100%;
        }
        .city-nav-li{
            flex:1;
            text-align: center;
            height:0.39rem;
            font-size:0.21rem;
            line-height:0.37rem;
            width:0.39rem;
            border-radius: 0.39rem;
        }
        /* li.city-nav-li:active{
            flex:1;
            text-align: center;
            height:0.39rem;
            font-size:0.21rem;
            line-height:0.37rem;
            width:0.39rem;
            border-radius: 0.39rem;
            background: orange;
        } */

</style>


