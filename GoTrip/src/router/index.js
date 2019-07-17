import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue';
import selectCity from '@/pages/selectcity/selectCity.vue';
import taobao from '@/pages/taobao/GoodsDetail';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/selectcity',
      name:'selectCity',
      component: selectCity
    },
    {
      path:'/taobao/:id',
      name:'TaoBao',
      component:taobao
    },
  ]
})
