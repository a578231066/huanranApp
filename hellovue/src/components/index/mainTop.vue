<!--首页内容顶部-->
<template>
  <div id="mainTop">
    <div class="ersi">
        <el-row class="mainTop">
            <el-col :span="6">
                <img src="../../images/mainTopImg.png" alt="">
            </el-col>
            <el-col :span="10" class="neirong">
                <h5>本月排名<em>第一位</em></h5>
                <p>您所在的店铺为居然之家</p>
            </el-col>
            <el-col :span="8" class="btn">
                <button>修改所在店铺</button>
            </el-col>
        </el-row>
    </div>
    <div class="shier">
        <el-row>
            <el-col :span="12" v-for="(item,dollor) in qian" :key="dollor">
                <h3>￥{{item.rmb}}</h3>
                <p>{{item.size}}</p>
            </el-col>
        </el-row>
    </div>
  </div>    
</template>

<script>
export default {
  name: 'mainTop',
  data () {
      return{
          qian:[
              { rmb: "16258", size: "本月订单总额"},
              { rmb: "26752", size: "累计发货总额"}
          ]
      }
  }
}
</script>

<style rel="stylesheet" type="text/css">
#mainTop{ margin-top: -10px;}
/* 顶部 */
.mainTop{background: #fff; border-bottom:1px solid #e5e5e5; padding-bottom: 10px;}
.mainTop img{ width:80%; margin:-20px 0 0 10px;}
.mainTop .neirong{text-align:center; color: #000;}
.mainTop .neirong h5{font-weight:400;}
.mainTop .neirong h5 em{ font-style:normal; color: #ee5b4e; font-size: 1.2em;}
.mainTop .neirong p{ font-size: 0.4em;}
.mainTop .btn{text-align:center;}
.mainTop button{ background: #ddd; border:1px solid #bebebe; border-radius: 50px; color:#ee5b4e; padding:2px 10px; margin-top: 25px;}

/* 底部 */
.shier{ background: #fff; padding: 15px 0; text-align:center;}
.shier h3{ color: #ee5b4e;}
.shier p{ font-size: 0.8em;}
.shier .el-col:first-child{border-right:1px solid #e5e5e5}

/* .grid-content { height: 110px; min-height: 36px;} */
.row-bg { padding: 10px 0; background-color: #f9fafc;}

@media(min-width:400px){
    .mainTop img{ width:90%;}
    .mainTop .neirong{ padding-top: 10px;}
    .mainTop .neirong h5{ font-size: 1.2em; letter-spacing: 2px;}
    .mainTop .neirong p{ font-size:0.9em;}
}

@media(min-width:500px){
    .mainTop img{ width:80%;}
    .mainTop .neirong{ padding-top: 20px;}
    .mainTop button{ margin-top:35px; padding: 5px 20px;}
}
@media(min-width:600px){
    .mainTop .neirong{ padding-top: 20px; font-size:1.2em;}
    .mainTop .neirong p{ padding-top:10px;}
}
@media(min-width:700px){
    .mainTop img{ width:70%;}
    .mainTop .neirong{ padding-top: 30px; font-size:1.2em;}
    .mainTop button{ margin-top:55px;}
}
@media(min-width:800px){
    .mainTop img{ width:130px; margin-left: 25px;}
    .mainTop .neirong{ padding-top: 30px; font-size:1.2em;}
    .mainTop button{ margin-top:55px;}
}
</style>
