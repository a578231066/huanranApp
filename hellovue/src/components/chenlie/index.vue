<template>
    <div id="chenlie">
        <div class="header">
            <h3>品牌展示
                <el-badge :value="12" class="item fr">
                    <el-button size="small"><img src="../../images/headerFr.png" class="fr" alt=""></el-button>
                </el-badge>
            </h3>
        </div>  
        <kucun-main></kucun-main>
        <footer>
            <my-footer></my-footer>
        </footer>
    </div>
</template>

<script>
import kucunMain from './kucunMain'
export default {
    name: 'chenlie',
    components:{
        kucunMain
    }
}
</script>

<style>
.header{
    width: 100%;
    height: 70px !important;
    text-align:center;
    background: #03b8cc;
    color: #fff;
}
.header h3{
    width:94%;
    line-height: 70px;
    font-weight: 400;
}
.header h3 .el-badge{
    height: 64px;
    padding-top: 6px;
}
.header h3 .el-badge button{
    background: none;
    border:none;
    width: 28px;
    padding: 0;
}
.header h3 .el-badge sup{
    width: 20px;
    height: 20px;
    line-height: 20px;
    padding: 0;
    top: 24px;
    border-radius: 50%;
}
.header img{
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
