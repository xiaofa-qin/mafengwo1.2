<template>
    <main>
        <div class="header">
           <router-link to="/"><img src="../assets/images/logo200.jpg" alt=""></router-link> 
            <div class="header_right">
                <span></span>
                <p>订单</p>
            </div>
        </div>
        <section class="nav">
            <div id="nav">
                <router-link to="/">首页</router-link>
                <router-link to="/strategy">目的地</router-link>
                <router-link to="/tranotes">游记</router-link>
                <router-link to="/hotel" id="last">酒店</router-link>
            </div>
        </section>
        <section class="slideshow">
            <div class="slide_left">
                <span>
                </span>
            </div>
            <!-- <div class="slide_mid">
                <mt-swipe :auto="4000">
                    <mt-swipe-item><img src="../assets/images/ico5.png" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../assets/images/left_logo.png" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../assets/images/i_head5.png" alt=""></mt-swipe-item>
                  </mt-swipe>
            </div> -->
            <div class="slide_mid">
                <img src="../assets/images/logo200.jpg" alt="">
            </div>
            <div class="slide_right"></div>
        </section>
        <content>
            <div class="mid">
                <ul class="top">
                    <li class="one">旅游度假</li>
                    <li class="two">机酒套餐</li>
                    <li class="three">机票</li>
                    <li class="four">订酒店</li>
                    <li class="five">跟团游</li>
                    <li class="six">邮轮</li>
                </ul>
                <ul class="mid_ul">
                    <li class="one">当地玩乐</li>
                    <li class="two">一日游</li>
                    <li class="three">多日游</li>
                    <li class="four">景点门票</li>
                    <li class="five">酒店套餐</li>
                    <li class="six">当地体验</li>
                </ul>
                <ul class="bot_ul">
                    <li class="one">出行必备</li>
                    <li class="two">签证</li>
                    <li class="three">WiFi</li>
                    <li class="four">电话卡</li>
                    <li class="five">定制</li>
                    <li class="six">接机送</li>
                    <li class="seven">交通卡</li>
                </ul>
            </div>
            <section>
                <div class="first_item" v-for="(item,index) in list">
                    <div id="top">
                        <h3>{{item.toph3}}</h3>
                    </div  class="item_con">
                <router-link to="">
                     <img :src="item.item_con_img" alt="" id="">
                     <span id="img_bot"></span>
                     <div class="info">
                         <h2>{{item.infoh2}}</h2>
                     </div>
                    </router-link>
                      <div class="firstItem">
                         <ul class="firstitem_ul">
                        <li v-for="(item,index) in list_one[index]">
                           <div id="box">
                            <img :src="item.boximg" alt="">
                               <div class="box_word">
                                   <p id="title">{{item.title_p}}</p>
                               </div>
                               <p id="price">{{item.price}}</p> 
                           </div>  
                        </li>
                        <li><div id="last_seemore" @click="seemore()">查看更多</div></li>     
                    </ul>
                      </div>
                </div>
            </section>
            
        </content>
        <section class="bot_section">
            <div class="box_title"><span id="lf"></span><p>大家都在买</p><span id="rg"></span></div> 
           <div class="itemul" >
               <ul>
                <li v-for="(item,index) in list_two">
                    <img :src="item.src" alt="">
                    <div class="title"><p>
                       {{item.title}}
                    </p></div>
                    <div class="price"><p>￥&nbsp;{{item.price}}<span id="unit">起</span></p></div>
                </li>
            </ul>

         </div>
         <div class="getmore" @click="getmore()">加载更多</div>
        </section>
    </main>
