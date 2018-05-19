<template>
    <div id="main">
        <!-- 头部 -->
        <h5>全部品牌(10) 
            <span class="fr">
                <el-select v-model="value" placeholder="筛选">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </span>
        </h5>
        <!-- 内容 -->
        <div class="shangpin">
            <div v-for="(item,i) in neirong" :key="i">
                <span class="quan"></span>
                <img :src="item.src" alt="">
                <ul>
                    <h6>{{item.title}}</h6>
                    <li>{{item.detail}}</li>
                    <li class="blue">￥{{item.jiage}}</li>
                </ul>
                <i class="fr el-icon-arrow-right"></i>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
  name: 'main',
  data () {
        return {
             options: [{
                    value: '品牌1',
                    label: '品牌1'
                }, {
                    value: '品牌2',
                    label: '品牌2'
                }, {
                    value: '品牌3',
                    label: '品牌3'
                }, {
                    value: '品牌4',
                    label: '品牌4'
                }, {
                    value: '品牌5',
                    label: '品牌5'
                }],
            value: '',
            neirong,
        }
    }
}

const neirong = [
    {
        src: require('../../images/pinpaiImg.jpg'),
        title: '星可儿',
        detail: 'TK11妙姿',
        jiage: '1000.00'
    },
    {
        src: require('../../images/pinpaiImg.jpg'),
        title: '星可儿',
        detail: 'TK11妙姿',
        jiage: '1000.00'
    },
    {
        src: require('../../images/pinpaiImg.jpg'),
        title: '星可儿',
        detail: 'TK11妙姿',
        jiage: '1000.00'
    },
    {
        src: require('../../images/pinpaiImg.jpg'),
        title: '星可儿',
        detail: 'TK11妙姿',
        jiage: '1000.00'
    }
]
</script>

<style rel="stylesheet" type="text/css">
#main{
    background: #fff;
    box-sizing: border-box;
}
#main h5{
    font-weight:400;
    line-height: 40px;
    color:#7a7a7a;
    padding:0 10px;
}
#main h5 i{
    margin-left: 5px;
}

#main h5 span .el-select .el-input input{
    border: none;
    background: none;
    width: 100px;
    text-align: center;
}

#main .shangpin{
    border-top: 2px solid #e5e5e5;
    padding:0 10px;
}
#main .shangpin div{
    border-bottom:1px solid #e7e7e7;
    overflow: hidden;
    zoom: 1;
    padding: 10px 0;
}
#main .shangpin div .quan{
    border:1px solid #10bccf;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    display: inline-block;
    float: left;
    margin-top: 25px;
}
#main .shangpin div img{
    vertical-align: middle;
    width: 20%;
    margin-left: 10px;
    float: left;
}
#main .shangpin div ul{
    width: 40%;
    margin-left: 20px;
    float:left;
}
#main .shangpin div h6{
    line-height: 20px;
    font-size: 0.9em;
    font-weight: 400;
}
#main .shangpin div li{
    font-size: 0.8em;
    color: #7a7a7a;
    line-height: 20px;
}
#main .shangpin div li.blue{
    color:#03b8cc;
    font-size: 0.9em;
}
#main .shangpin div i{
    line-height: 60px;
}

@media(min-width:382px){
    #main .shangpin div .quan{ margin-top: 30px;}
    #main .shangpin div li{ line-height: 25px; font-size:0.9em;}
    #main .shangpin div li.blue{ font-size: 1em;}
}
@media(min-width:424px){
    #main .shangpin div .quan{ margin-top: 35px;}
    #main .shangpin div h6{ font-size: 1.1em; padding-top: 2px;}
    #main .shangpin div li{ line-height: 30px; font-size:1em;}
    #main .shangpin div i{ line-height: 80px;}
}
@media(min-width:500px){
    #main .shangpin div img{width: 17%;}
}
@media(min-width:600px){
    #main .shangpin div img{width: 15%;}
    #main .shangpin div ul{ padding-top: 5px;}
}
@media(min-width:700px){
    #main .shangpin div img{width: 12%;}
}
@media(min-width:850px){
    #main .shangpin div img{width: 10%;}
}
@media(min-width:1024px){
    #main .shangpin div .quan{margin-top: 45px;}
    #main .shangpin div img{width: 10%;}
    #main .shangpin div h6{ font-size: 1.2em; line-height: 30px;}
    #main .shangpin div ul li{font-size: 1.1em; line-height: 30px;}
    #main .shangpin div ul li.blue{font-size: 1.2em;}
    #main .shangpin div i{ line-height: 100px;}
}
@media(min-width:1200px){
    #main .shangpin div img{width: 8%;}
}
@media(min-width:1366px){
    #main .shangpin div img{width: 7.5%;}
}
</style>
