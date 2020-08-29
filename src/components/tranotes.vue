<template>
    <main>
         <div class="header">
            <img src="../assets/images/logo200.png" alt="">
            <router-link to="/" id="back_fir">官网首页</router-link>
           <router-link to=""><span id="search"></span></router-link> 
        </div>
        <div class="content0">
            <div class="contenth">
                 <p>|21|2020|蜂首纪念| </p><span><img src="../assets/images/tranotes1.png" alt=""></span>
            </div>
           
            <div class="slishow"  >
                 <mt-swipe :auto="4000" >
         <mt-swipe-item v-for="(item,index) in list">
          <img :src="item.src" alt="">
          <p>{{item.con}} </p>
            <b>{{item.con1}} </b>
          </mt-swipe-item>
           </mt-swipe>
            </div>
        </div>
        <ul class="content1">
            <li v-for="(item,index) in list1">
                <div class="content1_left">
                    <b>{{item.con}} </b>
                    <p><span ><img :src="item.src" alt="" class="hp"></span>{{item.con1}} <span class="site">{{item.con2}} </span> </p>
               <span class="elf"></span><span class="br">{{item.br}} </span>
               <span class="elf1"></span>
               <span class="br">{{item.com}} </span>
                </div>
                <span><img :src="item.pic" alt="" class="rp"></span>
            </li>
            
        </ul>
        <div class="footer">
            <p>加载更多</p>
        </div>
    </main>
</template>
<script>
export default {
  data(){
    return{
      list:[
          {
              src:'./src/assets/images/tranotes2.png',
              con:'【挪威】我喊你一声欧若拉,你..',
              con1:'我是一路向北 我在挪威'
          },
           {
              src:'./src/assets/images/tranotes3.png',
              con:'云南昆明|飞的跨省度周末系列..',
              con1:'我是饭团karenchow 我在昆明'
          },
           {
              src:'./src/assets/images/tranotes4.png',
              con:'新冠肺炎爆发时，我在冰岛看极光',
              con1:'我是赵瑞欧 我在冰岛'
          },
           {
              src:'./src/assets/images/tranotes5.png',
              con:'顺德三日，你猜我吃了几顿饭？',
              con1:'我是东哥到处走 我在顺德'
          },
           {
              src:'./src/assets/images/tranotes6.png',
              con:'暴风雨下的追风少年，单车骑游山..',
              con1:'我是沈亦铭Chew_le 我在南京'
          },
      ],
      list1:[
          {
              con:'英伦二岛24日——伦敦篇',
              src:'./src/assets/images/t1.jpeg',
              con1:'粒粒兔 在',
              con2:'英国',
              br:'3854',
              com:'25',
              pic:'./src/assets/images/t1.jpg'
          },
           {
              con:'重庆|疫后出发，端午小假期吃吃吃在重庆',
              src:'./src/assets/images/t2.jpeg',
              con1:'饭团ka.. 在',
              con2:'重庆',
              br:'39342',
              com:'64',
              pic:'./src/assets/images/t2.jpg'
          },
           {
              con:'夏日独行曲，在川北青南的14个日夜',
              src:'./src/assets/images/t3.jpeg',
              con1:'sockmai 在',
              con2:'四川',
              br:'8872',
              com:'54',
              pic:'./src/assets/images/t3.jpg'
          },
           {
              con:'汕头，一座值得专程为吃而去的城市',
              src:'./src/assets/images/t4.jpeg',
              con1:'游向蓝.. 在',
              con2:'汕头',
              br:'27847',
              com:'111',
              pic:'./src/assets/images/t4.jpg'
          },
           {
              con:'寻一海岛，浪迹天涯。拥抱南纬8度的盛夏',
              src:'./src/assets/images/t5.jpeg',
              con1:'粒粒兔 在',
              con2:'英国',
              br:'8691',
              com:'30',
              pic:'./src/assets/images/t5.jpg'
          },
           {
              con:'战斗民族不是全部，露西亚还有艺术和童话..',
              src:'./src/assets/images/t6.jpeg',
              con1:'最熟悉 在',
              con2:'俄罗斯',
              br:'3469',
              com:'39',
              pic:'./src/assets/images/t6.jpg'
          },
           {
              con:'老上海风情巷寻找“诗和远方”|魔都四..',
              src:'./src/assets/images/t7.jpeg',
              con1:'_Milky.. 在',
              con2:'上海',
              br:'12940',
              com:'25',
              pic:'./src/assets/images/t7.jpg'
          },
           {
              con:'《碧海蓝天》拍摄地——西西里岛双城',
              src:'./src/assets/images/t8.jpeg',
              con1:'啦啦 在',
              con2:'西西里',
              br:'8414',
              com:'74',
              pic:'./src/assets/images/t8.jpg'
          },
           {
              con:'周末逃跑计划vol.6|得闲饮茶，去一趟',
              src:'./src/assets/images/t9.jpeg',
              con1:'蓝先生 在',
              con2:'秦州',
              br:'30088',
              com:'40',
              pic:'./src/assets/images/t9.jpg'
          },
           {
              con:'通往纯净的世界屋脊，未知的西藏。',
              src:'./src/assets/images/t10.jpeg',
              con1:'飞欧娜树 在',
              con2:'西藏',
              br:'50044',
              com:'630',
              pic:'./src/assets/images/t10.jpg'
          },
           {
              con:'西藏以西·九千里路云和月·阿里大环线自驾',
              src:'./src/assets/images/t11.jpeg',
              con1:'Super 在',
              con2:'西藏',
              br:'8998',
              com:'61',
              pic:'./src/assets/images/t11.jpg'
          },
      ]
    }
  }
}
 </script>
