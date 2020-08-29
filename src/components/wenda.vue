<template>
    <main>
        <section class="header">
            <div id="header">
             <span id="left_logo" @click="back()"></span>
                <h1>马蜂窝问答</h1>
            </div>
        </section>
        <section class="showimg">
            <img src="../assets/images/h5_banner.jpg" alt="">
        </section>
        <div class="search"><span id="search_span"></span><input type="text" id="search_inp"></div>
        <content>
            <ul class="con_ul">
                <li v-for="(item,index) in list">
                    <div class="li_outside">
                    <h2>{{item.h2}}</h2>
                    <div class="leftword">
                        <img :src="item.lwsrc" alt="">
                        <span>{{item.name}} </span>
                    </div>
                    <div class="mid_content">
                        <img :src="item.midsrc" alt="">
                        <p>{{item.midp}}
                        </p>
                    </div>
                    <div class="bot_content">
                        <router-link to="" id="global"><span >{{item.botsp}}</span></router-link>
                        <router-link to="" id="right_a">
                        <span id="ll">{{item.botll}}</span>
                        <b>{{item.botb}}</b>
                        <i>{{item.boti}}</i>
                    </router-link>
                    </div>
                </div>
                </li>
            </ul>
        </content>
        <section class="bot">
            <p id="bot">加载更多</p>
        </section>
    </main>
