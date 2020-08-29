<template>
  <main>
   
    <div class="head">
    <img src="../assets/images/logo200.png" alt class="logo" >
    <router-link to='/login'><p class="log">登录</p>
    </router-link>
   <div class="search">
     <input type="text" placeholder="搜索目的地/攻略/游记">
    <img class="" src="../assets/images/search.png" alt="">
    </div>
    </div>
    <div class="content">
      <mt-swipe :auto="4000">
         <mt-swipe-item>
          <img src="../assets/images/content1.png" alt="">
          </mt-swipe-item>
           <mt-swipe-item>
          <img src="../assets/images/content4.png" alt="">
          </mt-swipe-item>
           <mt-swipe-item>
          <img src="../assets/images/content5.png" alt="">
          </mt-swipe-item>
       </mt-swipe>
    </div>
    <div class="turn" >
      <img src="../assets/images/backtop.png" alt=""   @click="backTop()">
    </div>
   
    <div class="content_1">
      <ul>
        <li v-for="(item,index) in list">
           <router-link :to="item.path">
             <span class="iconfont" :style="item.iconBg"> {{item.iconContent}} </span> 
             </router-link>
          <p :style="item.cor">{{item.con}} </p>
        </li>
      </ul>
    </div>
    <div class="content_2">
      <h1>推荐攻略</h1>
    </div>
    <ul class="content_3">
      <li v-for="(item,index) in list1">
        <p>{{item.con}} <span  v-if="item.pre!==''">{{item.pre}} </span> </p>
        <p>{{item.con1}} </p>
        <div class="content_3b"> <img :src="item.src" alt="">
        <b>{{item.con2}} </b>
        <u>{{item.con3}} </u>
      <em>{{item.name}}  <img :src="item.pic" alt="" class="hp"></em>
     
        </div>
       
      </li>
      
    </ul>
    <div class="more">
    <p>点击加载更多>></p> 
    </div>
    <div class="footer">
      <ul>
        <li v-for="(item,index) in list2" >
          <p >{{item.foot}}</p>
        </li>
      </ul>
      <u>©2020 Mafengwo.cn 京ICP备11015476号<br>
      北京马蜂窝网络科技有限公司 企业营业执照<br>
      马蜂窝客服：+86-10-8341-6888
      </u>
    </div>
     <router-view></router-view>
  </main>
</template>

<script>

