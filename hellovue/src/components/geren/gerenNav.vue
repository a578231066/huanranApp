<template>
    <div id="nav">
        <ul>
            <router-link v-for="(item,i) in nav" :to="item.link" :key="item.link">
                <li>
                    <img :src="item.src" alt="">
                    <p>{{item.name}}</p>
                </li>
            </router-link>
        </ul>
        <p v-for="(item,j) in telephone" :key="j"><i :class="item.icon"></i>{{item.title}} {{item.phone}} <i class="fr el-icon-arrow-right"></i></p>
    </div>
</template>
    
<script>
export default {
    name: 'nav',
    data () {
        return {
            nav,
            telephone
        }
    }
}
const nav = [
    {src: require('../../images/myNav1.png'), name: '设置店铺', link: 'dianpu'},
    {src: require('../../images/myNav2.png'), name: '支付凭证', link: 'zhifu'},
    {src: require('../../images/myNav3.png'), name: '统计分析', link: ''},
    {src: require('../../images/myNav4.png'), name: '使用指南', link: ''},
    {src: require('../../images/myNav5.png'), name: '信息通知', link: ''},
]
const telephone = [
    {icon:'el-icon-phone-outline', title: '联系客服:', phone:'0563-10102'},
    {icon:'el-icon-setting', title: '设置'},
]
</script>

<style>
#nav ul{
    background: #fff;
    overflow: hidden;
    zoom: 1;
}
#nav li{
    padding: 30px 0 10px 0;
    width: 20%;
    text-align: center;
    float: left;
    font-size: 0.9em;
    color:#4a4a4a;
}
#nav li img{
    width:30px;
    height: 26px;
}
#nav>p{
    background: #fff;
    margin-top: 10px;
    line-height: 50px;
    padding: 0 10px;
    box-sizing: border-box;
    color: #4a4a4a;
    font-size: 1em;
}
#nav>p i{
    margin-right: 10px;
}
#nav>p i.fr{
    margin-right: 0;
    display: inline-block;
    line-height: 50px;
}
</style>
