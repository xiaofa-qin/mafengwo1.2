<template>
    <section id="all_con">
        <div class="header">
           <router-link to=""><img src="../assets/images/logo200.jpg" alt=""></router-link>
            <router-link to="/" id="back_fir">官网首页</router-link>
           <router-link to=""><span id="search"></span></router-link> 
        </div>
        <div class="inp">
            <form :class="{inp_append:this.inpChange==1}" v-if="this.inpChange==0" @click="anima()" >
                <label class="label" >
                    <i></i>
                    搜索目的地
                </label>
            </form>
            <div class="add" v-show="this.inpChange==1">
                <span id="sear"></span>
                <input type="text" placeholder="搜索目的地"> 
            </div>
            <span  @click="changeShow()" id="back" v-show="this.inpChange==1">取消</span> 
              
        </div>
        
        <div class="search_Animation" ref="a">
            <content>
                <router-link id="ad" to="">
                    <img class="img_ad" src="../assets/images/ad_img.jpg" alt="">
                    <div class="append">
                        <p id="ad_p">神仙海岛的三款热门玩法，去布吉岛一定不能</p>
                        <span id="right_t"></span>
                    </div>
                </router-link>
            </content>
            <main>
                <section>
                    <div class="mid">
                    <router-link to="/list" id="mid_word">
                        <h2>热门目的地</h2>
                        <span></span>
                    </router-link>
                    <p>最受大家欢迎的目的地推荐</p>
                </div>
                <div class="scopedbar">
                    <div class="scrollview">
                        <ul>
                            <li id="top_li" v-for="(item,index) in areaList" @click="changeCon(item.id)" >
                             <span :class="{addColor:item.id==judge}">{{item.areaName}}  </span>     
                               </li>
                        </ul>
                    </div>
                </div>
                <div class="tab_con">
                    <!-- <img src="../assets/images/beijing.jpg" alt=""> -->
                    <ul>
                        <li v-for="(item,index) in list_one">
                            <!-- {{item.src}} -->
                           <router-link to="" >
                               <img :src="item.src" alt="">
                               <p >{{item.title}}</p>    
                           </router-link>
                        </li>
                    </ul>
                </div>

                <div class="showmore">
                    <router-link id="showmore" to="">更多目的地</router-link>
                </div>
            </section>    
                <hr>
                <section>
                    <div class="mid">
                        <router-link id="mid_word" to="">
                            <h2>当季推荐</h2>
                            <span></span>
                        </router-link>
                        <p>每月最适合前往的目的地推荐</p>
                    </div>
                    <div class="scopedbar">
                        <div class="scrollview">
                            <ul id="mid_ul">
                                <li id="mid_li" v-for="(item,index) in timeList" @click="change_one(item.id)">
                                     <span :class="{addColor:item.id==timejduge}">{{item.month}}</span>     
                                   </li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab_con">
                        <!-- <img src="../assets/images/beijing.jpg" alt=""> -->
                        <ul>
                            <li v-for="(item,index) in time_list" :key="index">
                                <!-- {{item.src}} -->
                               <router-link to="">
                                   <img :src="item.src" alt="">
                                   <p >{{item.title}}</p>    
                               </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="showmore">
                        <router-link id="showmore" to="">更多目的地</router-link>
                    </div>
                    <hr>
                </section>
                <!-- <hr> -->
                <section>
                    <div class="mid">
                        <router-link id="mid_word" to="">
                            <h2>主题精选</h2>
                            <span></span>
                        </router-link>
                        <p>大量主题出行，个性化你的旅行</p>
                    </div>
                    <div class="scopedbar">
                        <div class="scrollview">
                            <ul id="last_ul">
                                <li id="last_li" v-for="(item,index) in stylesec" @click="change_two(item.id)">
                                     <span :class="{addColor:item.id==stylejudge}">{{item.areaName}}</span>   
                                   </li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab_con">
                        <!-- <img src="../assets/images/beijing.jpg" alt=""> -->
                        <ul>
                            <li v-for="(item,index) in style_list" :key="index">
                                <!-- {{item.src}} -->
                               <router-link to="">
                                   <img :src="item.src" alt="">
                                   <p >{{item.title}}</p>    
                               </router-link>
                            </li>
                        </ul>
                    </div>
    
                    <div class="showmore">
                        <router-link id="showmore" to="">更多主题</router-link>
                    </div>
                </section>
            </main>
        </div>
    </section>
