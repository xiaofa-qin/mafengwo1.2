<template>
    <section>
    <div class="login_page">
       <span class="logo_img">
         <router-link to="/"><img src="../assets/images/logo200.jpg" alt=""></router-link>
       </span>
       <ul>
            <li v-for="(item,index) in list" @click="change(index,item.path)" :class="{current:index==num}">
              <router-link class="a" :to="item.path" :class="{current_a:index==num}">{{item.con}}</router-link>
            </li>
          </ul>     
       </div>
      <router-view></router-view>
    </section>
      
</template>
<script>

export default {
    data(){
        return{
            list:[
                {
                    con:"普通登录",
                    path:"/plogin"
                },
               {
                    con:"短信验证码登录",
                    path:"/xlogin" ,
                    tt:1   
                }
                
            ],
            num:0
        }
    },
    methods:{
        change(a,b){
            console.log(a,b)
           this.num=a;
        }
    }
}
</script>
<style scoped>
*{
    margin:0px;
    padding:0px;
    list-style: none;
}
 .logo_img{
       display:block;
       width:100%;
       margin-bottom:15px;
   }
   
   img{
       /* width:280px; */
       height:auto;
       margin-top:0px;
       margin-left:50%;
       transform: translateX(-50%);
       /* transform: scale(0.5); */
       zoom: 0.5;
   }
   .login_page{
       width:94%;
       margin:15px auto;
       
   }
   ul{
       
       margin:20px auto;
       width:100%; 
       overflow: hidden;
   }
   ul li{
       padding-top:10px;
       padding-bottom: 10px;
       background-color: darkred;
       text-align: center;
       /* font-size:40px; */
       float:left;
       width:50%;
       background-color: whitesmoke;
       border-top:10px;
   }
   .current{
       background:white;
       
       border-top:3px solid orange
   }
   .current_a{
    color: orange;
   }
   a{
       text-decoration: none;
       color: gray;
   }
</style>
  


