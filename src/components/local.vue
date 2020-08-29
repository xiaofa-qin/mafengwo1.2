<template>
 <main>  
   <div class="header">
            <img src="../assets/images/logo200.png" alt="">
            <router-link to="/" id="back_fir">官网首页</router-link>
           <router-link to=""><span id="search"></span></router-link> 
        </div>
        <div class="search">
            <input type="text" placeholder="搜索产品名称/目的地">
             <span class="elf"></span>
            </div>
        <div class="turn">
        <mt-swipe :auto="4000">
         <mt-swipe-item>
          <img src="../assets/images/local1.jpeg" alt="">
          </mt-swipe-item>
           <mt-swipe-item>
          <img src="../assets/images/local2.jpeg" alt="">
          </mt-swipe-item>
           <mt-swipe-item>
          <img src="../assets/images/local3.jpeg" alt="">
          </mt-swipe-item>
       </mt-swipe>
    </div>
    <div class=" content">
        <ul>
            <li v-for="(item,index) in list "><img :src="item.src" alt="">
              <p>{{item.con}} </p>
            </li>  
        </ul>
    </div>
    <ul class="content1">
        <li v-for="(item,index) in list1 " @click="change(index)" :class="{current:num==index}">{{item}} </li>
    </ul>
    <div class="content2">
         <ul >
        <li v-for="(item,index) in list2">{{item}} </li>
    </ul>
    </div>
    
     <p class="free">自由行攻略</p>
    <div class="content3" v-for="(item,index) in list3">
        <img class="head" :src="item.src" alt="">
        <ul>
            <li v-for="(item,index) in list4[index]"><img :src="item.src1" alt="">
            <p>{{item.con1}} </p>
              <p class="price"><span>{{item.price1}} </span> {{item.con2}} </p>
            </li>
        </ul>
    </div>
    <div class="f"> 
        <div class="footer">
        <p>查看更多产品</p>
    </div>
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
                    src:'./src/assets/images/local1.png',
                    con:'景点门票'
                },
                 {
                    src:'./src/assets/images/local2.png',
                    con:'一日游'
                },
                 {
                    src:'./src/assets/images/local3.png',
                    con:'酒店套餐'
                },
                 {
                    src:'./src/assets/images/local4.png',
                    con:'WiFi'
                },
                 {
                    src:'./src/assets/images/local5.png',
                    con:'多日游'
                },
                 {
                    src:'./src/assets/images/local6.png',
                    con:'包拼车'
                },
                 {
                    src:'./src/assets/images/local7.png',
                    con:'美食'
                },
                 {
                    src:'./src/assets/images/local8.png',
                    con:'租车'
                },
                 {
                    src:'./src/assets/images/local9.png',
                    con:'演出'
                },
                 {
                    src:'./src/assets/images/local10.png',
                    con:'接送机'
                },
                 {
                    src:'./src/assets/images/local11.png',
                    con:'电话卡'
                },
                 {
                    src:'./src/assets/images/local12.png',
                    con:'交通卡'
                },
                 {
                    src:'./src/assets/images/local13.png',
                    con:'体验'
                },
            ],
            list1:['热门','东南亚','欧美澳','国内'],
            list2:['吉普岛','日本','三亚','丽江','台湾','香港','哈尔滨','首尔','新加坡','上海','沙巴','桂林'],
            list3:[
                 {
                     src:'./src/assets/images/local4.jpeg',
                },
                 {
                     src:'./src/assets/images/local6.jpeg',
                },
                 {
                     src:'./src/assets/images/local7.jpeg',
                },
            ],
            list4:[
                [
                    { 
                        src1:'./src/assets/images/local5.jpeg',
                        con1:'【省时省心+随心行程+私人...',
                        price1:'￥4399',
                        con2:'起/人',
                    },
                    {
                        src1:'./src/assets/images/local14.png',
                        con1:'【私家小团+省心服务】斯',
                        price1:'￥2699',
                        con2:'起/人'
                    },
                    {
                         src1:'./src/assets/images/local15.png',
                        con1:'【省时服务+深度游玩+私人',
                        price1:'￥6599',
                        con2:'起/人'
                    }
                ],
                 [
                    {            
                        src1:'./src/assets/images/local8.jpeg',
                        con1:'早春樱物语~日本关西深度6',
                        price1:'￥5999',
                        con2:'起/人',
                    },
                    {
                        src1:'./src/assets/images/local9.jpeg',
                        con1:'湖都古城8日关西定制游（..',
                        price1:'￥7999',
                        con2:'起/人'
                    },
                    {
                         src1:'./src/assets/images/local10.jpeg',
                        con1:'浪漫东瀛古都韵味10日定...',
                        price1:'￥7999',
                        con2:'起/人'
                    }
                ],
                 [
                    { 
                        src1:'./src/assets/images/local11.jpeg',
                        con1:'摩洛哥14天13晚野奢游（卡萨..',
                        price1:'￥8999',
                        con2:'起/人',
                    },
                    {
                        src1:'./src/assets/images/local12.jpeg',
                        con1:'野奢纳尼比亚 10日之旅（唉..',
                        price1:'￥9500',
                        con2:'起/人'

                    },
                    {
                         src1:'./src/assets/images/local1.gif',
                        con1:'坦桑尼亚9日野奢游（桑给巴',
                        price1:'￥9999',
                        con2:'起/人'
                    }
                ]      
            ]
        }
    },
    methods:{
        change(a){
            this.num=a;
            if(a==0){
                this.list2=['吉普岛','日本','三亚','丽江','台湾','香港','哈尔滨','首尔','新加坡','上海','沙巴','桂林']
            }
            else if(a==1){
                this.list2=['泰国','新加坡','马来西亚','越南','巴厘岛','菲律宾','柬埔寨','兰卡威','芽庄','斯里兰卡','曼谷','沙巴']
            }
            else if(a==2){
                this.list2=['美国','西班牙','迪拜','帕劳','澳大利亚','新西兰','法国','意大利','英国','毛里求斯','悉尼','黄金海岸']
            }
             else if(a==3){
                this.list2=['云南','长白山','四川','西安','厦门','张家界','桂林','浙江','雪乡','北京','珠海','漠河']
            }
        }

    }
}
</script>

