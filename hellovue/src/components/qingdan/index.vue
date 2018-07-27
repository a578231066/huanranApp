<template>
    <div id="qingdan">
        <!-- 头部 -->
        <div class="header">
            <el-row>
                <el-col :span="24">
                    <h3>
                        <span class="fl fa fa-angle-left" @click="back()"></span>
                        <strong>商品清单</strong>
                        <span class="fr">添加<i class="el-icon-circle-plus"></i></span>
                    </h3>
                </el-col>
            </el-row>
        </div>
        <!-- 内容 -->
        <div class="main">
            <qingdan-main></qingdan-main>
        </div>
    </div>
</template>
 
<script>
import qingdanMain from './qingdanMain'
export default {
    name: 'qingdan',
    data () {
        return {

        }
    },
    components:{
        qingdanMain,
    },
    methods:{
        back(){
            this.$router.go(-1);//返回上一层
        }
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