</template>
<!-- <script src="../assets/js/jquery-3.0.0.js"></script> -->
<script>
    export default{

        data(){
            return{
                lt:"",
                judge:0,
                inpChange:0,
                timejduge:0,
                stylejudge:0,
                list_one:[
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"北京"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"三亚"
                         },
                         {
                             src:"./src/assets/images/shanghai.jpg",
                             title:"上海"
                         },
                         {
                             src:"./src/assets/images/chengdu.jpg",
                             title:"成都"
                         },
                         {
                             src:"./src/assets/images/xiamen.jpg",
                             title:"厦门"
                         },
                         {
                             src:"./src/assets/images/xian.jpeg",
                             title:"西安"
                         }   
                     ],
                time_list:[
                         {
                             src:"./src/assets/images/xianggang_one.jpeg",
                             title:"香港"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"三亚"
                         },
                         {
                             src:"./src/assets/images/qingmai.jpeg",
                             title:"清迈"
                         },
                         {
                             src:"./src/assets/images/guangzhou.jpeg",
                             title:"广州"
                         },
                         {
                             src:"./src/assets/images/xinjiapo.jpeg",
                             title:"新加坡"
                         },
                         {
                             src:"./src/assets/images/haerbin.jpeg",
                             title:"哈尔滨"
                         }   
                     ],
                areaList:[
                    {
                        areaName: "国内",
                        id: 0,
                        path:"/"
                    },
                    {
                        areaName: "港澳台",
                        id: 1,
                        path:"/"
                    }, {
                        areaName: "日韩",
                        id: 2,
                        path:"/"
                    },
                    {
                        areaName: "东南亚",
                        id: 3,
                        path:"/"
                    },
                    {
                        areaName: "南亚 西亚",
                        id: 4,
                        path:"/"
                    },
                    {
                        areaName: "欧洲 美洲",
                        id: 5,
                        path:"/"
                    },
                    {
                        areaName: "澳洲 非洲",
                        id: 6,
                        path:"/"
                    }
                ],
                timeList:[
                    {
                        month: "1月",
                        id: 0,
                        path:"/"
                    },
                    {
                        month: "2月",
                        id: 1,
                        path:"/"
                    }, 
                    {
                        month: "3月",
                        id: 2,
                        path:"/"
                    },
                    {
                        month: "4月",
                        id: 3,
                        path:"/"
                    },
                    {
                        month: "5月",
                        id: 4,
                        path:"/"
                    },
                    {
                        month: "6月",
                        id: 5,
                        path:"/"
                    },
                    {
                        month: "7月",
                        id: 6,
                        path:"/"
                    },
                    {
                        month: "8月",
                        id: 7,
                        path:"/"
                    },
                    {
                        month: "9月",
                        id: 8,
                        path:"/"
                    },
                    {
                        month: "10月",
                        id:9,
                        path:"/"
                    },
                    {
                        month: "11月",
                        id: 10,
                        path:"/"
                    },
                    {
                        month: "12月",
                        id: 11,
                        path:"/"
                    },
                ],
                style_list:[
                         {
                             src:"./src/assets/images/mianqian.jpeg",
                             title:"免签"
                         },
                         {
                             src:"./src/assets/images/renwenlishi.jpeg",
                             title:"人文历史"
                         },
                         {
                             src:"./src/assets/images/paipianshengdi.jpeg",
                             title:"拍片圣地"
                         },
                         {
                             src:"./src/assets/images/xiaozhong.jpeg",
                             title:"自然风景"
                         },
                         {
                             src:"./src/assets/images/xiaozhong.jpeg",
                             title:"小众"
                         },
                         {
                             src:"./src/assets/images/dengshan.jpeg",
                             title:"登山"
                         }   
                     ],
                stylesec:[
                {
                        areaName: "全年适宜",
                        id: 0,
                        path:"/"
                    },
                    {
                        areaName: "季节",
                        id: 1,
                        path:"/"
                    }, {
                        areaName: "出行方式",
                        id: 2,
                        path:"/"
                    },
                    {
                        areaName: "节假日",
                        id: 3,
                        path:"/"
                    },
                    {
                        areaName: "用户搜索",
                        id: 4,
                        path:"/"
                    }
                ]
            }
        },
        methods:{
            anima(){
              this.inpChange=1;
              $(".search_Animation").slideUp(1);
            //   console.log(this.$refs.a)
            },
            changeShow(){
                this.inpChange=0;
                $(".search_Animation").slideDown(10);
            },
            changeCon(a){
               this.judge=a;
               if(a==0){  
                        this.list_one=[
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"北京"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"三亚"
                         },
                         {
                             src:"./src/assets/images/shanghai.jpg",
                             title:"上海"
                         },
                         {
                             src:"./src/assets/images/chengdu.jpg",
                             title:"成都"
                         },
                         {
                             src:"./src/assets/images/xiamen.jpg",
                             title:"厦门"
                         },
                         {
                             src:"./src/assets/images/xian.jpeg",
                             title:"西安"
                         }   
                     ]
                    // }
               }
                else if(a==1){
                this.list_one=[
                         {
                             src:"./src/assets/images/xianggang.jpeg",
                             title:"香港"
                         },
                         {
                             src:"./src/assets/images/aomen.jpeg",
                             title:"澳门"
                         },
                         {
                             src:"./src/assets/images/taibei.jpeg",
                             title:"台北"
                         },
                         {
                             src:"./src/assets/images/kending.png",
                             title:"垦丁"
                         },
                         {
                             src:"./src/assets/images/hualian.jpeg",
                             title:"花莲"
                         },
                         {
                             src:"./src/assets/images/gaoxiong.jpeg",
                             title:"高雄"
                         }   
                     ]
               }       
                else if(a==2){
                this.list_one=[
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"aaa"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"三亚"
                         },
                         {
                             src:"./src/assets/images/shanghai.jpg",
                             title:"上海"
                         },
                         {
                             src:"./src/assets/images/chengdu.jpg",
                             title:"成都"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"chengshi"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"aAA"
                         }   
                     ]
               }       
                else if(a==3){
                this.list_one=[
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"ccc"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"三亚"
                         },
                         {
                             src:"./src/assets/images/shanghai.jpg",
                             title:"上海"
                         },
                         {
                             src:"./src/assets/images/chengdu.jpg",
                             title:"成都"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"chengshi"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"aAA"
                         }   
                     ]
               }       
                else if(a==4){
                this.list_one=[
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"北京"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"三亚"
                         },
                         {
                             src:"./src/assets/images/shanghai.jpg",
                             title:"上海"
                         },
                         {
                             src:"./src/assets/images/chengdu.jpg",
                             title:"成都"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"chengshi"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"aAA"
                         }   
                     ]
               }       
                else if(a==5){
                this.list_one=[
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"北京"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"三亚"
                         },
                         {
                             src:"./src/assets/images/shanghai.jpg",
                             title:"上海"
                         },
                         {
                             src:"./src/assets/images/chengdu.jpg",
                             title:"成都"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"chengshi"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"aAA"
                         }   
                     ]
               }       
                else if(a==6){
                this.list_one=[
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"北京"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"三亚"
                         },
                         {
                             src:"./src/assets/images/shanghai.jpg",
                             title:"上海"
                         },
                         {
                             src:"./src/assets/images/chengdu.jpg",
                             title:"成都"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"chengshi"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"aAA"
                         }   
                     ]
               }       
           },
            change_one(b){
            this.timejduge=b;
               if(b==0){  
                        this.time_list=[
                         {
                             src:"./src/assets/images/xianggang_one.jpeg",
                             title:"香港"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"三亚"
                         },
                         {
                             src:"./src/assets/images/qingmai.jpeg",
                             title:"清迈"
                         },
                         {
                             src:"./src/assets/images/guangzhou.jpeg",
                             title:"广州"
                         },
                         {
                             src:"./src/assets/images/xinjiapo.jpeg",
                             title:"新加坡"
                         },
                         {
                             src:"./src/assets/images/haerbin.jpeg",
                             title:"哈尔滨"
                         }   
                     ]
                    // }
               }
                else if(b==1){
                this.time_list=[
                         {
                             src:"./src/assets/images/pujidao.png",
                             title:"普吉岛"
                         },
                         {
                             src:"./src/assets/images/nanjing.jpeg",
                             title:"南京"
                         },
                         {
                             src:"./src/assets/images/kunming.jpeg",
                             title:"昆明"
                         },
                         {
                             src:"./src/assets/images/yazhuang.jpeg",
                             title:"芽庄"
                         },
                         {
                             src:"./src/assets/images/xinxilan.jpeg",
                             title:"新加坡"
                         },
                         {
                             src:"./src/assets/images/changtandao.jpeg",
                             title:"长滩岛"
                         }   
                     ]
               }       
                else if(b==2){
                this.time_list=[
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"aaa"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"三亚"
                         },
                         {
                             src:"./src/assets/images/shanghai.jpg",
                             title:"上海"
                         },
                         {
                             src:"./src/assets/images/chengdu.jpg",
                             title:"成都"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"chengshi"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"aAA"
                         }   
                     ]
               }       
                else if(b==3){
                this.time_list=[
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"ccc"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"三亚"
                         },
                         {
                             src:"./src/assets/images/shanghai.jpg",
                             title:"上海"
                         },
                         {
                             src:"./src/assets/images/chengdu.jpg",
                             title:"成都"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"chengshi"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"aAA"
                         }   
                     ]
               }       
                else if(b==4){
                this.time_list=[
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"aaa"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"三亚"
                         },
                         {
                             src:"./src/assets/images/shanghai.jpg",
                             title:"上海"
                         },
                         {
                             src:"./src/assets/images/chengdu.jpg",
                             title:"成都"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"chengshi"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"aAA"
                         }   
                     ]
               }       
                else if(b==5){
                this.time_list=[
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"北京"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"三亚"
                         },
                         {
                             src:"./src/assets/images/shanghai.jpg",
                             title:"上海"
                         },
                         {
                             src:"./src/assets/images/chengdu.jpg",
                             title:"成都"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"chengshi"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"aAA"
                         }   
                     ]
               }       
                else if(b==6){
                this.time_list=[
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"北京"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"三亚"
                         },
                         {
                             src:"./src/assets/images/shanghai.jpg",
                             title:"上海"
                         },
                         {
                             src:"./src/assets/images/chengdu.jpg",
                             title:"成都"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"chengshi"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"aAA"
                         }   
                     ]
               }       
           } 
           ,change_two(c){
            this.stylejudge=c;
               if(c==0){  
                        this.style_list=[
                         {
                             src:"./src/assets/images/mianqian.jpeg",
                             title:"免签"
                         },
                         {
                             src:"./src/assets/images/renwenlishi.jpeg",
                             title:"人文历史"
                         },
                         {
                             src:"./src/assets/images/paipianshengdi.jpeg",
                             title:"拍片圣地"
                         },
                         {
                             src:"./src/assets/images/xiaozhong.jpeg",
                             title:"自然风景"
                         },
                         {
                             src:"./src/assets/images/xiaozhong.jpeg",
                             title:"小众"
                         },
                         {
                             src:"./src/assets/images/dengshan.jpeg",
                             title:"登山"
                         }   
                     ]
                    // }
               }
                else if(c==1){
                this.style_list=[
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"草原"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"星空"
                         },
                         {
                             src:"./src/assets/images/shanghai.jpg",
                             title:"赏花"
                         },
                         {
                             src:"./src/assets/images/chengdu.jpg",
                             title:"雪景"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"海岛"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"极限运动"
                         }   
                     ]
               }       
                else if(c==2){
                this.style_list=[
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"徒步"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"自驾"
                         },
                         {
                             src:"./src/assets/images/shanghai.jpg",
                             title:"邮轮"
                         },
                         {
                             src:"./src/assets/images/chengdu.jpg",
                             title:"骑行"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"蜜月"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"亲子游"
                         }   
                     ]
               }       
                else if(c==3){
                this.style_list=[
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"ccc"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"三亚"
                         },
                         {
                             src:"./src/assets/images/shanghai.jpg",
                             title:"上海"
                         },
                         {
                             src:"./src/assets/images/chengdu.jpg",
                             title:"成都"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"chengshi"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"aAA"
                         }   
                     ]
               }       
                else if(c==4){
                this.style_list=[
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"aaa"
                         },
                         {
                             src:"./src/assets/images/sanya.jpg",
                             title:"三亚"
                         },
                         {
                             src:"./src/assets/images/shanghai.jpg",
                             title:"上海"
                         },
                         {
                             src:"./src/assets/images/chengdu.jpg",
                             title:"成都"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"chengshi"
                         },
                         {
                             src:"./src/assets/images/beijing.jpg",
                             title:"aAA"
                         }   
                     ]
               }                 
           }
        } 
    }   
