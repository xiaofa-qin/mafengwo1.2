<template>
    <main>
        <section class="head">
            <div class="outside_header">
                <div class="header">
                    <span id="h_left" @click="back()"></span>
                    <div class="search">
                        <input type="text" id="header" placeholder="搜索目的地/攻略/游记/问答">
                        <span id="sch"></span>
                    </div>
                    <span id="right_logo"></span>
                </div>
            </div>
        </section>
        <section class="tab">
            <div class="left">
                <ul>
                    <li v-for="(item,index) in areaName" @click="change(index)">
                        <p :class="{current:num==index}">{{item.area}}</p>
                    </li>
                </ul>
            </div>
            <div class="right_outsize">
                <div class="right" v-for="(item,index) in sh">
                    <router-link to=""><span v-show="item.title!='直辖市'" id="right_span"></span></router-link>
                    <div class="box">
                        <div class="title">
                            <p :class="{current:num==index}">
                                {{item.title}}
                            </p>
                        </div>
                        <ul>
                            <li v-for="(item,index) in xf[index]">
                                <img :src="item.src" alt="">
                                <p>{{item.li_p}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
    export default {
        data() {
            return {
                num: 0,
                sh: [
                    {
                        title: "直辖市",
                    },
                    {
                        title: "云南",
                    },
                    {
                        title: "四川",
                    },
                    {
                        title: "浙江",
                    },
                    {
                        title: "海南",
                    },
                    {
                        title: "福建",
                    },
                    {
                        title: "江苏",
                    },
                    {
                        title: "广东",
                    },
                    {
                        title: "广西",
                    },
                    {
                        title: "西藏",
                    },
                    {
                        title: "贵州",
                    },
                    {
                        title: "西北",
                    },
                    {
                        title: "山东",
                    },
                    {
                        title: "山西",
                    },
                    {
                        title: "湖南",
                    },
                    {
                        title: "湖北",
                    },
                ],
                xf: [
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "北京"
                        },
                        {
                            src: "./src/assets/images/shanghai.jpg",
                            li_p: "上海"
                        },
                        {
                            src: "./src/assets/images/chongqing.jpg",
                            li_p: "重庆"
                        },
                        {
                            src: "./src/assets/images/tj.png",
                            li_p: "天津"
                        },

                    ],
                    [
                        {
                            src: "./src/assets/images/lijiang.jpeg",
                            li_p: "丽江"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "大理"
                        },
                        {
                            src: "./src/assets/images/kunming.jpeg",
                            li_p: "昆明"
                        },
                        {
                            src: "./src/assets/images/xianggelila.jpeg",
                            li_p: "香格里拉"
                        },
                        {
                            src: "./src/assets/images/shuanglang.jpeg",
                            li_p: "双廊"
                        },
                        {
                            src: "./src/assets/images/xsbn.jpeg",
                            li_p: "西双版纳"
                        },
                        {
                            src: "./src/assets/images/shuhe.jpeg",
                            li_p: "束河"
                        },
                        {
                            src: "./src/assets/images/tengchong.jpeg",
                            li_p: "腾冲"
                        },
                        {
                            src: "./src/assets/images/yubeng.jpeg",
                            li_p: "雨崩"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "成都"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "九寨沟"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "稻城"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "色达"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "若尔盖"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "都江堰"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "亚丁"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "阿坝"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "峨眉山"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "牛背山"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],

                ],
                areaName: [
                    {
                        area: "国内"
                    },
                    {
                        area: "港澳台"
                    },

                    {
                        area: "日韩"
                    },

                    {
                        area: "东南亚"
                    }
                    , {
                        area: "南亚 西亚"
                    }
                    , {
                        area: "欧洲 美洲"
                    }
                    , {
                        area: "欧洲 非洲"
                    }
                ],
                list: [
                    {
                        title: "直辖市",
                    },
                    {
                        title: "云南",
                    },
                    {
                        title: "四川",
                    },
                    {
                        title: "浙江",
                    },
                    {
                        title: "海南",
                    },
                    {
                        title: "福建",
                    },
                    {
                        title: "江苏",
                    },
                    {
                        title: "广东",
                    },
                    {
                        title: "广西",
                    },
                    {
                        title: "西藏",
                    },
                    {
                        title: "贵州",
                    },
                    {
                        title: "西北",
                    },
                    {
                        title: "山东",
                    },
                    {
                        title: "山西",
                    },

                ],
                list_gat: [
                    {
                        title: "台湾",
                    },
                    {
                        title: "特别行政区",
                    },

                ],
                list_one: [
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "北京"
                        },
                        {
                            src: "./src/assets/images/shanghai.jpg",
                            li_p: "上海"
                        },
                        {
                            src: "./src/assets/images/chongqing.jpg",
                            li_p: "重庆"
                        },
                        {
                            src: "./src/assets/images/tj.png",
                            li_p: "天津"
                        },

                    ],
                    [
                        {
                            src: "./src/assets/images/lijiang.jpeg",
                            li_p: "丽江"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "大理"
                        },
                        {
                            src: "./src/assets/images/kunming.jpeg",
                            li_p: "昆明"
                        },
                        {
                            src: "./src/assets/images/xianggelila.jpeg",
                            li_p: "香格里拉"
                        },
                        {
                            src: "./src/assets/images/shuanglang.jpeg",
                            li_p: "双廊"
                        },
                        {
                            src: "./src/assets/images/xsbn.jpeg",
                            li_p: "西双版纳"
                        },
                        {
                            src: "./src/assets/images/shuhe.jpeg",
                            li_p: "束河"
                        },
                        {
                            src: "./src/assets/images/tengchong.jpeg",
                            li_p: "腾冲"
                        },
                        {
                            src: "./src/assets/images/yubeng.jpeg",
                            li_p: "雨崩"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "成都"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "九寨沟"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "稻城"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "色达"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "若尔盖"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "都江堰"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "亚丁"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "阿坝"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "峨眉山"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "牛背山"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "erefefeff"
                        },
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "erefefeff"
                        },
                    ],
                ],
                list_two: [
                    [
                        {
                            src: "./src/assets/images/beijing.jpg",
                            li_p: "台北"
                        },
                        {
                            src: "./src/assets/images/shanghai.jpg",
                            li_p: "垦丁"
                        },
                        {
                            src: "./src/assets/images/chongqing.jpg",
                            li_p: "花莲"
                        },
                        {
                            src: "./src/assets/images/tj.png",
                            li_p: "高雄"
                        },
                        {
                            src: "./src/assets/images/tj.png",
                            li_p: "台中"
                        },
                        {
                            src: "./src/assets/images/tj.png",
                            li_p: "九份"
                        },
                        {
                            src: "./src/assets/images/tj.png",
                            li_p: "南投"
                        },
                        {
                            src: "./src/assets/images/tj.png",
                            li_p: "阿里山"
                        },

                    ],
                    [
                        {
                            src: "./src/assets/images/lijiang.jpeg",
                            li_p: "丽江"
                        },
                        {
                            src: "./src/assets/images/chengdu.jpg",
                            li_p: "大理"
                        },
                    ],
                ]
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            change(a) {
                this.num = a;
                if (a == 0) {
                    console.log(a);
                    this.sh = this.list;
                    this.xf = this.list_one;
                }
                else if (a == 1) {
                    this.sh = this.list_gat;
                    this.xf = this.list_two;
                }
            }
        }
    }
