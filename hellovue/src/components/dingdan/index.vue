<template>
    <div id="dingdan">
        <el-header>
            <h3>订单管理
            <el-badge :value="12" class="item fr">
                <el-button size="small"><img src="../../images/headerFr.png" class="fr" alt=""></el-button>
            </el-badge>
            </h3>
        </el-header>
        <div class="main">
            <tab></tab>
        </div>
        <footer>
            <my-footer></my-footer>
        </footer>
    </div>
</template>

<script>
import tab from './tab'
export default {
    name: 'dingdan',
    data () {
        return {

        }
    },
    components:{
        tab,
    }
}
</script>

<style rel="stylesheet" type="text/css">
.el-header, .el-main, .el-footer{
	margin: 0;
	padding: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.el-header{
    width: 100%;
    height: 70px !important;
    text-align:center;
    background: #03b8cc;
    color: #fff;
}
.el-header h3{
    width:94%;
    line-height: 70px;
    font-weight: 400;
    
}
.el-header h3 .el-badge{
    height: 64px;
    padding-top: 6px;
    box-sizing: border-box}
.el-header h3 .el-badge button{
    background: none;
    border:none;
    width: 28px;
    padding: 0;
}
.el-header h3 .el-badge sup{
    width: 20px;
    height: 20px;
    line-height: 20px;
    padding: 0;
    top: 24px;
    border-radius: 50%;
}
.el-header img{
    width: 28px;
}
footer{
    width:100%;
    height: 80px !important;
    position:fixed;
    bottom: 0;
    left: 0;
    background: #e5e5e5;
}
</style>