</template>
<script>
    export default{
        data(){
            return{
                 list:[
                     {
                    toph3:"爆款热卖",
                    item_con_img:"./src/assets/images/xwyscenery.png",
                    infoh2:"普吉岛",
                    },
                     {
                    toph3:"",
                    item_con_img:"./src/assets/images/xwyscenery1.jpeg",
                    infoh2:"清迈",
                    }
                    
                 ],
                 list_one:[
                     [
                     {
                        boximg:"./src/assets/images/box_word1.jpg",
                        title_p:"斯米兰出海游天津直飞普吉岛/PP岛6天自由行（亲子/蜜月/网红无边泳池+芭东卡塔海滩酒店+赠无限流量电话卡/接送机+私人别墅+看人妖秀+体验泰式美食+可搭配曼谷/清迈两地)",
                        price:"￥3580起"             
                 },
                     {
                        boximg:"./src/assets/images/box_word2.jpeg",
                        title_p:"寒假尾单/错峰立减+北京直...",
                        price:"￥4080起"             
                 },
                     {
                        boximg:"./src/assets/images/box_word3.jpeg",
                        title_p:"一价全包省心游 上海直飞...",
                        price:"￥3180起"             
                 },
                     {
                        boximg:"./src/assets/images/box_word4.jpeg",
                        title_p:"寒假/春节早订优惠·上海直...",
                        price:"￥3480起"             
                 },
                     {
                        boximg:"./src/assets/images/box_word5.gif",
                        title_p:"【多人省千元】小清新...",
                        price:"￥7980起"             
                 },
                     {
                        boximg:"./src/assets/images/box_word6.jpeg",
                        title_p:"北京直飞普岛自助...",
                        price:"￥3980起"             
                 },
                     {
                        boximg:"./src/assets/images/box_word7.gif",
                        title_p:"【可订今日 中文接待】泰国...",
                        price:"￥64起"             
                 },
                     {
                        boximg:"./src/assets/images/box_word8.gif",
                        title_p:"【多人省千元】 奇趣潮流...",
                        price:"￥5588起"             
                 }
                ],
                     [
                     {
                        boximg:"./src/assets/images/box_word9.jpeg",
                        title_p:"清迈清莱黑庙白庙蓝庙/金...",
                        price:"￥219起"             
                 },
                     {
                        boximg:"./src/assets/images/box_word10.gif",
                        title_p:"全国办理-泰国落地签（...",
                        price:"￥145起"             
                 },
                     {
                        boximg:"./src/assets/images/box_word11.gif",
                        title_p:"北京送签-泰国单次旅游签...",
                        price:"￥286起"             
                 },
                     {
                        boximg:"./src/assets/images/box_word12.jpeg",
                        title_p:"广州直飞清迈+普吉8天6...",
                        price:"￥3999起"             
                 },
                     {
                        boximg:"./src/assets/images/box_word13.jpeg",
                        title_p:"春夏早鸟特惠清迈嗨FUN...",
                        price:"￥5999起"             
                 },
                     {
                        boximg:"./src/assets/images/box_word14.png",
                        title_p:"长沙直飞清迈5天4晚自由...",
                        price:"￥1980起"             
                 },
                     {
                        boximg:"./src/assets/images/box_word15.jpeg",
                        title_p:"广州直飞清迈/清迈+拜县5...",
                        price:"￥2999起"             
                 },
                     {
                        boximg:"./src/assets/images/box_word16.jpeg",
                        title_p:"西安送签-泰国单次旅游签...",
                        price:"￥229起"             
                 }
                ],
                 
                 ]
                 ,list_two:[
                     {
                         src:"./src/assets/images/botsectionli1.jpeg",
                         title:" 免费升三餐+赠漂浮早餐·马尔代夫波杜希...",
                         price:"11880"
                     },
                     {
                         src:"./src/assets/images/botsectionli2.jpeg",
                         title:" 樱花季节预售·上海直飞日本大阪-京都-奈...",
                         price:"3499"
                     },
                     {
                         src:"./src/assets/images/botsectionli_one.jpg",
                         title:" 免费升三餐+赠漂浮早餐·马尔代夫波杜希蒂岛7天自由行（可升级一价全包+188平超大别墅+私人泳池+蜜月赠送+快艇上岛+免费浮潜装备+可定双国/双岛连线+可全国联运+资深老店）",
                         price:"4099"
                     },
                     {
                         src:"./src/assets/images/botsectionli3.jpeg",
                         title:"4人以上赠10个小时中文包车·重庆飞巴厘岛...",
                         price:"3780"
                     },
                     {
                         src:"./src/assets/images/botsectionli4.jpeg",
                         title:"杭州直飞日本冲绳4-5天往返含税机票（...",
                         price:"10000"
                     },
                     {
                         src:"./src/assets/images/botsectionli5.gif",
                         title:" 春节预售·成都直飞梅州岛+涛岛6-8天往返...",
                         price:"3980"
                     },
                     {
                         src:"./src/assets/images/botsectionli6.png",
                         title:" 无锡沾花湾景区 沾花客栈2天1晚住宿...",
                         price:"699"
                     },
                     {
                         src:"./src/assets/images/botsectionli_one.jpg",
                         title:"上海送签-日本单次旅游签证（春日去日本...",
                         price:"218"
                     },
                 ]
                }
        }
    }
