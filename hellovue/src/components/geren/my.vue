<template>
    <div id="my">
        <div class="header">
            <h3>欢然</h3>
            <ul>
                <li><img src="../../images/touxiang.png" alt=""></li>
                <li><span>登录</span><span>注册</span></li>
            </ul>
        </div>
        <geren-nav></geren-nav>
        <my-footer></my-footer>
    </div>
</template>
 
<script>
import gerenNav from './gerenNav'
export default {
    name: 'my',
    components:{
        gerenNav
    }
}
</script>

<style scoped>
#my .header{
    height: 200px !important;
    background: #03b8cc;
}
#my .header h3{
    width: 100%;
    height: 30px;
    line-height: 20px;
    text-align: center;
    color: #fff;
    font-weight: 400;
    padding-top: 15px;
}
#my .header li{
    text-align: center;
    color: #fff;
}
#my .header li img{
    margin: 30px 0 5px 0;
    width: 60px;
}
#my .header li span{
    border-left:1px solid #fff;
    width: 90px;
    line-height: 20px;
    display: inline-block;
    cursor: pointer;
}
#my .header li span:first-child{
    border-left: none;
}
#footer{
  width:100%;
  height: 80px !important;
  position:fixed;
  bottom: 0;
  left: 0;
  background: #e5e5e5;
}
</style>
