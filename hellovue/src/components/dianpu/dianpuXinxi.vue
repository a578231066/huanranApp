<template>
    <div id="xinxi">
        <div class="header">
            <el-row>
                <el-col :span="24">
                    <h3>
                        <span class="fl fa fa-angle-left" @click="back()"></span>
                        <strong>设置店铺信息</strong>
                    </h3>
                </el-col>
            </el-row>
        </div>
        <xinxi-main></xinxi-main>
    </div>
</template>

<script>
import xinxiMain from './xinxiMain'
export default {
    name: 'xinxi',
    methods:{
        back(){
            this.$router.go(-1);//返回上一层
        }
    },
    components: {
        xinxiMain,
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
}
.header h3 strong.active{
    display: none;
}
</style>