export default {
  data(){
    return{
      list:[
        {
          path:'/strategy',
          iconContent:'\ue7a0',
          iconBg:'background:orange',
          cor:'color:orange',
          con:'找攻略'

        },
        {
          path:'/tranotes',
          iconContent:'\ue8ac',
          iconBg:'background:#fbc943',
           cor:'color:#fbc943',
          con:'看游记'
        },
           {
          path:'/wenda',
          iconContent:'\ue614',
           iconBg:'background:#abd0bc',
          cor:'color:#abd0bc',
          con:'问达人'
        },
          {
         path:'',
          iconContent:'\ue602',
           iconBg:'background:rgb(218, 96, 114)',
            cor:'color:rgb(218, 96, 114)',
          con:'头脑风暴'
        },
          {
          path:'/hotel',
         iconContent:'\ue620',
          iconBg:'background:rgb(25, 159, 212)',
           cor:'color:rgb(25, 159, 212)',
          con:'酒店'
        },
          {
          path:'/sales',
          iconContent:'\ue615',
           iconBg:'background:rgb(235, 78, 51)',
            cor:'color:rgb(235, 78, 51)',
          con:'去旅行'
        },
          {
          path:'',
          iconContent:'\ue60d',
           iconBg:'background:rgb(136, 219, 11)',
            cor:'color:rgb(136, 219, 11)',
          con:'机票'
        },
          {
          path:'/local',
          iconContent:'\ue607',
           iconBg:'background:rgb(201, 22, 233)',
            cor:'color:rgb(201, 22, 233)',
          con:'当地玩乐',
         
        },  
      ],
       redirect:'/',
      list1:[
        {
          con:'云南昆明|飞的跨省度周末系列之',
          con1:'【我在昆明】',
          src:'./src/assets/images/content3.png',
          pre:'蜂首',
          con2:'周末随心飞，开始咯~冲动是魔鬼，和朋友抢下了东航的周末随心飞，从抢下那天开始，就估摸着，怎么飞才能值回票价',
          pic:'./src/assets/images/hp1.jpeg',
          con3:'29298浏览',
          name:'饭团karenchow'
        },
         {
          con:'探索汉中秦巴秘境，低调而惊艳的自',
          con1:'驾之旅',
          src:'./src/assets/images/content4.jpg',
          pre:'',
           pic:'./src/assets/images/hp2.jpeg',
          con2:'前言 汉中 如此低调，低调到很多人都不知道这里是汉文化的发源地，她被誉为汉人老家，依...'
          ,
          con3:'91浏览',
          name:'摄影师张扬'
        },
          {
          con:'从钢筋森林到山河变幻，牛羊成群',
          con1:'——驱车288KM感受锡林郭勒8...',
          src:'./src/assets/images/content5.jpg',
          pre:'',
           pic:'./src/assets/images/hp3.jpeg',
          con2:'【写在前面】这次真的算得上是走就走的旅行了，8月10号确定，12号就出发了！同事从8月1日开始在朋友圈用自驾草原的美图'
          ,
          con3:'442浏览',
          name:'janet1321'

        },
         {
          con:'什么是春天，就是那桃花漫山的西',
          con1:'藏。【赴一场春天的约会】',
          src:'./src/assets/images/content5.jpeg',
          pre:'',
           pic:'./src/assets/images/hp4.jpeg',
          con2:'缘起 朋友圈里面看到近期出行的西北风光大片，心痒了，于是简单勾勒出一个大致的行程便拖着老公带着娃上路了'
          ,
          con3:'291浏览',
          name:'Fiona'
        },
         {
          con:'成都，想带走的全都带不走，但可以',
          con1:'写进游记里，写进记忆的精选集。',
          src:'./src/assets/images/content6.jpg',
          pre:'',
           pic:'./src/assets/images/hp5.jpeg',
          con2:'来成都有好几次了，从次数上足以说明我对这座城市的喜爱。除了这里的热情好客，出于“好吃”本性，更让我对成都偏爱有加。'
          ,
          con3:'13099浏览',
          name:'游向蓝天的鱼'
        },
         {
          con:'看了一个日落的海|日本行之关东',
          con1:'篇：箱根(小田原)-东京-...',
          src:'./src/assets/images/content7.jpg',
          pre:'',
           pic:'./src/assets/images/hp6.jpeg',
          con2:'拖了一年的日本行下篇哈哈，终于完整了。DAY7箱根早上从新大阪坐新干线（贵）去往田原，内心的激动按耐不住。'
          ,
          con3:'91浏览',
          name:'人间不耐烦'
        },
         {
          con:'拉萨，西藏以西--阿里大北线，珠穆',
          con1:'朗玛峰、冈仁波齐徒步转山之行~',
          src:'./src/assets/images/content8.jpg',
          pre:'',
           pic:'./src/assets/images/hp7.jpeg',
          con2:'预告...一些图为什么是阿里？阿里，西藏以西，“世界屋脊”的屋脊，喜马拉雅山脉、冈仁波奇徒步转山之行~'
          ,
          con3:'305浏览',
          name:'兔子的惊奇箱'
        },
         {
          con:'对佛法最深入阿一次体验--色达和玉',
          con1:'陀【阿迅的西行记】',
          src:'./src/assets/images/content9.jpg',
          pre:'',
           pic:'./src/assets/images/hp8.jpeg',
          con2:'不是亲眼见到，我也许永远也不会知道，小学课本里说我们国家幅员辽阔的真正含义。那是在你的生活之外，在你的亲朋友好友的生活之外。'
          ,
          con3:'145浏览',
          name:'阿迅要去看世界'
        },
      ],
      list2:[
        {
        foot:'PC版',
        y:''
        },
        {
          foot:'用户反馈',
        y:''
        },
        {
          foot:'加入我们',
          y:'1'
        },
        {
          foot:'登录'
        }
      ],

    }
  },
  methods:{
    backTop:function(){
      scrollTo(0,0);
    }

  }
  }

    
