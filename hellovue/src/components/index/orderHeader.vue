<template>
  <div id="orderDetail">
        <el-row>
            <el-col :span="24">
                <h3>
                    <span class="fl fa fa-angle-left" @click="back()"></span>
                    <strong v-for="(item,i) in title" :key="i" :class="{'active':!item.bool}" v-show="item.bool">{{item.name}}</strong>
                </h3>
            </el-col>
        </el-row>
  </div>
</template>

<script>
import orderMain from './orderDetailsMain'
export default {
    name: 'orderDetail',
    data () {
        return {
            title:[
                {name:"订单详情",bool: true},
            ]
        }
    },
    components:{
        orderMain,
    },
    methods:{
        back(){
            this.$router.go(-1);//返回上一层
        }
    },
    watch:{
        $router(now,old){
            if(now.params=="/orderDetails"){
                this.title.bool=false;
            }else{
                this.title.bool=true;
            }
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
#orderDetail h3 strong{
    font-weight:400;
}
#orderDetail h3 strong.active{
    display: none;
}
</style>
