import Vue from 'vue'
import Router from 'vue-router'
//index
import HelloWorld from '@/components/index/HelloWorld'
import orderDetails from '@/components/index/orderDetails'
import orderAddition from '@/components/index/orderAddition'
import zhifu from '@/components/index/zhifu'
// 品牌
import pinpai from '@/components/pinpai/index'
// 清单
import qingdan from '@/components/qingdan/index'
// 订单
import dingdan from '@/components/dingdan/index'
import sousuo from '@/components/dingdan/sousuo'
// 店铺
import dianpu from '@/components/dianpu/index'
import dianpuXinxi from '@/components/dianpu/dianpuXinxi'
// 陈列
import chenlie from '@/components/chenlie/index'
// 个人中心
import my from '@/components/geren/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/orderDetails',
      name: 'orderDetails',
      component: orderDetails
    },
    {
      path: '/orderAddition',
      name: 'orderAddition',
      component: orderAddition
    },
    {
      path: '/zhifu',
      name: 'zhifu',
      component: zhifu
    },
    {
      path: '/pinpai',
      name: 'pinpai',
      component: pinpai
    },
    {
      path: '/qingdan',
      name: 'qingdan',
      component: qingdan
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan
    },
    {
      path: '/dianpu',
      name: 'dianpu',
      component: dianpu
    },
    {
      path: '/dianpuXinxi',
      name: 'dianpuXinxi',
      component: dianpuXinxi
    },
    {
      path: '/sousuo',
      name: 'sousuo',
      component: sousuo
    },
    {
      path: '/chenlie',
      name: 'chenlie',
      component: chenlie
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
