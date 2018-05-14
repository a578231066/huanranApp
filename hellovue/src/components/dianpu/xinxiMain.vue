<template>
    <div id="main">
        <h4>基本信息</h4>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <div class="for">
                <el-form-item v-for="(item,i) in title" :key="i" :label="item.name" :prop="item.prop">
                    <el-input v-model="ruleForm[item.model]" placeholder="请输入"></el-input>
                </el-form-item>
            </div>
            <el-form-item>
                <el-button type="primary">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script>
export default {
    name: 'main',
    data () {
        return {
             ruleForm: {
                name: '',
            },
            title
        }
    },
    methods: {
        
    }
}
const title = [
    {name:'店铺名称', prop:'dianpu', model:'.dianpu'},
    {name:'所在地址', prop:'suozai', model:'.suozai'},
    {name:'详细地址', prop:'xiangxi', model:'.xiangxi'},
    {name:'联系人', prop:'lianxi', model:'.lianxi'},
    {name:'电话', prop:'telephone', model:'.telephone'},
    {name:'传真', prop:'chuanzhen', model:'.chuanzhen'},
    {name:'邮编', prop:'youbian', model:'.youbian'},
]
</script>

<style rel="stylesheet" type="text/css">
#main h4{
    line-height: 40px;
    padding: 0 10px;
    color: #555;
}
.el-form>div.for{
    background: #fff;
    padding: 0 10px;
}
.el-form .el-form-item{
    margin: 0;
    border-bottom:1px solid #e5e5e5;
    padding: 5px 0;
}
.el-form .el-form-item label{
    text-align: left;
    color: #000;
    font-size: 1em;
}
.el-form .el-form-item input{
    margin: 0;
    border:none;
    text-align: right;
    padding: 0;
}
.el-form>.el-form-item .el-form-item__content{
    margin-left: 0 !important;
    margin-top: 5px;
    text-align: center;
}
.el-form>.el-form-item .el-form-item__content button{
    width: 90%;
    border-radius:50px;
    background: #03b8cc;
    border:none;
}
</style>