</template>
<script>
    export default{
        data(){
            return{
                list:[
                    {
                        h2:"马特洪峰和少女峰哪个更美？",
                        lwsrc:"./src/assets/images/left_word.jpg",
                        name:'脚尖下的猫',
                        lwspan:"aaaa",
                        midsrc:"./src/assets/images/wenda_midImg.jpg",
                        midp:"经典的两难问题。我手机墙纸是少女峰，而在马蜂窝的头像是马特宏峰。我第一次去少女峰时遇到许多国人，但在釆尔马特偶尔碰到国人和几个日本团队。一方面少女峰的宣传到位，另一方面马特宏峰的交通不便。当我第二次去马特宏峰时国人已经很多，但在少女峰半山腰和...",
                        botsp:"瑞士",
                        botll:"52517",
                        botb:"115",
                        boti:"477"
                    },
                    {
                        h2:"你去西藏的时候，有高反吗？你是怎么克服的？",
                        lwsrc:"./src/assets/images/left_word1.jpeg",
                         name:'sibao',
                        lwspan:"aaaa",
                        midsrc:"./src/assets/images/wenda_midImg1.jpeg",
                        midp:"以下回答仅是本人亲历经验，每个人身体素质千差万别，究竟是否高反，您要亲自去—趟才知道，95%的...",
                        botsp:"西藏",
                        botll:"156812",
                        botb:"364",
                        boti:"2245"
                    },
                    {
                        h2:"去稻城看美景时，你有没有身体或者餐饮的不适应？有身在天堂，心在地狱的感觉吗？",
                        lwsrc:"./src/assets/images/left_word2.jpeg",
                         name:'莉大无穷',
                        lwspan:"aaaa",
                        midsrc:"./src/assets/images/wenda_midImg2.jpeg",
                        midp:"题主你好，你好像说反了呢，大家形容稻城亚丁是身在地狱，心在天堂。为什么这么说呢，",
                        botsp:"瑞士",
                        botll:"52517",
                        botb:"115",
                        boti:"422"
                    },
                    {
                        h2:"你遇到小宝宝在飞机上（旅途中），一路哭闹的经历吗？你当时时怎么做的？",
                        lwsrc:"./src/assets/images/left_word3.jpeg",
                         name:'薇薇',
                        lwspan:"aaaa",
                        midsrc:"./src/assets/images/wenda_midImg3.jpeg",
                        midp:"作为父母来说，带娃出行最害怕的就是孩子在旅途中闹情绪，如果是自驾可能还好一点，如果是乘坐飞机火...",
                        botsp:"全球",
                        botll:"152517",
                        botb:"115",
                        boti:"76"
                    },
                    {
                        h2:"女生到底如何拍出美美的旅行照？",
                        lwsrc:"./src/assets/images/left_word4.jpeg",
                         name:'小A',
                        lwspan:"aaaa",
                        midsrc:"./src/assets/images/wenda_midImg4.jpeg",
                        midp:"在旅行时，人们总希望能将自己融入到风景中，但又不希望被拍成路人甲似的到..",
                        botsp:"全球",
                        botll:"2352517",
                        botb:"423",
                        boti:"8051"
                    },
                    {
                        h2:"马来西亚什么牌子的白咖啡好喝？",
                        lwsrc:"./src/assets/images/left_word5.jpeg",
                         name:'小迎',
                        lwspan:"aaaa",
                        midsrc:"./src/assets/images/wenda_midImg5.jpeg",
                        midp:"来说一下包装白咖啡的历史吧。其实白咖啡已经存在很久了，就是怡保的旧街场.",
                        botsp:"吉隆玻",
                        botll:"5252317",
                        botb:"115",
                        boti:"272"
                    },
                    {
                        h2:"一个吃货的旅行是怎么样的？",
                        lwsrc:"./src/assets/images/left_word6.jpeg",
                        name:'SpongMeI',
                        lwspan:"aaaa",
                        midsrc:"./src/assets/images/wenda_midImg6.jpeg",
                        midp:"如果说历史上我最羡慕和佩服的人，那肯定是苏东坡大人啦!能如此好(hao)...",
                        botsp:"全球",
                        botll:"452517",
                        botb:"930",
                        boti:"4772"
                    },
                    {
                        h2:"在大理，你有哪些有趣的故事或者难忘的体验？",
                        lwsrc:"./src/assets/images/left_word7.jpeg",
                        name:'桃子说民俗',
                        lwspan:"aaaa",
                        midsrc:"./src/assets/images/wenda_midImg7.jpg",
                        midp:"对大理的热爱，绝非—时兴起。小时候看《还珠格格》，萧剑心心念念要带大家..",
                        botsp:"大理",
                        botll:"38225",
                        botb:"117",
                        boti:"267"
                    },
                    {
                        h2:"如果用三个词形容大理给你的印象，你会用哪三个呢？",
                        lwsrc:"./src/assets/images/left_word8.png",
                        name:'大理旅行研究所',
                        lwspan:"aaaa",
                        midsrc:"./src/assets/images/wenda_midImg8.jpeg",
                        midp:"我对大理的三个关键词评价初来大理，我的三个印象词不知道为什么总觉得回复.",
                        botsp:"大理",
                        botll:"85030",
                        botb:"1064",
                        boti:"1129"
                    },
                    {
                        h2:"去之前与去之后，在长白山的真实体验与你的印象中区别大吗？",
                        lwsrc:"./src/assets/images/left_word9.jpeg",
                        name:'哈哈',
                        lwspan:"aaaa",
                        midsrc:"./src/assets/images/wenda_midImg9.jpeg",
                        midp:"哈哈哈&nbsp;我觉得没有我想象的冷&nbsp;真的好美&nbsp;我们运气好&n...",
                        botsp:"长白山",
                        botll:"35222",
                        botb:"277",
                        boti:"456"
                    }    
                ]
            }
        },
        methods:{
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style scoped>
    #header {
        width: 100%;
        /* background-color: darkblue; */
        overflow: hidden;
        padding-bottom: 5px;
    }

    #header #left_logo {
        width: 27px;
        height: 45px;
        float: left;
        display: inline-block;
        margin-left: 42px;
        margin-top: 15px;
        zoom: 0.5;
        background: url("../assets/images/i_head5.png") no-repeat -32px -25px;
    }

    #header h1 {
        width: 30%;
        float: right;
        margin-right: 115px;
        margin-top: 9px;
    }

    .showimg img {
        width: 100%;
        margin-top: 5px;
    }

    .search {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        background-color: rgba(0, 0, 0, 0.144);
        border-radius: 4px;
        margin-top: 10px;
        padding-top: 10px;
        position: relative;
    }

    .search #search_inp {
        width: 83%;
        background-color:rgba(0, 0, 0, -0.856);
        border: none;
        margin-left: 24px;
    }

    #search_span::before {
        content: "";
        width: 36px;
        height: 36px;
        display: inline-block;
        position: absolute;
        top:14px;
        left: 2.5%;
        zoom: 0.5;
        background: url("../assets/images/ico5.png") no-repeat 0px 0px;
    }

    .con_ul {
        width: 100%;
        margin-top: 10px;
        border-top: 1px solid rgba(0, 0, 0, 0.144);
        /* background-color: crimson; */
        overflow: hidden;
    }

    .con_ul li {
        width: 100%; 
        padding-bottom: 5px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.144);
    }

    .con_ul h2 {
        font-size: 19px;
    }

    .leftword {
        width: 141px;
        /* background-color: darkcyan; */
        margin-top:10px;
    }

    .leftword img {
        width: 20px;
        height: auto;
        margin-left: 3px;
        border-radius: 50%;
        margin-top:4px;
    }

    .mid_content {
        width: 100%;
        margin-top: 10px;
        /* background-color: darkmagenta; */
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .mid_content img {
        float: left;
        width: 40%;
    }

    .mid_content p {
        width: 59%;
        float: right;
        word-break: break-all;
        display: -webkit-box;
        line-height: 26px;
        /* text-align: right; */
        /*对象作为伸缩盒子模型展示* */
        -webkit-box-orient: vertical;
        /**设置或检索伸缩盒子对象的子元素的排列方式**/
        -webkit-line-clamp:4;
        /**显示的行数**/
        overflow: hidden;
        /**隐藏超出的内容**/
    }
.bot_content{
    width:100%;
}   
    #right_a{
        width:75%;
        display:block;
        float: right;
        text-decoration: none;
        color:gray;
        text-align: right;
    }
   
    .bot_content{
        width:100%;
        overflow: hidden;
        margin-top:10px;
    }
    .bot_content b{
       font-weight: normal;
    }
    .bot_content i{
        color:orange
    }
    .bot_content #ll::after{
        content: "浏览";
        width:32px;
        height:10px;
        /* margin-left:5px;
        margin-right:5px; */
        display: inline-block;
    }
    .bot_content span,.bot_content b,.bot_content i{
        font-size: 14px;
        font-style: normal;
    }
    .bot_content b::after{
        content: "回答";
        /* margin-left:2px; */
        /* margin-right:2px; */
        display: inline-block;
        font-weight: normal;

    }
    .bot_content b::before{
        content: "";
        width:5px;
        height:5px;
        /* margin-left:2px;
        margin-right:2px; */
        display: inline-block;
        background-color: gray;
    }
    .bot_content i::after{
        content: "顶";
        color:orange;
        margin-left:2px;
        font-style: normal;
        /* margin-right:2px; */
        display: inline-block;
    }
    .bot_content i::before{
        content: "";
        width:5px;
        height:5px;
        margin-left:2px;
        margin-right:2px;
        display: inline-block;
        background-color: gray;
    }
    .bot_content #global{
        text-decoration: none;
    }
    .li_outside{
        width:92%;
        margin-top:10px;
        margin-right:auto;
        margin-left: auto;
    }
    #bot{
        width:80%;
        margin: auto;
        background-color: rgba(128, 128, 128, 0.24);
        padding-top:10px;
        padding-bottom:10px;
        text-align: center;
        margin: 8%;
        border-radius: 5px;
    }
</style>