</script>
<style  scoped>
  * {
        margin: 0px;
        padding: 0px;
        list-style: none;
    }
    .header {
        width: 100%;
        overflow: hidden;
        /* border-bottom: 1px solid black; */
        padding-bottom: 6px;
    }
    .header img {
        float: left;
        width:100px;
        height: auto; 
        margin-top: 8px;
        margin-left: 8px;
        transform: scale(0.7);
    }
    .header_right{
        width: 30%;
        float: right;
        margin-top: 10px;
        overflow: hidden;
        /* background-color: orchid; */
    }
   .header_right span{
       float: left;
       width: 41px;
       height:42px;
       display:block;
       zoom: 0.6;
       margin-left:20px;
       background-color: palegreen;
       background:url("../assets/images/i_head5.png") no-repeat -28px -129px;
   }
    .header_right p{
        float: right;
        border:1px solid orange;
        /* border-radius: 5px; */
        border-top-left-radius:10px;
        border-bottom-left-radius: 10px;
        color:#ff9f06;
    }
    .nav{
        width: 100%;
        background-color: #ff9f06;
        padding-top:10px;
        padding-bottom: 10px;
    }
    .nav a{
        text-decoration: none;
        display: inline-block;
        width:23%;
        color:white;
        text-align: center;
        border-right: 1px solid white;
    }
    #last{
        border-right: none;
    }
    .slide_mid{
        width:100%
    }
    .slide_mid img{
        width:200px;
        height:50px;
        display:block;
        margin-left: auto;
        margin-right:auto;

    }
    .mid ul{
        overflow: hidden;
    }
   .top ul{
    width:100%;
   }
   .top li{
       float:left;
       color:white;
       background-color: orange;
       margin-right:0.8%;
      
       box-sizing: border-box;
       width:30%;
   }  
   .top .one{
    width: 5%;
    padding-top: 5%;
    padding-bottom: 4%;
    text-align: center;
    }
    .top .two{
    padding-top: 13%;
    padding-bottom: 12.9%;
    margin-bottom: 1%;
    color: white;
    text-align:center;
    }
    .top .three,.top .four,.top .five,.top .six{
        padding-top:4.8%;
        padding-bottom:4.8%;
        text-align: center;
        color: white;
        margin-bottom: 1%;
    }
    .top .four,.top .six{
        margin-right: none;
    }
  

    .mid_ul ul{
    width:100%;
   }
   .mid_ul li{
       float:left;
       color:white;
       background-color: #12cc90;
       margin-right:0.8%;
       box-sizing: border-box;
       width:30%;
   }  
   .mid_ul .one{
    width: 5%;
    padding-top: 5%;
    padding-bottom: 4%;
    text-align: center;
    }
    .mid_ul .two{
    padding-top: 13%;
    padding-bottom: 12.9%;
    margin-bottom: 1%;
    color: white;
    text-align:center;
    }
    .mid_ul .three,.mid_ul .four,.mid_ul .five,.mid_ul .six{
        padding-top:4.8%;
        padding-bottom:4.8%;
        text-align: center;
        color: white;
        margin-bottom: 1%;
    }
    .mid_ul .four,.mid_ul .six{
        margin-right: none;
    }
   

    .bot_ul ul{
    width:100%;
   }
   .bot_ul li{
       float:left;
       color:white;
       background-color: #1fb7da;
       margin-right:0.8%;
       box-sizing: border-box;
       width:30%;
   }  
   .bot_ul .one{
    width: 5%;
    padding-top: 5%;
    padding-bottom: 4%;
    text-align: center;
    }
    .bot_ul .two{
        padding-top:4.8%;
        padding-bottom:4.8%;
        text-align: center;
        color: white;
        margin-bottom: 1%;
    }
    .bot_ul .three,.bot_ul .four,.bot_ul .five,.bot_ul .six,.bot_ul .seven{
        padding-top:4.8%;
        padding-bottom:4.8%;
        text-align: center;
        color: white;
        margin-bottom: 1%;
    }
    .bot_ul .four,.bot_ul .seven{
        margin-right: none;
    }
    @media screen  and (max-width:350px){
    .top .one{
    width: 5%;
    padding-top:3%;
    padding-bottom: 4%;
    text-align: center;
    }
    .top .two{
    padding-top: 13%;
    padding-bottom: 13.9%;
    margin-bottom: 1%;
    color: white;
    text-align:center;
    }
    .mid_ul .one{
    width: 5%;
    padding-top: 3%;
    padding-bottom: 4%;
    text-align: center;
    }
    .mid_ul .two{
    padding-top: 13%;
    padding-bottom: 13.8%;
    margin-bottom: 1%;
    color: white;
    text-align:center;
    }
    .bot_ul .one{
    width: 5%;
    padding-top:3%;
    padding-bottom: 4%;
    text-align: center;
    }
   }

