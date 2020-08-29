// 引入包
import VueRouter from "vue-router"
// import  自己命名  from 路径/如果是文件包，直接书写文件名字
import login from "../../components/login.vue"
import plogin from "../../components/plogin.vue"
import xlogin from "../../components/xlogin.vue"
import strategy from "../../components/strategy.vue"
import wenda from "../../components/wenda.vue"
import sales from "../../components/sales.vue"
import list from "../../components/list.vue"
import first from '../../components/first.vue'
import expert from '../../components/expert.vue'
import tranotes from '../../components/tranotes.vue'
import hotel from '../../components/hotel.vue'
import local from '../../components/local.vue'

export default new VueRouter({
    routes: [
        {
            path:'/',
            component:first,
        },
        {
            path:'/login',
            component:login,
            children: [
                {
                    path:'/plogin',
                    component:plogin
                },
                {
                    path:'/xlogin',
                    component:xlogin
                }
            ],
            redirect:'/plogin'
        }
        ,{
            path:"/sales",
            component:sales
        },
        {
            path:'/expert',
            component:expert
        },
        {
            path:'/tranotes',
            component:tranotes
        },
        {
            path:'/hotel',
            component:hotel
        },
        {
            path:'/local',
            component:local
        },

        {
            path: "/strategy",
            component:strategy
        },
        {
            path: "/list",
            component:list
        },
        {
            path: "/wenda",
            component: wenda
        },
        {
            path: '/*',
            redirect: '/first'
        },
    ]


}) 