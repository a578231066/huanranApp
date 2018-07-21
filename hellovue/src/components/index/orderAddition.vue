<template>
    <div id="orderAddtion">
        <div id="orderDetail">
            <el-row>
                <el-col :span="24">
                    <h3>
                        <span class="fl fa fa-angle-left" @click="back()"></span>
                        <strong>订单添加</strong>
                    </h3>
                </el-col>
            </el-row>
        </div>
        <div class="main">
            <order-main></order-main>
        </div>
    </div>
</template>
 
<script>
import orderMain from './orderAdditionMain'
export default {
    name: 'orderAddtion',
    data () {
        return {
            
        }
    },
    components:{
        orderMain
    },
    methods:{
        back(){
            this.$router.go(-1);//返回上一层
        }
    }
}
</script>

<style>
#orderDetail h3{
    height: 60px;
    line-height:60px;
    background: #03b8cc;
    text-align: center;
    color: #fff;
    box-sizing:border-box;
    font-weight: 400;
}
#orderDetail h3 span{
    display: inline-block;
    line-height: 60px;
    padding-left: 10px;
    font-size: 1.4em;
}
#orderDetail h3 strong{
    font-weight:400;
}
#orderDetail h3 strong.active{
    display: none;
}
</style>
