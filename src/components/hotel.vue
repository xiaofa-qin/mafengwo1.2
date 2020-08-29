<template>
<main>  
   <div class="header">
            <img src="../assets/images/logo200.png" alt="">
            <router-link to="/" id="back_fir">官网首页</router-link>
           <router-link to=""><span id="search"></span></router-link> 
        </div>
        <div class="redp"> <img src="../assets/images/hotel1.gif" alt=""></div>
       <div class="content">
           <div class="content1">
               <p class="des">目的地</p>
               <input type="text" placeholder="广州">
               <span><img src="../assets/images/hotel1.png" alt=""></span>
               <p class="location">我的位置</p>
           </div>
           <div class="content2">
               <p class="des">入住</p>
                <input type="text" placeholder="10月4号">
                <p class="leave">离去</p>
                 <input type="text" placeholder="10月5号" class="content2_right">
           </div>
           <div class="content3">
                <p class="des">每间</p>
                <input type="text" placeholder="2成人，0儿童">
           </div>
       </div>
       <div class="find"><p>查找酒店</p></div>
       <div class="content4">
           <ul>
              <router-link to='/login'> <li ><img src="../assets/images/hotel2.png" alt="">
               <p>优惠卷</p> 
               </li></router-link>
               <router-link to='/login'>
                <li><img src="../assets/images/hotel3.png" alt="">
                <p>酒店收藏</p>
                </li></router-link>
                <router-link to='/login'> <li><img src="../assets/images/hotel4.png" alt="">
                 <p>我的订单</p>
                 </li></router-link>
           </ul>
       </div>
       <div class="content5">
           <p>主题推荐</p>
           <ul>
               <li v-for="(item,index) in list " @click="change(index)" :class="{current:num==index}">{{item.con}} </li>
              
           </ul>
       </div>
       <div class="footer">
           <ul>
               <li v-for="(item,index) in list1" ><img :src="item.src" alt=""></li>
           </ul>
       </div>
       <div class="footer1">
            <p>酒店攻略</p>
            <div class="footer1_bottom">
                <ul>
                    <li v-for="(item,index) in list2"><img class="big" :src="item.src" alt=""> 
                    <b>{{item.con}} </b>
                    <p><img class="loca" src="../assets/images/hotellc.png" alt="">{{item.con1}} <span class="br">{{item.con2}} </span></p>
                   
                    </li>
                  
                </ul>
            </div>
       </div>
       <div class="end">
           <p>查看更多 ></p>
       </div>
    </main>
  
