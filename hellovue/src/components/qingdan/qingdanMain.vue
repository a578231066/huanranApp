<template>
    <div id="qingdanMain">
        <div v-for="(item, i) in shangpin" :key="i">
            <ul>
                <img :src="item.src" alt="">
                <li class="title">{{item.title}}</li>
                <li class="chima">尺寸规格<span class="fr">{{item.mi}} (米)</span></li>
                <li class="blue">￥{{item.jiage}} <span class="fr">{{item.jian}}件</span></li>
            </ul>
            <p class="clear"></p>
            <p class="blue">总计: <span>￥{{item.zongji}}</span></p>
            <p>备注: </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'qingdanMain',
    data () {
        return {
            shangpin,
        }
    }
}
const shangpin = [
    {
        src: require('../../images/qingdanImg.jpg'),
        title: "榻榻米软床 榻榻米软床 多种尺寸规格",
        mi: "1.8x2.0",
        jiage: "1,000.00",
        jian: "1",
        zongji: "1,000.00"
    },
    {
        src: require('../../images/qingdanImg.jpg'),
        title: "榻榻米软床 榻榻米软床 多种尺寸规格",
        mi: "1.8x2.0",
        jiage: "1,000.00",
        jian: "1",
        zongji: "1,000.00"
    }
]
</script>

<style rel="stylesheet" type="text/css">
#qingdanMain div{ 
    padding: 10px 10px; 
    box-sizing: border-box; 
    background: #fff;
    margin-top: 10px;
}
#qingdanMain div ul{ 
    width: 100%; 
    overflow: hidden; 
    zoom: 1; 
    padding-bottom:10px; 
    border-bottom:1px solid #e5e5e5;
}
#qingdanMain div img{ 
    width: 25%; 
    float:left; 
    border:1px solid #e5e5e5; 
    border-radius: 4px; 
    margin-right: 10px;
}
#qingdanMain div ul li{
    font-size: 0.8em;
}
#qingdanMain div ul li.title{ 
    color: #000;
}
#qingdanMain div ul li.chima{ 
    color: #aaa;
}
#qingdanMain div ul li.blue{
    color:#03b8cc;
}
#qingdanMain div p{
    line-height: 30px;
}
#qingdanMain div p.blue{ 
    line-height: 40px; 
    border-bottom:1px solid #e5e5e5;
}
#qingdanMain div p.blue span{
    color:#03b8cc;
}
@media(min-width:400px){
    #qingdanMain div ul li{line-height: 30px; font-size: 1em;}
}
@media(min-width:440px){
    #qingdanMain div img{width: 100px;}
    #qingdanMain div ul li{line-height: 35px;}
}

</style>
