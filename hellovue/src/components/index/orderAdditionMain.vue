<template>
    <div id="orderAddMain">
        <el-form ref="form" :model="form" label-width="100px" v-for="(item , index) in main" :key="index">
            <h4>{{item.title}}<span class="fr">{{item.titleFr}}<i :class="item.titleIcon"></i></span></h4>
            <el-form-item v-for="(sele , i) in item.select" :key="i" :label="sele.name">
                <el-select v-model="form[sele.model]" :placeholder="sele.placeholder">
                    <el-option v-for="(opt , j) in sele.opti" :key="j" :label="opt.label" :value="opt.val"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="data" :class="{'active':item.bool}" label="配送日期">
                <el-col :span="24">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item v-for="(inp , i) in item.input" :key="i" :label="inp.name">
                <el-input v-model="input" :placeholder="inp.placeholder"></el-input>
            </el-form-item>
            <el-input class="data" :class="{'active' : item.boolOne}" type="textarea" :rows="2" :placeholder="item.placeholder" v-model="textarea"></el-input>
        </el-form>
    </div>
</template>
    
<script>
export default {
    name: 'orderAddMain',
    data () {
        return {
            main,
            form: {
                pinpai: '',
                region: '',
                color: '',
            }
        }
    }
}
  
const main = [
    {
        title: '商品清单',
        titleFr: '标准规格',
        titleIcon: 'el-icon-caret-bottom',
        select: [
            {
                name: "品牌名称:", 
                model:".pinpai",
                placeholder:"请输入品牌名称",
                opti:[
                    {label:"品牌1" , val: "品牌1" },
                    {label:"品牌2" , val: "品牌2" },
                    {label:"品牌3" , val: "品牌3" },
                ]
            },
            {
                name: "商品名称:", 
                model:".mingcheng", 
                placeholder:"请输入商品名称",
                opti:[
                    {label:"商品1" , val: "商品1" },
                    {label:"商品2" , val: "商品2" },
                    {label:"商品3" , val: "商品3" },
                ]
            },
            {
                name: "商品颜色:", 
                model:".color",
                placeholder: "请输入商品颜色",
                opti:[
                    {label:"颜色1" , val: "颜色1" },
                    {label:"颜色2" , val: "颜色2" },
                    {label:"颜色3" , val: "商品3" },
                ]
            },
            {
                name: "商品规格:", 
                model:".guige",
                placeholder:"请输入商品规格",
                opti:[
                    {label:"规格1" , val: "规格1" },
                    {label:"规格2" , val: "规格2" },
                    {label:"规格3" , val: "规格3" },
                ]
            },
        ],
        input: [
            {name: "零售价:", model: ".lingshou", placeholder:"选择完毕价格自动出现"},
            {name: "数量:", model: ".number", placeholder:"请输入商品数量"}
        ]
    },
    {
        title: '客户信息',
        input: [
            {name: "联系人:", model: ".lianxi", placeholder:"请输入"},
            {name: "联系方式:", model: ".fangshi", placeholder:"请输入"},
            {name: "配送地址:", model: ".dizhi", placeholder:"请输入"}
        ]
    },
    {
        bool: true,
        select: [
            {
                name: "配送方式:", 
                model:".peisong",
                placeholder:"生产加工并配送",
                opti:[
                    {label:"配送方式1" , val: "配送方式1" },
                    {label:"配送方式2" , val: "配送方式2" },
                    {label:"配送方式3" , val: "配送方式3" },
                ]
            }
        ],
        input: [
            {name: "合同订单:", model: ".lianxi", placeholder:"请输入合同订单号"},
        ]
    },
    {
        title: '订单备注',
        boolOne: true,
        placeholder: "请输入备注信息"
    }
]
</script>

<style>
#orderAddMain form{
    background: #fff;
    padding: 0 10px;
    margin-bottom: 10px;
    overflow: hidden;
    zoom:1;
}
/* title */
#orderAddMain form h4{
    line-height: 44px;
    position: relative;
    border-bottom:1px solid #e5e5e5;
}
/* 标准规格 */
#orderAddMain form h4 span{
    font-weight:400;
    color: #aaa;
    font-size: 0.8em;
    margin-right: 10px;
}
/* 下三角 */
#orderAddMain form h4 span i{
    position: absolute;
    bottom: -8px;
    right: -9px;
    font-size: 2em;
    transform: rotate( -50deg);
    color: #e5e5e5;
}
#orderAddMain form .el-form-item{
     margin-bottom: 0;
     margin-top: 10px;
     border-bottom:1px dashed #e5e5e5;
}
#orderAddMain .el-select{
    padding-left: 0px;
    padding-right: 0px;
    margin: 0;
}
#orderAddMain form .data{
    display: none;
}
#orderAddMain form .active{
    display: block;
}
#orderAddMain form label{
    text-align:left;
    color: #aaa;
}
#orderAddMain form .el-form-item .el-input__inner{
    text-align: right;
    border: none;
}
#orderAddMain .el-form .el-textarea textarea{
    border:none;
    padding:5px 0px;
}
</style>
