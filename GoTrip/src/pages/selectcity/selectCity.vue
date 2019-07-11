<template>
    <div>
        <city-header></city-header>
        <city-popular :citydata='cityData' :navtopopular='navtoPopular' @changenav="scrolltonav"></city-popular>
        <city-navigator :citynav='cityNav' :scrollmsg='scrollMsg' @changedata="datatocitylist"></city-navigator>
    </div>
</template>
<script>
import CityHeader from './components/cityheader'
import CityPopular from './components/citypopular'
import CityNavigator from './components/citynavigator'
import axios from 'axios'

export default {
    name:'selectCity',
    data() {
        return {
            cityData:{
                        hotCity:[],
                        city:{}
                    },
            cityNav:{},
            navtoPopular:'',
            scrollMsg:''
        }
    },
    components:{
        CityHeader:CityHeader,
        CityPopular:CityPopular,
        CityNavigator:CityNavigator
    },
    methods: {
        getCityInfo(){
             axios.get('/static/test/city.json')
                .then(this.getCityInfoSucc)
        },
        getCityInfoSucc(res){
            if(res.data.ret && res.data){
                this.cityData.city = res.data.data.cities;
                this.cityData.hotCity = res.data.data.hotCities;
                this.cityNav=res.data.data.cities;
                }
        },
        datatocitylist(data){
            this.navtoPopular=data.toString();
        },
        scrolltonav(data){
            this.scrollMsg=data.toString();
        }
    },
    mounted() {
        this.getCityInfo();
    },

}
</script>
<style scoped>

</style>


