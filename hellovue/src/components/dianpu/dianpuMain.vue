<template>
    <div id="dianpuMain">
        <div v-for="(item,i) in neirong" :key="i">
            <h4>{{item.title}}（{{item.weizhi}}）
                <router-link :to="item.link" :key="item.link">
                    <el-button class="fr">编辑</el-button>
                </router-link>
            </h4>
            <ul>
                <li>负责人:<span class="fr">{{item.fuzeren}}</span></li>
                <li>电话:<span class="fr">{{item.telephone}}</span></li>
                <li>地址:<span class="fr">{{item.dizhi}}</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dianpuMain',
    data () {
        return {
            neirong,
        }
    }
}
const neirong = [
    {title:'居然之家', weizhi:'哈西店', fuzeren:'欢然', link:'dianpuXinxi',telephone: '18888888888', dizhi:'黑龙江省哈尔滨市南岗区哈西大街'},
    {title:'居然之家', weizhi:'哈东店', fuzeren:'欢然', link:'dianpuXinxi', telephone: '18888888888', dizhi:'黑龙江省哈尔滨市南岗区哈西大街'},
    {title:'居然之家', weizhi:'松北店', fuzeren:'欢然', link:'dianpuXinxi', telephone: '18888888888', dizhi:'黑龙江省哈尔滨市南岗区哈西大街'},]
</script>

<style rel="stylesheet" type="text/css">
#dianpuMain div{
    width: 96%;
    margin:10px auto 0;
    background: #fff;
    overflow: hidden;
    zoom: 1;
}
#dianpuMain div h4{
    height: 44px;
    line-height: 44px;
    padding: 0 10px;
    box-sizing: border-box;
    border-bottom:1px solid #e5e5e5;
}
#dianpuMain div h4 .el-button{
    border:none;
    height: 42px;
    padding: 0;
    color: #aaa;
}
#dianpuMain div ul{
    padding:5px 0;
}
#dianpuMain div li{
    color: #aaa;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 0.9em;
}
</style>
