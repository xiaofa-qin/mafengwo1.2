import Vue from 'vue'
import App from './App.vue'
import  VueRouter from  "vue-router"

import "./assets/css/cssreset.css";

// 引入ui组件   (使用轮播图)
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
Vue.use(Mint);

// 配置每一个组件多可以使用vue-router

Vue.use(VueRouter)
// 引入路由
import  router  from "../src/assets/js/router.js"
// import $ from   "./assets/js/jquery-3.0.0.js"
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
