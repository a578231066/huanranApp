<template>
    <div id="zhifu">
        <div class="header">
            <el-row>
                <el-col :span="24">
                    <h3>
                        <span class="fl fa fa-angle-left" @click="back()"></span>
                        <strong>支付凭据</strong>
                        <span class="fr">添加<i class="el-icon-circle-plus"></i></span>
                    </h3>
                </el-col>
            </el-row>
        </div>
        <zhifu-main></zhifu-main>
    </div>
</template>

<script>
import zhifuMain from './zhifuMain'
export default {
    name: 'zhifu',
    methods:{
        back(){
            this.$router.go(-1);//返回上一层
        }
    },
    components: {
        zhifuMain
    }
}
</script>

<style rel="stylesheet" type="text/css">
.header h3{
    height: 60px;
    line-height:60px;
    background: #03b8cc;
    text-align: center;
    color: #fff;
    box-sizing:border-box;
    font-weight: 400;
    
}
.header h3 span{
    display: inline-block;
    line-height: 60px;
    padding-left: 10px;
    font-size: 1.4em;
}
.header h3 strong{
    font-weight:400;
    margin-left: 30px;
    padding-left: 10px;
    box-sizing:border-box;
}
.header h3 strong.active{
    display: none;
}
.header h3 span.fr{ font-size: 0.8em; margin-right: 5px;}
.header h3 span.fr i{ margin-left: 3px;}
</style>
