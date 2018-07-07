<template>
    <div id="tab">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="销售订单" name="first">
                <xiaoshou></xiaoshou>
            </el-tab-pane>
            <el-tab-pane label="售后单" name="second">售后单</el-tab-pane>
            <el-tab-pane label="进货订单" name="third">进货订单</el-tab-pane>
        </el-tabs>
    </div>
</template>
  
<script>
import xiaoshou from './one'
export default {
    name: 'tab',
    data () {
        return {
            activeName2: 'first'
        }
    },
    methods: {
        handleClick(tab, event) {
            
        }
    },
    components: {
        xiaoshou,
    }
}

</script>

<style rel="stylesheet" type="text/css">
#tab>ul>li{
    float:left;
    width: 33.3%;
    text-align: center;
}
#tab .main{
    background: #fff;
}
.el-tabs__header{
    margin: 0;
}
.el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav{
    width: 99%;
    border-radius: 0
    
}
.el-tabs__nav-scroll .el-tabs__nav .el-tabs__item{
    width: 33.3%;
    text-align:center;
    font-size: 1em;
}
.el-tabs__item.is-active{
    color: #03b8cc;
}
.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
    border-bottom:2px solid #03b8cc;
}
</style>
