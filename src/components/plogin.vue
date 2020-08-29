<template>
  <main>
    <ul class="inp">
      <li><input type="text" name id="lgname" placeholder="您的邮箱/手机号" :class="{judge:judge}" /></li>
      <li><input type="password" id="pd"  placeholder="您的密码" :class="{judge:judge1}" /></li>
    </ul>
    <div id="backpasswd">
      <span class="right_word">
      <router-link to="">忘记密码?</router-link>
    </span>
  </div>
    
    <div class="btn">
      <ul class="lg_ul">
        <li>
          <router-link :to="this.firstPath"><button :class="{current_p:lg==1}" @click="login()">登录</button></router-link>
        </li>
        <li>
          <button :class="{current_p:sn==1}" @click="sign()">快速注册</button>
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
  export default {
    data() {
      return {
        lg: 1,
        sn: 2,
        firstPath:'',
        judge: null,
        judge1: null
      }
    },
    methods: {
      login() {
        this.lg = 1;
        this.sn = 2;
        console.log(lgname.value, pd.value);

        if (lgname.value == "" || pd.value == "") {
          if (lgname.value == "" && pd.value == "") {
            this.judge1 = true;
            this.judge = true;
          } else if (lgname.value == "") {
            this.judge = true;
          } else {
            this.judge1 = true;
          }
        }
        else if (pd.value == "123" && lgname.value == "xiaofa_qin") {
          this.firstPath= "/"
          this.judge = false;
          this.judge1 = false;
        }
        else{
            this.judge1 = true;
            this.judge = true;
        }
      },
      sign() {
        this.sn = 1;
        this.lg = 2;
      }
    }
  }
</script>

<style scoped>
  p {
    max-height: 100px;
  }

  main {
    width: 94%;
    margin: 30px auto;
  }

  .judge {
    border: 1px solid red;
    box-sizing: border-box;
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
    border-bottom: 1px solid black;
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
    padding-top: 6px;
    border: none;
    box-sizing: border-box;
    padding-bottom: 7px;
    color:#c8c8c8;
  }

  input:focus {
    border: 1px solid orange;
    box-sizing: border-box;
  }
  input::-webkit-input-placeholder {
    color: #c8c8c8;
  }

  .btn {
    width: 100%;
    margin-bottom: 41px;
  }

  a {
    text-decoration: none;
  }
  .right_word{
    display: block;
    position: absolute;
    right:10px; 
    bottom:0px;
    
  }
  #backpasswd{
    width:100%;
    position: relative;
    height: 19px;
    margin-top:3px;
  
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
    border-radius: 5px;
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
    border-radius: 5px;
    box-sizing: border-box;
    padding-bottom: 10px;
  }

  .current_p {
    background-color: orange;
    color: white;
    border-radius: 5px;
    border: 1px solid orange;
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