</script>
<style scoped>
    * {
        margin: 0px;
        padding: 0px;
        list-style: none;
    }
.all_con{
    height:calc(100vh - 0px);
    overflow: auto;
}
    .header {
        width: 100%;
        overflow: hidden;
        border-bottom: 1px solid rgba(0, 0, 0, 0.144);
        padding-bottom: 13px;
    }

    a {
        text-decoration: none;
        color:rgba(0, 0, 0, 0.267);
    }

    .header img {
        float: left;
        width:100px;
        height: auto; 
        margin-top: 15px;
        margin-left: 20px;
        transform: scale(2em);
    }
    .header #back_fir {
        float: right;
        text-align: center;
        margin-right: 60px;
        margin-top: 18px;
        color: orange;
    }

    .header #search {

        display: inline-block;
        float: right;
        width: 42px;
        height: 44px;
        top:42px;
        right: -220px;
        /* margin-top: 42px; */
        /* background-size: 100%; */
        background: url('../assets/images/i_head5.png') no-repeat -29px -131px;
        position: relative;
        zoom:0.5;
    }

    .header #search::after {
        content: "";
        display: block;
        width: 1px;
        height: 30px;
        background-color: rgba(0, 0, 0, 0.144);
        position: absolute;
        right: 62px;
        top: 3px;
        
    }
    .inp {
        margin-top: 10px;
        width: 95%;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 8px; 
        overflow: hidden;
        /* background-color: orangered; */
    }
    .inp form {
        width: 100%;
        padding-top: 2px;
        padding-bottom: 2px;
        background-color: rgba(0, 0, 0, 0.144);
    }
    .inp_append{
        width: 70%;
        float: left;
        padding-top: 2px;
        padding-bottom: 2px;
        background-color: blue;
    }
    .inp .label {
        display: block;
        width: 100%;
        text-align: center;
        /* font-size: 32px; */
        font-size: 13px;
        color: #696969;
    }
    .inp input{
        width:92%;
        /* float: left; */
        margin-left: 0.3%;
        outline: none;
        border-radius: 4px;
        border: none;
        background-color: rgba(0, 0, 0,-0.144);
    }
    #sear{
        width:5%;
        height:29px;
        margin-top:2%;
        margin-left:2%;
        background-color: chartreuse;
        /* margin-right: 10px; */
        float: left;
        /* float: right; */
        /* display: inline-block; */
        z-index: 10;
        background: url("../assets/images/hotel_sprite4.png") no-repeat -139px 0px;
        zoom:0.5;
    }
    .inp #back{
    float: right;
    display: inline-block;
    margin-right:0.8%;
    margin-top: 5px;
    color: coral;
}
.add{
    width:85%;
    float: left;
    padding-top:3px;
    padding-bottom: 3px;
    background-color: rgba(128, 128, 128, 0.144);
    border: 1px solid rgba(0, 0, 0, 0.144);
    border-radius: 4px;
    margin-left: 0.2%;
    margin-right:auto;
    overflow: hidden;
    opacity: 0.5;
}

    #ad {
        display: block;
        width: 100%;
        position: relative;
    }

    .append {
        width: 100%;
        position: absolute;
        bottom: 0px;
        text-align: center;
        right: 10px;
        padding-bottom: 20px;
        overflow: hidden;
    }

    .img_ad {
        width: 100%;
    }

    #ad #ad_p {
    margin-top: 4%;
    width: 80%;
    float: left;
    margin-left: 7%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
    }

    #right_t {
        width: 24px;
        height: 37px;
        margin-top: 36px;
        margin-right: 54px;
        float: right;
        display: inline-block;
        zoom: 0.5;
        background: url("../assets/images/i_index.png") no-repeat -0px -0px;
    }

    .mid {
        width: 100%;
        margin-top: 10px;
        /* padding-top: 74px; */
        margin-bottom: 15px;
    }

    #mid_word {
        width: 50%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;

    }

    #mid_word h2 {
        width: 80%;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        font-size: 20px;
        color: black;
        /* margin-bottom: 15px; */
    }
    #mid_word h2::after{
        content:'';
    }

    .mid p {
        width: 60%;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        color:rgba(128, 128, 128, 1) ;
        /* font-size: 40px; */
    }

    .scopedbar {
        width: 94%;
        box-sizing: border-box;
        border-top: 1px solid rgba(0, 0, 0, 0.144);
        margin-left: auto;
        margin-right: auto;
    }

    .scrollview {
        width: 100%;
        margin-right: 0px;
        /* box-sizing: border-box; */
        padding-top: 23px;
        /* padding-bottom: 0px; */
        overflow: auto;
    }

    .scrollview::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 1px;
        /*高宽分别对应横竖滚动条的尺寸*/
        height: 25px;
    }
    .scrollview ul {
        width: 215%;
        box-sizing: border-box;
        overflow: hidden;
        border-color: indigo;
    }
    .scrollview ul li {
        /* width: 12.1%; */
        padding-left:19px;
        padding-right:18px;
        border-right: 1px solid gray;
        float: left;
        color:black;
        /* font-size: 40px; */
        text-align: center;
        /* 标签的占位就是width+margin 增加padding和border只会内减width和height */
        box-sizing: border-box;
        /* overflow: hidden; */
        /*内容超出后隐藏*/
        text-overflow: ellipsis;
        /* 超出内容显示为省略号*/
        white-space: nowrap;
        padding-bottom: 5px;
    }
 .addColor{
           border-bottom: 2px solid orange;
           color:orange;
           box-sizing: border-box;
    }
    .scrollview ul #top_li:nth-of-type(7){
        border: none;
    }
    .scrollview ul li:nth-of-type(1) {
        text-align: left;
        padding-left: 0px;
    }
    .tab_con{
        width:94%;
        /* float: right; */
        /* margin-top:25px; */
        margin-left:auto;
        margin-right:auto;
      
    }
    .tab_con ul{
        width:100%;
        overflow: hidden;
        /* background-color: red; */
        margin:0px auto;
        /* margin-left: 2.1%; */
    }
    .tab_con ul li{
        width:30%;
        margin-right:5%;
        margin-bottom: 10px;
        height: auto;
        overflow: hidden;
        float: left;
        /* background-color: lemonchiffon; */
    }
    .tab_con ul li:nth-of-type(3n){
        margin-right:0px;
    }
    .tab_con li img{
        width:100%;
        height: 95px;
    }
    .tab_con li p{
        width:100%;
        text-align: center;
        color:black;
        /* font-size: 40px; */
    }
.showmore{
    padding-top: 10px;
    padding-bottom: 10px;
    width:100%;
    height: auto;
    margin-top:10px;
    border-color: indigo;
   

}
.showmore #showmore{
    display:block;
    width:30%;
    margin-left: auto;
    margin-right:auto;
    border: chocolate;
    text-align: center;
    color:chocolate;
    padding-left:25px;
    padding-right:25px;
    border: 1px solid chocolate;
    border-radius: 4px;
    padding-top:10px;
    padding-bottom:10px;
    /* font-size: 40px; */
} 
.scrollview #mid_ul{
     width:260%;
 }
.scrollview #last_ul {
        width: 150%;
}
.scrollview ul #mid_li:nth-of-type(12){
        border: none;
}
.scrollview ul #last_li:nth-of-type(5){
        border: none;
}

</style>