<style scoped>
     .header {
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.082);
        overflow: hidden;
        /* border-bottom: 1px solid rgba(0, 0, 0, 0.281); */
        padding-bottom: 12px; 
         margin-bottom:2%; 
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
    .search{
        width: 94%;
        margin: auto;
        text-align: center;
       background:rgba(0, 0, 0, 0.055);
       border-radius: 3px;
       position: relative;
       margin-bottom: 2%;
       
    }
    .search input{
        padding: 2% 3%;
        background:rgba(0, 0, 0, -0.082);
        font-size: 3.2vw;
        margin-left:9%;
        border: none;
        outline: none;
    }
    .elf{
        position: absolute;
         width: 30px;
        height: 29px;
        display: inline-block;
        background:url('../assets/images/i_search.png') no-repeat -29px 0px;
        zoom: 0.5;
        left: 25%;
        top:23%;
    }
    .turn img{
        width: 100%;
    }
    .content{
        width: 100%;
        overflow: auto;
        margin-top: 6%;
        border-bottom: 9px solid rgba(0, 0, 0, 0.062);
    }
    .content ul{
        overflow: hidden;
        width: 200%;
        padding-bottom: 3%;
    }
    .content li{
        width: 12.5%;
        float: left;
        text-align: center;
        margin-bottom: 3%;  
    }
    .content img{
        width: 48%;
        margin-bottom: 3%;
    }
    .content p{
        font-size: 4vw;
    }
    .content1{
        width: 100%;
        overflow: hidden;
       
        border-bottom: 1px solid rgba(0, 0, 0, 0.116);
         margin-bottom: 5%;
    }
    .content1 li{
        margin-top: 4%;
        /* border-bottom:2px solid coral ; */
        float: left;
        width: 20%;
        margin-left: 4%;
        text-align: center;
        padding: 3% 0;
        font-size: 4.3vw;
        color: rgba(0, 0, 0, 0.678);
    }
    .content2{
        border-bottom: 8px solid rgba(0, 0, 0, 0.068);
    }
    .content2 ul{
        overflow: hidden;
        margin-left: 5%;
        padding-bottom: 2%;
    }
    .content2 li{
        color: rgba(0, 0, 0, 0.603);
        font-size: 3.8vw;
        text-align: center;
        padding: 1% 1%;
        float: left;
        width: 18%;
        margin-left: 2.5%;
        margin-bottom: 2.5%;
        background:rgba(0, 0, 0, 0.062);
        border-radius: 2px;
    }
    .current{
        border-bottom: 2px solid rgb(245, 188, 45);
        color: rgb(247, 193, 56);
    }
    .free{
        font-size: 4.8vw;
        /* background: cadetblue; */
        margin-top: 10%;
        padding-left: 3%;
        margin-left: 6%;
        border-left: 4px solid rgb(248, 196, 64);
        margin-bottom: 8%;
    }
    .content3{
        width: 90%;
        margin: auto;
        margin-bottom: 6%;
    }
    .content3 .head{
        width: 100%;
    }
    .content3 ul{
        overflow: hidden;
        margin-top: 2%;

    }
    .content3 li{
        float: left;
        width: 32%;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.192);
    }
    .content3 li:nth-of-type(2n){
        margin: 0 2%;
         
    }
    .content3 img{
        width: 100%;
    }
    .content3 p{
        color: rgba(0, 0, 0, 0.664);
        font-size: 3.5vw;
        width: 80%;
        margin: auto;
        display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical; 
    }
    .content3 span{
       font-size: 12px;
        color: coral;
    }
    .content3 .price{
        margin-top: 8%;
        padding:5% 0 ;
        border-top: 1px solid rgba(0, 0, 0, 0.199);
    }
    .footer{
         text-align: center;
         /* background: gold; */
         width: 44%;
         margin: auto;
         font-size: 13px;
         padding: 2.5% 0;
         border-radius: 5px;
         color:#ff9d00;
         border: 1px solid #ff9d00;
    }
    .f{
       
       border-top: 5px solid rgba(0, 0, 0, 0.068);
       padding: 5% 0;
       
    }
    </style>

    <style>
.turn .mint-swipe-items-wrap{
  padding-bottom: 32%;
}
.turn .mint-swipe-indicator{
  background: rgba(169, 169, 169, 0.651);
  opacity: 1;
}
.turn .is-active{
    background:darkorange;
}
</style>