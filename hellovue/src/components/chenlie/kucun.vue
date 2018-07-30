<template>
    <div id="kucun">
        <el-collapse v-for="(item,i) in kucun" :key="i" v-model="activeName" accordion>
            <el-collapse-item :name="i">
                <template slot="title">
                   <i class="el-icon-goods"></i>
                   {{item.title}}
                </template>
                <ul>     
                    <li>品牌名称：{{item.mingcheng}}</li>
                    <li>商品名称：{{item.shangpin}}</li>
                    <li>颜色：{{item.color}}</li>
                    <li>规格：{{item.guige}}（M）</li>
                    <li>商品状态：{{item.zhuangtai}}</li>
                    <li>日期：{{item.date}}</li>
                    <li>数量：{{item.num}}（件）</li>
                    <li>陈列位置：{{item.weizhi}}</li>
                </ul>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    name: 'kucun',
    data () {
        return {
            activeName: '0',
            kucun,
        }
    },
    methods:{

    }
}
const kucun = [
    {title:'星可儿 — 云梦', mingcheng:'星可儿', shangpin:'云梦', color:'白色', guige:'1.8x2.0', zhuangtai:'正常品', date:'2017-06-22', num:'11', weizhi:'12'},
    {title:'星可儿 — 云梦', mingcheng:'星可儿', shangpin:'云梦', color:'白色', guige:'1.8x2.0', zhuangtai:'正常品', date:'2017-06-22', num:'11', weizhi:'12'},
    {title:'星可儿 — 云梦', mingcheng:'星可儿', shangpin:'云梦', color:'白色', guige:'1.8x2.0', zhuangtai:'正常品', date:'2017-06-22', num:'11', weizhi:'12'},
    {title:'星可儿 — 云梦', mingcheng:'星可儿', shangpin:'云梦', color:'白色', guige:'1.8x2.0', zhuangtai:'正常品', date:'2017-06-22', num:'11', weizhi:'12'}
]
</script>

<style>
#kucun .el-collapse-item__header{
    padding: 0 10px;
    border-bottom:1px solid #e5e5e5;
    box-sizing: border-box;
    font-size: 1em;
}
#kucun .el-collapse-item__header i.el-icon-goods{
    padding-right: 5px;
    color: #4f7bea;
    font-size: 1.2em;
    vertical-align: middle;
}
#kucun .el-collapse-item__wrap{
    padding: 10px 10px;
}
#kucun .el-collapse-item__wrap .el-collapse-item__content{
    padding-bottom: 0;
}
#kucun .el-collapse-item__wrap ul{
    overflow:hidden;
    zoom: 1;
}
#kucun .el-collapse-item__wrap ul li{
    width: 50%;
    float:left;
    color: #aaa;
    font-size: 1.1em;
}
</style>
