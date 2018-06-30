<template>
    <div id="xiaoshou">
        <!-- 搜索 -->  
        <div class="sousuo">
            <el-row>
                <el-col v-for="(item, i) in mainTop" :key="i" :span="12">
                    <router-link :to="item.link" :key="item.link">
                        <div :class="'grid-content '+item.class">
                            <i :class="item.icon"></i>
                            <p>{{item.name}}</p>
                        </div>   
                    </router-link>
                </el-col>
            </el-row>
        </div>
        <!-- 全部订单 -->
        <div class="quanbu">
            <span>全部订单({{number}})</span>
            <el-select v-model="value" placeholder="配送状态筛选">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">{{item.label}}</el-option>
            </el-select>
        </div>
        <!-- 折叠菜单 -->
        <div class="zhedie">
            <el-collapse v-for="(item,i) in zhedie" :key="i" v-model="activeNames" @change="handleChange" accordion>
                <el-collapse-item v-for="(items,j) in item.select" :key="j" :title="items.title" :name="i">
                    <div v-for="(itemMain, a) in items.main" :key="a">
                        <div :class="'title '+itemMain.class">
                            <i>{{itemMain.col}}</i>
                            <strong></strong>
                            {{itemMain.title}}
                            <span class="fr">{{itemMain.peisong}}</span>
                        </div>
                        <div class="mainZd">
                            <ul>
                                <li>数量: {{itemMain.number}}</li>
                                <li>时间: {{itemMain.date}} {{itemMain.time}}</li>
                                <li>金额: ￥{{itemMain.jine}}（{{itemMain.fukuan}}）</li>
                            </ul>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'xiaoshou',
    data () {
        return {
            mainTop,
            options,
            zhedie,
            value: '',
            number: '10',
            activeNames: ['1']
        }
    },
    methods: {
        handleChange(val) {
            console.log(val);
        }
    }
}
// 搜索
const mainTop = [
    {icon: 'el-icon-search', link:'sousuo', name: '订单搜索', class: 'bg-purple'},
    {icon: 'el-icon-plus', link:'', name: '订单添加', class: 'bg-purple-light'}
]
// 下拉菜单
const options= [
    {value: '全部订单', label: '全部订单'},
    {value: '待配送', label: '待配送'},
    {value: '待审核', label: '待审核'}
]
// 折叠内容
const zhedie = [
    {
        select: [
            {
                title: '2017-09',
                main:[
                    {col: '退', class:'red', title: 'DH-O-20170609-0015632',peisong: '待配送', number:'1', date:'2017-06-13', time: '10:41:37', jine:'5,000.00',fukuan:'未付款'},
                    {col: '订', class:'blue', title: 'DH-O-20170609-0015632',peisong: '待配送', number:'1', date:'2017-06-13', time: '10:41:37', jine:'5,000.00',fukuan:'未付款'},
                ]
            }
        ],
    },
    {
        select: [
            {
                title: '2018',
                main:[
                    {col: '退', class:'blue', title: 'DH-O-20170609-0015632',peisong: '待配送', number:'1', date:'2017-06-13', time: '10:41:37', jine:'5,000.00',fukuan:'未付款'},
                    {col: '订', class:'red', title: 'DH-O-20170609-0015632',peisong: '待配送', number:'1', date:'2017-06-13', time: '10:41:37', jine:'5,000.00',fukuan:'未付款'},
                ]
            }
        ]
    }
]
</script>

<style rel="stylesheet" type="text/css">
#xiaoshou{
    background: #fff;
}
/* 搜索 */
.sousuo .el-row .el-col{
    text-align: center;
    color:#7a7a7a;
    font-size: 0.9em;
    border-bottom:1px solid #d1d1d1;
    padding-bottom: 5px;
}
.sousuo .el-row .el-col i{
    margin: 10px 0 5px 0;
    padding: 7px 7px;
    background: #4e9ef0;
    color: #fff;
    border-radius: 50%;
}
.sousuo .el-row .el-col .bg-purple-light i{
    background: #fbc722;
}
/* 全部订单 */
.quanbu{
    overflow: hidden;
    zoom: 1;
    color:#7a7a7a;
    border-bottom:2px solid #e5e5e5;
}
.quanbu span{
    font-size: 0.8em;
    padding-left: 10px;
}
.quanbu .el-select{ 
    float:right;
}
.quanbu .el-select input{ 
    width: 140px;
    height: 30px;
    text-align: center;
    border:none;
    background:none;
}
/* 折叠 */
.zhedie{
    padding:0 10px;
    box-sizing: border-box;
}
.zhedie .el-collapse-item__header{
    color:#7a7a7a;
}
.zhedie .el-collapse-item__content{
    border-top: none;
    padding-bottom: 0;
}
.zhedie .el-collapse-item__content>div{
    margin-bottom: 10px;
}
/* 折叠内容头部 */
.zhedie .el-collapse-item__content .title{
    height: 40px;
    line-height: 40px;
    padding: 0 10px 0 30px;
    box-sizing: border-box;
    border: 1px solid #d1d1d1;
    border-top: 2px solid #03b8cc;
    border-bottom: none;
    position: relative;
    color: #000;
}
/* 红色 */
.zhedie .el-collapse-item__content .red i{
    height: 25px;
    line-height: 25px;
    background: #ef7368;
    color: #fff;
    padding: 0 4px;
    font-style: normal;
    position: absolute;
    top: 0;
    left: 5px;
}
/* 三角 */
.zhedie .el-collapse-item__content .red strong{
    width: 0; 
    height: 0; 
    border-left: 10.5px solid transparent; 
    border-right: 10.5px solid transparent; 
    border-top: 5px solid #ef7368; 
    position: absolute;
    top: 25px;
    left: 5px;
}
.zhedie .el-collapse-item__content .red span{
    color: #ef7368;
}
/* 蓝色 */
.zhedie .el-collapse-item__content .blue i{
    height: 25px;
    line-height: 25px;
    background: #03b8cc;
    color: #fff;
    padding: 0 4px;
    font-style: normal;
    position: absolute;
    top: 0;
    left: 5px;
}
.zhedie .el-collapse-item__content .blue strong{
    width: 0; 
    height: 0; 
    border-left: 10.5px solid transparent; 
    border-right: 10.5px solid transparent; 
    border-top: 5px solid #03b8cc; 
    position: absolute;
    top: 25px;
    left: 5px;
}
.zhedie .el-collapse-item__content .blue span{
    color: #46d0ae;
}
/* 折叠内容 */
.zhedie .el-collapse-item__content .mainZd{
    padding: 5px 10px 0 10px;
    border: 1px solid #d1d1d1;
}
.zhedie .el-collapse-item__content .mainZd li{
    width: 100%;
    clear: both;
    color: #7a7a7a;
}
</style>