</script>
<style scoped>
    .outside_header {
        width: 100%;
    }

    .header #h_left {
        width: 27px;
        height: 45px;
        display: inline-block;
        margin-left: 42px;
        margin-top: 35px;
        zoom: 0.5;
        background: url("../assets/images/i_head5.png") no-repeat -32px -25px;
    }

    .header {
        width: 100%;
        /* background-color: hotpink; */
        /* position: relative; */
        z-index: 10;
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: white;
        border-bottom: 1px solid gray;
        padding-bottom: 10px;
    }

    .header .search {
        /* background-color: chartreuse; */
        width: 60%;
        float: right;
        margin-top: 15px;
        overflow: hidden;
        padding-top: 2px;
        padding-bottom: 2px;
        margin-right: 77px;
        border-radius: 38px;
        background-color: rgba(0, 0, 0, 0.144);
    }

    .search input {
        box-sizing: border-box;
        width: 80%;
        float: left;
        padding-top: 1px;
        padding-bottom: 1px;
        padding-left: 10px;
        border: none;
        outline: none;
        background-color: rgba(128, 128, 128, 0);
    }

    .search input::-webkit-input-placeholder {
        color: rgba(0, 0, 0, 0.144);
        font-size: 13px;
    }

    .search #sch {
        float: right;
        width: 35px;
        height: 34px;
        display: block;
        margin-right: 10px;
        zoom: 0.7;
        background: url("../assets/images/btn_search2.png") no-repeat;
    }

    .header #right_logo {
        width: 90px;
        height: 60px;
        float: right;
        top: 21px;
        right: 1px;
        position: absolute;
        display: block;
        background: url('../assets/images/logos100_60.png');
        zoom: 0.6;
    }

    .tab .left {
        width: 24%;
        /* background-color: lawngreen; */
        float: left;
        position: fixed;
        top: 55px;
    }

    .tab .left .current {
        border-left: 2px solid orange;
        box-sizing: border-box;
        color: orange;
    }

    .tab .left ul {
        width: 100%;
        overflow: hidden;
    }

    .tab .left ul li {
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.144);
        float: left;
        box-sizing: border-box;
        padding-top: 18px;
        padding-bottom: 18px;
    }

    .tab .left ul li:nth-of-type(3n) {
        margin-right: 0px;
    }

    .tab .left ul li p {
        width: 100%;
        box-sizing: border-box;
        text-align: center;
        margin: auto auto;

    }

    .tab {
        overflow: hidden;
    }

    .right_outsize {
        overflow: hidden;
        width: 76%;
        margin-top: 47px;
        float: right;
        box-sizing: border-box;
        border-left: 1px solid rgba(0, 0, 0, 0.144);
    }

    .tab .right {
        float: right;
        overflow: hidden;
        width: 100%;
        margin-top: 7%;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.144);
        /* background-color: hotpink; */
        position: relative;
        box-sizing: border-box;
    }

    .title {
        margin-bottom: 5px;
    }

    #right_span {
        width: 17px;
        height: 25px;
        display: inline-block;
        background: url("../assets/images/i_index.png") no-repeat -28px 0px;
        position: absolute;
        top: 0px;
        zoom: 0.7;
        right: 25px;
    }

    .box {
        width: 100%;
        float: left;

        /* background-color: greenyellow; */
        margin-left: 10px;
    }

    .box ul {
        width: 100%;
        margin-top: 2px;
        /* margin-left:3px; */
    }

    .box ul li {
        width: 29%;
        float: left;

        margin-right: 10px;
    }

    .box ul li img {
        width: 100%;
        height: 74px;
    }

    .box ul li p {
        text-align: center;
    }

    #v_for {
        overflow: hidden;
        background-color: lightsalmon;
    }
</style>