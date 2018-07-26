<!--首页整体-->
'<template>
  <div id="index">
    <el-container>
      <el-header>
        <h3>欢然家具订单管理软件
          <el-badge :value="12" class="item fr">
            <el-button size="small"><img src="../../images/headerFr.png" class="fr" alt=""></el-button>
          </el-badge>
        </h3>
      </el-header>
      <el-main>
        <banner></banner>
        <main-top></main-top>
        <main-down></main-down>
      </el-main>
      <el-footer>
        <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>
</template>
 
<script>
// 引入
import banner from "./banner"
import mainTop from "./mainTop"
import mainDown from "./mainDown"

export default {
  name: 'index',
  data () {
    return {

    }
  },
  components:{
    banner,
    mainTop,
    mainDown
  }
}
</script>

<style>
#index .el-header, .el-main, .el-footer{
	margin: 0;
	padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#index .el-header{
  width: 100%;
  height: 70px !important;
  text-align:center;
  background: #03b8cc;
  color: #fff;
}

#index .el-header h3{
  width:94%;
  line-height: 70px;
  font-weight: 400;
  padding-left:30px;
  box-sizing: border-box;
}
#index .el-header h3 .el-badge{
  height: 64px;
  padding-top: 6px;
}
#index .el-header h3 .el-badge button{
  background: none;
  border:none;
  width: 28px;
  padding: 0;
}
#index .el-header h3 .el-badge sup{
  width: 20px;
  height: 20px;
  line-height: 20px;
  padding: 0;
  top: 24px;
  border-radius: 50%;
}
#index .el-header img{
  width: 28px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  margin-bottom: 100px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-footer{
  width:100%;
  height: 80px !important;
  position:fixed;
  bottom: 0;
  left: 0;
  background: #e5e5e5;
}
</style>
