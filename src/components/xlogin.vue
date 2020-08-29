<template>
    <main>
    <ul class="inp">
      <li><input type="text" name id="lgname" placeholder="您的手机号" /></li>  
      <li><input type="text" id="pd" placeholder="验证码" /><img src="../assets/images/yanzhengma.jpg" alt="" id="verify"></li>
      <li id="getcode_li"><input type="text" id="code" placeholder="短信验证码" />
        <div class="getcode">
          <a href="#">获取短信验证码</a>
        </div>
      </li>
    </ul>
      <div id="backpasswd"><span class="right_word"><router-link to="">忘记密码?</router-link></span></div> 
      <div class="btn">
        <ul class="lg_ul">
          <li>
          <router-link :to="this.firstPath"><button :class="{current_p:lg==1}" @click="login()">登录</button></router-link>
          </li>
          <li>
           <router-link to=""><button :class="{current_p:sn==1}" @click="sign()">快速注册</button></router-link> 
          </li>
         
        </ul>
      </div> 
      <div class="connect">
       <div class="hd"><span>使用第三方账号注册</span></div>
        <ul class="bot_lg">
          <li>
          <router-link to="" id="r_left"><i></i><br>
              新浪微博
              </router-link>
            
          </li>
          <li>
             <router-link to="" id="r_right">
              <b></b><br>
               QQ登录
             </router-link>
            
          </li>
        </ul>
      </div>   
      <router-view></router-view>
    </main>
    
  </template>
  <script>
  export  default {
    data(){
      return{
        lg:1,
        sn:2,
        firstPath:""
      }
    },
    methods:{
      login(){
        this.lg=1;
        this.sn=2;
        if(pd.value=="123"&&lgname.value=="123"){
             this.firstPath="/"
        }
        else{
          alert("请输入信息");
        }
      },
      sign(){
         this.sn=1;
         this.lg=2;
       
      }
    }
  }
  </script>
  
  <style  scoped>
  p{
    max-height: 100px;
  }
  main {
    width:94%;
    margin: 30px auto;  
  }
  .getcode{
    position: absolute;
    bottom: 10px;
    right:10px;
  }
  #getcode_li{
    position: relative;
  }
  .getcode a{
    display:inline block;
    border-radius: 20px;
    text-align: center;
    /* background-color: #ff8a00; */
    white-space: nowrap;
    color: coral;
    text-decoration: none;
  }
 
  .inp {
    width: 100%;
    overflow: hidden;
    border: 1px solid gray;
    border-radius: 5px;
  }

  .inp li {
    width: 100%;
    float: left;
    margin-left:0px;
    border-bottom: 1px solid orange;
  }

  .inp:last-child {
    width: 100%;
    float: left;
    border: none;
  }

  input {
    box-sizing:border-box;
    text-indent: 1em;
    width: 100%;
    padding-top: 10px;
    border: none;
    box-sizing: border-box;
    padding-bottom: 11px;
    color:#c8c8c8;
  }

  input:focus {
    border: 1px solid orange;
  }
  input::-webkit-input-placeholder {
    color: #c8c8c8;
  }
  
  #verify{
      position:absolute;
      top:189px;
      right:18px;
  }
  #backpasswd{
    width: 100%;
    position: relative;
  }
  .btn {
    width: 100%;
    margin-bottom: 41px;
  }
  .right_word{
    display: block;
    position: relative;
    right:-274px;  
  }
  .right_word a {
    color: #c8c8c8;
  }

  .lg_ul {
    width: 100%;
    overflow: hidden;
    margin-top:10px;
    box-sizing: border-box;
    border: none;
  }
  .lg_ul li {
    width: 100%;
    float: left;
    margin-left: 0px;
    border: none;
    box-sizing: border-box;
  }

  #third {
    position: relative;
    right: -338px;
    top: 2px;
  }
  .lg_ul li:nth-of-type(1n) {
    margin-bottom: 16px;
  }
  button {
    width: 100%;
    background-color: white;
    color: orange;
    border-radius: 3px;
    line-height: 10px;
    padding-top:10px;
    font-size: 16px;
    border: 1px solid orange;
    box-sizing: border-box;
    border-radius: 5px;
    padding-bottom: 10px;
  }



  .current_p {
    background-color: orange;
    color: white;
  }

  .connect {
    width: 100%;
    margin-top: 40px;
    padding-bottom: 20px;
  }

  .hd {
    position: relative;
    height: 25px;
    width: 100%;
    border-top: 1px solid #d8d8d8;
  }

  .hd span {
    color: #ccc;
    background-color: #fff;
    padding: 0 5px;
    top: -10px;
    left: 32%;
    display: block;
    font-size: 13px;
    position: absolute;
  }




  .bot_lg {
    width: 100%;
    display: table;
    overflow: hidden;

  }

  .bot_lg b {
    width: 65px;
    height: 65px;
    margin-top:8px;
    display: inline-block;
    zoom: 0.5;
    background: url("../assets/images/connect_ico.png") no-repeat -96px -1px;
  }

  .bot_lg i {
    width: 65px;
    height: 65px;
    margin-top:8px;
    display: inline-block;
    zoom: 0.5;
    background: url("../assets/images/connect_ico.png") no-repeat 0px 0px;
  }

  .connect .bot_lg li {
    margin-left: 0px;
    display: table-cell;
    width: 43%;
    margin-left: 10px;
    float: left;
  }

  .connect .bot_lg li:nth-of-type(2n) {
   margin-right: 10px;
    float: right;
  }

  .connect .bot_lg a {
    display: block;
    border: 1px solid #e6e6e5;
    background-color: #f3f3f3;
    text-align: center;
    color: #666;
    border-radius: 5px;
  }

  #r_right {
    margin-right: 3px;
  }

  #r_left {
    margin-left: 3px;
  }
  
  </style>