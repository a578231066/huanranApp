<template>
    <div id="main">
        <!-- <h4>基本信息</h4> -->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <div class="for">
                <el-form-item v-for="(item,i) in title" :key="i" :label="item.name" :prop="item.prop">
                    <el-input v-model="ruleForm[item.model]" :placeholder="item.placeholder"></el-input>
                </el-form-item>
                <el-form-item label="开始时间">
                    <el-col :span="24">
                        <el-date-picker type="date"  v-model="ruleForm.date1" placeholder="2017-06-21" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="结束时间">
                    <el-col :span="24">
                        <el-date-picker type="date"  v-model="ruleForm.date2" placeholder="2017-06-21" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item v-for="(item,i) in titleDown" :key="i" :label="item.name" :prop="item.prop">
                    <el-input v-model="ruleForm[item.model]" :placeholder="item.placeholder"></el-input>
                </el-form-item>
            </div>
            <el-form-item>
                <el-button type="primary">保存</el-button>
            </el-form-item>
            <p>没有原始订单？点击此处录入非系统订单售后单据</p>
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
            title,
            titleDown
        }
    },
    methods: {
        
    }
}
const title = [
    {name:'单号', placeholder:'请输入订单编号', prop:'dianpu', model:'.dianpu'},
]
const titleDown = [
    {name:'订单类型', placeholder:'订货单', prop:'suozai', model:'.suozai'},
    {name:'订单状态', placeholder:'待订单审核', prop:'xiangxi', model:'.xiangxi'},
]
</script>

<style scoped>
/* #main h4{
    line-height: 40px;
    padding: 0 10px;
    color: #555;
} */
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
.el-form .el-form-item .el-input input{
    margin: 0;
    border:none;
    text-align: right;
    padding: 0;
    border:1px solid #f00;
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
.el-form p{
    width: 95%;
    color:#c7000b;
    text-align:right;
    font-size: 0.5em;
}
</style>