<style scoped>

     .header {
        width: 100%;
        overflow: hidden;
        /* border-bottom: 1px solid rgba(0, 0, 0, 0.281); */
        padding-bottom: 10px;
    }

    a {
        text-decoration: none;
        color:black
    }

    .header img {
        float: left;
        width:100px;
        height: auto; 
        margin-top: 13px;
        margin-left: 20px;
        transform: scale(2em);
    }

    .header #back_fir {
        float: right;
        text-align: center;
        margin-right: 69px;
        margin-top: 15px;
        color: orange;
    }

    .header #search {

        display: inline-block;
        float: right;
        width: 42px;
        height: 44px;
        top:40px;
        right: -220px;
        background: url('../assets/images/i_head5.png') no-repeat -29px -131px;
        position: relative;
        zoom:0.5;
    }

    .header #search::after {
        content: "";
        display: block;
        width: 2px;
        height: 30px;
        background-color: rgba(0, 0, 0, 0.212);
        position: absolute;
        right: 62px;
        top: 3px;   
    }
    .content0{
        overflow: hidden;
        position: relative;
        background: lightseagreen;
        height: 60vh;
        width: 100%;
        margin-bottom: 2%;
    }
    .contenth{
        overflow: hidden;
        margin-bottom: 7%;
    }
    .contenth p{
        float: left;
        color: white;
        font-size: 6vw;
        padding-top: 6%;
        padding-left: 3%;
    }
    .contenth img{
        float:right;
        padding-top: 6%;
        padding-right: 2%;
        border-radius: 5px;
        
    }
    .slishow{
        background:white;
        /* height: 44vh; */
        width: 94%;
        margin: auto ;
        border-radius: 6px;
    }
    .slishow img{
        width: 100%;
    }
   .mint-swipe-indicator{
    background: white;
    }
    .slishow p{
        text-align: center;
        font-size: 5.2vw;
    }
    .slishow b{ 
     padding-left: 22%;
     font-weight: normal;
     font-size: 4.5vw;
    }
    .content1{
        overflow: hidden;
    }
    .content1 li{
        width: 100%;
        height: 22.22vh;
        border-bottom: 1px solid rgba(0, 0, 0, 0.185) ;
    }
    .content1 div{
        float: left;
        height: 100%;
        width: 50%;
        /* background: cadetblue; */
    }
    .content1 .rp{
        width: 50%;
        height: 80%;
        padding-top: 3%;
    }
    .content1 b{
        display: block;
        font-size: 4.7vw;
        padding-left: 12%;
         margin-bottom: 9%;
        padding-top:8% ;

    }
    .content1 p{
        font-size: 4vw;
       /* margin-bottom: %; */
        padding-left: 10%;
        margin-left: 2%;
         color: rgba(0, 0, 0, 0.411);
    }
    .content1 .hp{
        width: 12%;
        border-radius: 50%;
        margin-right: 3%;   
    }
    .content1 .site{
        color: #ff9d00;
    }
    .elf{
        width: 51px;
        height: 32px;
        display: inline-block;
        background: url('../assets/images/ticon.png') no-repeat -30px 10px;
        zoom: 0.4;
        margin-left: 7%;
        padding-left: 1%;
    }
    .elf1{
         width: 46px;
        height:27px;
        display: inline-block;
        background: url('../assets/images/ticon.png') no-repeat -30px -19px;
        zoom: 0.4;
    }
    .br{
        font-size: 3.2vw;
        color: rgba(0, 0, 0, 0.411);
    }
    .footer{
        margin-top: 3%;
        background: rgb(235, 233, 233);
        text-align: center;
        font-size: 3.4vw;
        padding-top: 5%;
        padding-bottom: 5%;
    }
</style>
<style >
.content0 .mint-swipe-items-wrap{
  padding-bottom: 85%;
}
.content0 .mint-swipe-indicator{
  background:white;
}
</style>