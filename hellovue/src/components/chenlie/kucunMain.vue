<template>
    <div id="kucunMain">
        <el-tabs v-model="activeName">
            <el-tab-pane label="库存" name="first">
                <kucun></kucun>
            </el-tab-pane>
            <el-tab-pane label="返货返修" name="second">返货返修</el-tab-pane>
            <el-tab-pane label="待配送" name="third">待配送</el-tab-pane>
            <el-tab-pane label="库存盘点" name="fourth">库存盘点</el-tab-pane>
            <el-tab-pane label="记录" name="记录">记录</el-tab-pane>
        </el-tabs> 
    </div>
</template>

<script>
import kucun from './kucun'
export default {
    name: 'kucunMain',
    data() {
        return {
            activeName: 'first'
        }
    },
    methods: {
        handleClick(tab, event) {
            
        }
    },
    components:{
        kucun,
    }
}
</script>


<style>
#kucunMain .el-tabs__header{
    margin-bottom: 0;
}
#kucunMain .el-tabs__nav{
    width: 100%;
}
#kucunMain .el-tabs__item{
    width: 20%;
    padding: 0;
    text-align: center;
}
/* .el-tabs__active-bar{
    width: 10% !important;
} */
</style>
