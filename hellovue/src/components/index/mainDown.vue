<!--首页内容底部-->
<template>
    <div id="mainDown">
        <el-row>
            <router-link  v-for="(item,i) in imgDatas" :to="item.link" :key="item.link">
                <el-col :span="8">
                    <img :src="item.src" alt="">
                    <p>{{item.name}}</p>
                </el-col>
            </router-link>
        </el-row>
        <div class="kong">
        </div>
    </div>
</template>

<script>
export default {
    name: 'mainDown',
    data () {
        return {
            imgDatas,
        }
    }
}

const imgDatas = [
  {
    link: 'orderAddition',
    name: '订单录入',
    src: require('../../images/mainDownIcon1.png'),
  },
  {
    link: 'orderDetails',
    name: '订单管理',
    src: require('../../images/mainDownIcon2.png'),
  },
  {
    link: 'qingdan',
    name: '陈列管理',
    src: require('../../images/mainDownIcon3.png'),
  },
  {
    link: 'zhifu',
    name: '支付凭证',
    src: require('../../images/mainDownIcon4.png'),
  },
  {
    link: '',
    name: '统计分析',
    src: require('../../images/mainDownIcon5.png'),
  },
  {
    link: '',
    name: '信息通知',
    src: require('../../images/mainDownIcon6.png'),
  }
]
</script>

<style rel="stylesheet" type="text/css">
#mainDown{ margin-top: 20px;}
#mainDown .el-col{ text-align:center; padding:15px 0; background: #fff; border-bottom:1px solid #e5e5e5; border-left:1px solid #e5e5e5;}
#mainDown .el-col img{ width: 35%;}
#mainDown .el-col p{ font-size: 1em;}
#mainDown .kong{width:92%; margin:0 auto; margin-top: 25px; height:50px; background: rgba(0, 0, 0, .2);}
@media(min-width: 700px){
    #mainDown .el-col img{ width: 25%;}
    #mainDown .el-col p{ font-size: 1.2em;}
}
</style>
