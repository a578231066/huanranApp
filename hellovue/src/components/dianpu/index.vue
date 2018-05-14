<template>
    <div id="dianpuShezhi">
        <div class="header">
            <el-row>
                <el-col :span="24">
                    <h3>
                        <span class="fl fa fa-angle-left" @click="back()"></span>
                        <strong>设置店铺</strong>
                    </h3>
                </el-col>
            </el-row>
        </div>
        <shezhi-main></shezhi-main>
    </div>
</template>
  
<script>
import shezhiMain from './dianpuMain'
export default {
    name: 'dianpuShezhi',
    data () {
        return {

        }
    },
    methods:{
        back(){
            this.$router.go(-1);//返回上一层
        }
    },
    components: {
        shezhiMain,
    }
}    
</script>

<style rel="stylesheet" type="text/css">
#dianpuShezhi .header h3{
    height: 60px;
    line-height:60px;
    background: #03b8cc;
    text-align: center;
    color: #fff;
    box-sizing:border-box;
    font-weight: 400;
}
#dianpuShezhi .header h3 span{
    display: inline-block;
    line-height: 60px;
    padding-left: 10px;
    font-size: 1.4em;
}
#dianpuShezhi .header h3 strong{
    font-weight:400;
}
#dianpuShezhi .header h3 strong.active{
    display: none;
}
</style>
