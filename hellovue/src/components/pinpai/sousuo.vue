<template>
    <div id="sousuo">
        <div style="margin-top: 15px;">
            <el-input placeholder="品牌/名称/型号/编码" v-model="input4">
            <el-button slot="append">搜索</el-button>
            </el-input>
        </div>
    </div>
</template>

<script>
export default {
  name: 'sousuo',
  data () {
      return {
          input: ''
      }
  }
}
</script>

<style rel="stylesheet" type="text/css">
#sousuo{
    width: 100%;
    background: #fff; 
    overflow: hidden; 
    zoom: 1;
    padding-bottom: 15px;
    border-bottom:1px solid #e5e5e5;
}
#sousuo input{
    width: 88%;
    margin:0 auto;
    background: #e4e4e4;
    text-align:center;
    border-radius: 5px;
    height: 30px;
    border:none;
}
#sousuo .el-input-group__append{
    background: none;
    border:none;
    color: #000;
}
</style>
