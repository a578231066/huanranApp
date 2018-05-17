<!-- 底部 -->
<template>
  <div id="footer">
    <!-- <ul>
      <router-link  v-for="(item,footer) in nav" :to="item.link" :key="item.link">
        <li :class="{ 'active': item.bool } " @click="oLi">
          <p :class="'fa '+item.icon"></p>
          {{item.message}}
        </li>
      </router-link>
    </ul> -->
      <el-col :span="24" >
        <el-menu :default-active="this.$route.path.substr(1)" class="el-menu-vertical-demo" active-text-color="#03b8cc">
          <router-link v-for="(item,footer) in nav" :to="item.link" :key="item.link">
            <el-menu-item :index="item.link">
                <p :class="'fa '+item.icon"></p>
                <p class="clear"></p>
                <span slot="title">{{item.message}}</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
  </div>
</template>
  
<script>
import 'element-ui/lib/theme-chalk/index.css';
export default {
  name: 'footer',
  data () {
    return {
      bool:'',
      nav: [
        { num: '1', message: '首页', icon: 'fa-home', link:'home'},
        { num: '2', message: '品牌', icon: 'fa-diamond', link:'pinpai'},
        { num: '3', message: '订单', icon: 'fa-file-text-o', link:'dingdan'}, 
        { num: '4', message: '陈列', icon: 'fa-server', link:'chenlie'},
        { num: '5', message: '我的', icon: 'fa-user-o', link:'my'}
      ]
    }
  },
  methods:{
    oLi: function(){
      this.$set(this.nav,'bool',true)
    }
  }
}
</script>

<style rel="stylesheet" type="text/css">
#footer ul{
  height:80px;
  background: #f8f8f8;
  border-top:1px solid #e5e5e5;
  padding: 0;
}
#footer li{
  width: 20%;
  height: 80px;
  float: left;
  line-height: 25px;
  font-size: 1em;
  text-align: center;
  padding: 0 !important;
  padding-top: 15px !important;
}
#footer li p{
  font-size: 1.6em;
}
</style>

