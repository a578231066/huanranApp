<template>
    <div id="sss">
        <div class="header">
            <el-row>  
                <el-col :span="24">
                    <h3>
                        <span class="fl fa fa-angle-left" @click="back()"></span>
                        <strong>订单查询</strong>
                    </h3>  
                </el-col>
            </el-row>
        </div>
        <div class="main">
            <sousuo-main></sousuo-main>
        </div>
    </div>
</template>
  
<script>
import sousuoMain from './sousuoMain'
export default {
    name: 'sss',
    data () {
        return {
            form: {
                name: '',
            }
        }
    },
    methods:{
        back(){
            this.$router.go(-1);//返回上一层
        }
    },
    components: {
        sousuoMain
    }
}
</script>

<style scoped>
#sss .header{
    height: 60px !important;
}
#sss .header h3{
    height: 60px;
    line-height:60px !important;
    background: #03b8cc;
    text-align: center;
    color: #fff;
    box-sizing:border-box;
    font-weight: 400;
}
#sss .header h3 span{
    display: inline-block;
    line-height: 60px;
    padding-left: 10px;
    font-size: 1.4em;
}
#sss .header h3 strong{
    font-weight:400;
}
#sss .header h3 strong.active{
    display: none;
}
</style>
