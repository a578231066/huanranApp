<template>
    <div id="zhifuMain">
        <h4>支付凭据</h4>
        <ul>
            <el-row>
                <el-col :span="16">
                    <div class="grid-content bg-purple">生产商：
                        <span>松籽科技有限公司</span>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple-light">品牌：
                        <span>星可儿</span>
                    </div>
                </el-col>
            </el-row>
            <li>日期：<span>2017-06-21 16:45:57</span></li>
            <li class="img"><img src="../../images/zhifuImg.jpg" alt=""></li>
        </ul>
        <p class="down">支付金额：<span class="red">￥100.00</span><el-button type="danger" class="fr">操作<i class="fr el-icon-arrow-up"></i></el-button></p>
    </div>
</template>
    
<script>
export default {
    name: 'zhifuMain'
}
</script>

<style rel="stylesheet" type="text/css">
#zhifuMain{
    background: #fff;
    margin-top: 10px;
}
#zhifuMain h4{
    line-height: 50px;
    border-bottom:1px solid #e8e8e8;
    padding:0 10px;
    box-sizing: border-box;
    font-size: 1em;
}
#zhifuMain ul{
    overflow: hidden;
    zoom: 1;
    padding-top: 10px;
    box-sizing: border-box;
}
#zhifuMain ul .el-row{
    padding: 0 10px;
    box-sizing: border-box;
}
#zhifuMain ul li{
    width: 100%;
    /* float: left; */
    padding-left: 10px;
}
#zhifuMain ul li.duan{
    width: 50%;
    float: left;
}
#zhifuMain ul li span,#zhifuMain ul .el-row .el-col span{
    color: #aaa;
    font-size: 0.9em;
}
#zhifuMain ul li.img{
    width: 94%;
    margin-top: 10px;
}
#zhifuMain ul li img{
    width: 100%;
    margin: 0 auto;
    border:1px solid #e5e5e5;
    border-radius: 4px;
}
#zhifuMain p.down{
    line-height: 44px;
    margin-top: 10px;
    overflow: hidden;
    zoom: 1;
    padding-left: 10px;
    border-top:1px solid #e5e5e5;
}
#zhifuMain p.down span.red{
    color: #c7000b;
}
#zhifuMain p .el-button{
    width: 100px;
    height: 44px;
    border-radius: 0;
    padding: 0;
    padding: 0 10px;
    cursor: pointer;
    box-sizing: border-box;
}
#zhifuMain p i{
    /* border:1px solid #000; */
}
</style>