</template>
<script>
export default {
    
    data(){
        return{
            num:0,
            list:[
                {
                  con:'潜水胜地'
                },
                 {
                  con:'吃货根据地',
                },
                 {
                  con:'迪士尼乐园',
                },
                 {
                  con:'朝拜历史',
                },
                 {
                  con:'亲子之选',
                },
                 {
                  con:'私人海滩',
                },
            ],
           
            list1:[
                {
                    src:'./src/assets/images/hotel5.png'
                },
                 {
                    src:'./src/assets/images/hotel6.png'
                },
                 {
                    src:'./src/assets/images/hotel7.png'
                },
                 {
                    src:'./src/assets/images/hotel8.png'
                },
                 {
                    src:'./src/assets/images/hotel9.png'
                },
                 {
                    src:'./src/assets/images/hotel10.png'
                },
            ] ,
            list2:[
                {
                   src:'./src/assets/images/hotel1.jpeg' ,
                   con:'北京住宿指南|感受古老京城风韵与现代文化',
                   con1:'北京',
                   con2:'0 评论   127347阅读'
                },
                 {
                   src:'./src/assets/images/hotel2.jpeg' ,
                   con:'地心冒险、戏精“剧院” 上海当红炸子鸡酒店',
                   con1:'上海',
                   con2:'0 评论   35697阅读'
                },
                 {
                   src:'./src/assets/images/hotel11.png' ,
                   con:'大明星驾到！盘点明星最爱住的三亚酒店',
                   con1:'三亚',
                   con2:'0 评论   54831阅读'
                },
                 {
                   src:'./src/assets/images/hotel3.jpeg' ,
                   con:'2019濑户内海艺术祭住宿全攻略',
                   con1:'日本',
                   con2:'0 评论   67226阅读'
                },
            ]      
        }
    },
    methods:{
       
        change(a){
            this.num=a;
            if(a==0){
                this.list1=[
                     {
                    src:'./src/assets/images/hotel5.png'
                },
                 {
                    src:'./src/assets/images/hotel6.png'
                },
                 {
                    src:'./src/assets/images/hotel7.png'
                },
                 {
                    src:'./src/assets/images/hotel8.png'
                },
                 {
                    src:'./src/assets/images/hotel9.png'
                },
                 {
                    src:'./src/assets/images/hotel10.png'
                }
                ]             
            }
             else if(a==1){
                 this.list1=[
                      {
                    src:'./src/assets/images/hoteleat1.png'
                },
                 {
                    src:'./src/assets/images/hoteleat2.png'
                },
                 {
                    src:'./src/assets/images/hoteleat3.png'
                },
                 {
                    src:'./src/assets/images/hoteleat4.png'
                },
                 {
                    src:'./src/assets/images/hoteleat5.png'
                },
                 {
                    src:'./src/assets/images/hoteleat6.png'
                }

                 ]
             }
             else if(a==2){
                 this.list1=[
                      {
                    src:'./src/assets/images/hoteledisn1.png'
                },
                 {
                    src:'./src/assets/images/hoteledisn2.png'
                },
                 {
                    src:'./src/assets/images/hoteledisn3.png'
                },
                 {
                    src:'./src/assets/images/hoteledisn4.png'
                },
                 {
                    src:'./src/assets/images/hoteledisn5.png'
                },
                 {
                    src:'./src/assets/images/hoteledisn6.png'
                }
                 ]
             }
              else if(a==3){
                 this.list1=[
                      {
                    src:'./src/assets/images/hotelhistory1.png'
                },
                 {
                    src:'./src/assets/images/hotelhistory2.png'
                },
                 {
                    src:'./src/assets/images/hotelhistory3.png'
                },
                 {
                    src:'./src/assets/images/hotelhistory4.png'
                },
                 {
                    src:'./src/assets/images/hotelhistory5.png'
                },
                 {
                    src:'./src/assets/images/hotelhistory6.png'
                }
                 ]
             }
              else if(a==4){
                 this.list1=[
                     {
                    src:'./src/assets/images/hotelfamily1.png'
                },
                 {
                    src:'./src/assets/images/hotelfamily2.png'
                },
                 {
                    src:'./src/assets/images/hotelfamily3.png'
                },
                 {
                    src:'./src/assets/images/hotelfamily4.png'
                },
                 {
                    src:'./src/assets/images/hotelfamily5.png'
                },
                 {
                    src:'./src/assets/images/hotelfamily6.png'
                }
                 ]
             }
               else if(a==5){
                 this.list1=[
                      {
                    src:'./src/assets/images/hotelbeach1.png'
                },
                 {
                    src:'./src/assets/images/hotelbeach2.png'
                },
                 {
                    src:'./src/assets/images/hotelbeach3.png'
                },
                 {
                    src:'./src/assets/images/hotelbeach4.png'
                },
                 {
                    src:'./src/assets/images/hotelbeach5.png'
                },
                 {
                    src:'./src/assets/images/hotelbeach6.png'
                }
                 ]
             }

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
    .redp img{
        width: 100%;
    }
    .content{
        overflow: hidden;
    }
    .content1{
        position: relative;
        padding-top: 23%;
    }
    .location{
        color:  rgba(0, 0, 0, 0.63);
    }
     .des{
        position:absolute;
        margin-left: 4%;
        font-size: 3.8vw;
        color: rgba(0, 0, 0, 0.63);
        top:18%  
    }
    .leave{
         position:absolute;
        right: 35%;
        font-size:3.8vw;
        color: rgba(0, 0, 0, 0.63);
        top:18%  
    }
    .content1 input{
        margin-left: 4%;
        padding-bottom: 2%;
        width: 70%;
        font-weight: 700;
        font-size: 5.5vw;
        outline: none;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.171);
        position: absolute;
        bottom: 0;  
    }
    .content1 img{
        position: absolute;
        right: 10%;
        width: 5%;
        bottom:35%
    }
    .content1 .location{
        position: absolute;
        right: 5%;
        bottom: 4%;
        font-size: 11px;
    }
    .content2{
        position: relative;
        padding-top: 23%;
    }
     .content2 input{
        margin-left: 4%;
        padding-bottom: 2%;
        width: 40%;
        font-weight: 700;
        font-size: 5.5vw;
        outline: none;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.171);
        position: absolute;
        bottom: 0;  
    }
    .content2_right{
        right:5%;
        padding-bottom: 2%;
        width: 40%;
        font-weight: 700;
        font-size: 18px;
        outline: none;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.534);
        position: absolute;
        bottom: 0;  
    }
     .content3{
         position: relative;
         padding-top: 23%;
        margin-bottom: 5%;
     }
     .content3 input{
        margin-left: 4%;
        padding-bottom: 2%;
        width: 92%;
        font-weight: 700;
        font-size:5.5vw;
        outline: none;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.171);
        position: absolute;
        bottom: 0;  
    }
    .find{
        text-align: center;
       padding:  3.3% 0;
        background: #fdd133;
        width: 92%;
       font-size: 5vw;
       color: rgba(0, 0, 0, 0.664);
        margin:auto
        
    }
    .content4{
        background: rgba(245, 243, 236, 0.521);
        padding:  3% 0;
         margin-top: 6% ;
       
    }
    .content4 ul{
        overflow: hidden;
        background: white;
    }
    .content4 li{
        
        text-align: center;
         font-size: 4vw;
        color: rgba(0, 0, 0, 0.473);
        float: left;
        width: 33%;
        padding-top: 6% ;
         padding-bottom: 6% ;
    }
    .content4 img{
        width: 16%;
    }
    .content4 li:nth-of-type(2n){
        border-left: 1px solid rgba(0, 0, 0, 0.075);
         border-right: 1px solid rgba(0, 0, 0, 0.075);
    }
    .content5{
        padding:5%;
    }
    .content5 p{
        font-size: 5vw;
        margin-bottom: 4%;
        color: rgba(0, 0, 0, 0.644);
    }
    .content5 li{
        font-size: 14px;
        text-align: center;
        background: whitesmoke;
        width: 30%;
        float: left; 
        padding: 2% 0;
        margin-left: 2.5%; 
        margin-top: 2.5%;  
        border-radius: 4px;
        color: rgba(0, 0, 0, 0.61);
    }
    .footer{
        width: 100%;
        overflow: auto;
        padding-bottom: 3%;
       
    }
    .footer ul{
        width: 275%;
         padding: 5% 5%;
    }
    .footer li{
        width: 16%;
        float: left;
        margin-left: 0.6%;
        
    }
    .footer img{
        width: 98%;
    }
   .content5 .current{
        background: #fcd33e ;
        font-weight: bold !important;
    }
    .footer1{
        border-top: 7px solid rgba(0, 0, 0, 0.055);
    }
    .footer1 p{
        margin-left: 5%;
        margin-top: 5%;
        font-size: 5vw;
        color: rgba(0, 0, 0, 0.658);
        
    }
    .footer1_bottom{
        width: 100%;
        overflow: auto;
    }
    .footer1_bottom ul{
        padding: 5%;
        width: 240%;
    }
    .footer1_bottom li{
        width: 24%;
        float: left;
        margin-right: 1%;
        padding-bottom: 1%;
       
    }
    .footer1_bottom .big{
        width: 100%;
        /* padding: 8% 5%; */
    }
    .footer1_bottom b{
        font-size: 15px;
        margin-bottom: 4%;
    }
    .loca{
        width: 6%
    }
    .footer1_bottom p{
        font-size: 10px;
          /* margin-top: 4%; */
    }
    .br{
        margin-left: 20%;
    }
    .end{
        margin:auto;
        width: 90%;
        margin-top: 5%;
        text-align: center;
        padding:8% 0;
        font-size: 4vw;
        color: rgba(0, 0, 255, 0.712);
        border-top: 1px solid rgba(0, 0, 0, 0.24);

    }
    
   


</style>
