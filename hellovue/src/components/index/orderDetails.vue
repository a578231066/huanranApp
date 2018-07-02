<template>
  <div id="orderDetail">
        <div class="header">
            <order-header></order-header>
        </div>
        <div class="main">
            <order-main></order-main>
        </div>
  </div>
</template>
    
<script>
import orderHeader from './orderHeader'
import orderMain from './orderDetailsMain'
export default {
    name: 'orderDetail',
    data () {
        return {
            title: "订单添加"
        }
    },
    components:{
        orderHeader,
        orderMain
    },
    methods:{
        back(){
            this.$router.go(-1);//返回上一层
        }
    }
}
</script>
  
<style rel="stylesheet" type="text/css">
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
#orderDetail .main{
    width: 96%;
    margin: 10px auto 0;
}
</style>