#top h3{
    width:30%;
    margin-right: auto;
    margin-left:auto;
    margin-top: 5%;
    margin-bottom:5%;
    color: gray;
    text-align: center;
}
.first_item img{
    width:100%;
    position:relative;
}

.info h2{
    position:absolute;
    bottom:35px;
    left:35%;
    font-size: 30px;
    color: white;
}
#img_bot{
    width: 10px;
    height:10px;
    background-color: white;
    border-left: 1px solid white;
    border-top: 1px solid white;
    position: absolute;
    bottom: 0px;
    left:48%;
    transform: rotate(45deg);
}
.firstItem{
    overflow: auto;
    width:100%;
    margin-top:10px;
    padding-bottom:3px;
}
.first_item a{
     position: relative;
     width: 100%;
     display: block;
}
.firstItem::-webkit-scrollbar {
    display:none
    }
.firstitem_ul {
    width:284%; 
    /* float: right; */
    overflow: hidden;
    margin-left:12px;
}
.firstitem_ul li{
    width:10.2%;
    float: left;
    margin-right:11px;
    border: 1px solid rgba(0, 0, 0, 0.116);
}
.firstitem_ul li:last-of-type{
    width:5%;
    margin-right:0px;
    margin-left:5px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top:26px;
    padding-bottom:19px;

}
.firstitem #box img{
    width:100%;
}
.box_word #title{
        text-align: center;
        word-break: break-all;
        display: -webkit-box;
    /* text-align: right; */
        /*对象作为伸缩盒子模型展示* */
        -webkit-box-orient: vertical;
        /**设置或检索伸缩盒子对象的子元素的排列方式**/
        -webkit-line-clamp:2;
        /**显示的行数**/
        overflow: hidden;
        /**隐藏超出的内容**/
        font-size:10px;  
        width:83%;
        text-align:left;
        margin:auto auto; 
}

 #price{
    color: orange;
    width:80%;
    margin:auto auto;
    margin-top:10px;
    margin-bottom: 10px;
 
}
#box .box_word{
    width:76%;
    padding-bottom: 5px;
    /* background-color: lime; */
    margin:auto auto;
    border-bottom:1px solid rgba(0, 0, 0, 0.212);
}
.firstitem_ul #last_seemore{
    width:30%
}
#last_seemore{
    text-align: center;
    margin-left:16px;
}  
.box_title{
    width:100%;
    margin-top:15px;
    padding-top:10px;
    padding-bottom: 10px;
    background-color: rgba(128, 128, 128, 0.068);
}
.box_title p{
    width:50%;
    margin:auto auto;
    text-align: center;
    color:rgba(128, 128, 128, 1)
    
}
.itemul {
    margin-top:10px;
}
.itemul ul{
    width:98%;
    overflow: hidden;
    margin-left: 7px; 
    padding-bottom: 25px;
    /* border-bottom: 1px solid black; */
}
.itemul ul li{
  position: relative;
  margin-left:3px;
  width: 46%;
  border: 1px solid rgba(0, 0, 0, 0.233);
  margin-bottom: 2%;
  box-sizing: border-box;

}
.itemul ul li:nth-of-type(1n){
    float: left;
    margin-left: 4px;
   
}
.itemul ul li:nth-of-type(2n){
    float: right;
    margin-right:14px;
}
.itemul ul li  img{
    width:100%
}
.itemul .title p{
        text-align: left;
        word-break: break-all;
        display: -webkit-box;
        /*对象作为伸缩盒子模型展示* */
        -webkit-box-orient: vertical;
        /**设置或检索伸缩盒子对象的子元素的排列方式**/
        -webkit-line-clamp:2;
        /**显示的行数**/
        overflow: hidden;
        /**隐藏超出的内容**/
        width:90%; 
        margin:auto auto;
}
.itemul .price p{
   width:90%;
   color: orange;
   margin:auto auto;
   
}
.price #unit{
    font-size: 10px;

}
.getmore{
    width:100%;
    border-top: 1px solid rgba(0, 0, 0, 0.178);
    padding-top:10px;
    padding-bottom:10px;
    text-align: center;
    color: rgba(0, 0, 0, 0.397);
}

</style>
<style>
    body{
        width:100vw;
    }
</style>