</script>
<style  scoped>
.head{
  overflow: hidden;
}
.logo{
  float: left;
    margin-top: 15px;
    margin-left: 10px;
    height: 20px;
}
.log{
    float: right;
    text-decoration: none;
    font-size: 14px;
    color: rgb(238, 158, 9);
    margin-right: 8px;
    margin-top: 15px;
}
.search{
  float: left;
  background-color: rgba(233, 225, 225, 0.603);
 
   margin-top: 12px;
   width: 58%;
   border-radius: 40px;
   margin-left: 8px;  
}
input{
  float: left;
   margin-left: 8px;
 font-size: 11px;
 border: none;
 background: rgba(233, 225, 225, -0.397);
 outline: none;
 width: 85%;
 height: 20px
 
}
.search img{
  height: 15px;
  margin-top: 3px;
 
}
.content{
  /* background-color: thistle; */
  width: 100vw;
  margin-top: 9px;
}
.content img{
  width: 100%;
}
.content_1{
  overflow: hidden;
  width: 100vw;
  margin-top: 20px;
}
.content_1 span{
  display: inline-block;
  width: 37%;
 padding:  8% 6% ;
  font-size: 26px;
  color: white;
   border-radius: 40%;
}
.content_1 li{
 width: 25%;
  float: left;
 margin-bottom:15px ;
  text-align: center;
}
.content_1 p{
  font-size:14px;
  margin-top: 11px;
  text-align: center;
}
.content_2{
  margin-left: 13px;
  padding-left: 6px;
  border-left:4px solid gold;
  border-radius: 3px;
  margin-bottom: 5px;

}
.content_2 h1{
  font-size: 17px;
  font-weight: bold;
}
.content_3 li{
  margin-bottom: 3%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.089);
 
}
.content_3 p{
  font-size: 16px;
  margin-left: 20px;

}
.content_3 span{
  display: inline-block;
  height: 20px;
  width: 11vw;
  float: right;
  background: rgb(233, 200, 14);
  color: white;
  font-size: 11px;
  text-align:  center;
  line-height: 20px;
  margin-top: 2px;
  border-radius: 2px;
}
.content_3b{
  margin-top: 5px;
  margin-bottom: 3%;
  margin-left: 12px;
  overflow: hidden;
  padding-right: 20px;

}
.content_3b img{
  width: 32vw;
 float: left;
  margin-right: 13px;
}
.content_3b b{
  font-weight: normal;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.548);
   word-break: break-all;
   display: -webkit-box; /*对象作为伸缩盒子模型展示* */
  -webkit-box-orient: vertical; /**设置或检索伸缩盒子对象的子元素的排列方式**/
  -webkit-line-clamp: 3; /**显示的行数**/
  overflow: hidden; /**隐藏超出的内容**/
}
.content_3b u,em{
  display: inline-block;
  text-decoration: none;
  font-size: 10px;
  margin-top: 6%;
  color: rgba(0, 0, 0, 0.548);
}

.content_3b em{
  float: right;
 
}
.content_3b .hp{
  margin-right: 5px;
  height: 3vh;
  width: auto;
  float: right;
  border-radius: 50%;
  margin-left: 10px;
  
}
.more{
  margin: 20px auto;
}
.more p{
  display: block;
  font-size: 12px;
  color:rgba(15, 15, 228, 0.918);
  text-decoration: none;
  text-align: center;
  /* margin-bottom: 30px; */
}
.footer {
overflow: hidden;
background:#192025;
padding-top: 20px;
}
.footer p{
  width: 22.9%;
  height:4vh ;
  float: left;
  color: rgba(255, 255, 255, 0.534);
  text-align: center;
  line-height: 4vh;
  font-size: 11px;
  background:rgba(248, 246, 246, 0.11);
  /* margin-right: 10px; */
  margin-left: 5px;
 
 margin-bottom: 20px;
  border-radius: 5px;
}
.footer .current{
  color: darkgoldenrod;
}
.footer u{
  
  display: block;
  color: rgba(255, 255, 255, 0.39);
  text-decoration: none;
  font-size: 8px;
  text-align: center;
  margin-bottom: 15px;
}
.turn img{
  width: 11%;
  position: fixed;
 border-radius: 50%;
 right: 4%;
 bottom: 13%;
}
</style>
<style>

.content .mint-swipe-items-wrap{
  padding-bottom: 56.26%;
}
.content .mint-swipe-indicator{
  background: rgba(169, 169, 169, 0.651);
  opacity: 0.9;
}
.content .is-active{
    background:darkorange;
}
</style>