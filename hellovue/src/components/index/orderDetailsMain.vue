<template>
    <div id="orderMain">
        <dl v-for="(item,index) in zhuangtai" :key="index">
            <dt>{{item.title}}<i :class="{'el-icon-caret-bottom':item.bool}"></i></dt>
            <dd v-for="(ding , i) in item.dingdan" :key="i" :class="{ 'active': ding.bool }">
                {{ding.name}} <span class="fr">{{ding.dollor}}{{ding.size}}</span>
            </dd>
            <div v-for="(ding, i) in item.fukuan" :key="i" class="fukuan">
                <span class="fl">
                    {{ding.name}}
                    <p>{{ding.dollor}}{{ding.size}}</p>
                </span>
                <button class="fr">付款</button>
            </div>
            <div v-for="(ding, i) in item.beizhu" :key="i" class="beizhu">
                <p>
                    {{ding.name}}
                    <span class="fr">{{ding.size}}<i :class="ding.icon"></i></span>
                </p>
            </div>
        </dl>
    </div>
</template>
  
<script>
export default {
  name: 'orderMain',
  data () {
      return {
          zhuangtai,
      }
  }
}

const zhuangtai = [
  {
    title: '订单状态',
    dingdan: [
        {name: "订单单号", size:"DH-O-20170609-0015632"},
        {name: "下单时间", size:"2017-06-15 09:30:48"},
        {name: "所属业务员", size: "欢然"},
        {name: "订单状态", size:"未配送", bool: true},
    ]
  },
  {
      title: '付款记录',
      dingdan:[
          {name:'订单金额', size:"17,988.00", dollor:"￥"}
      ],
      fukuan:[
          {name:'应付金额', size:"17,988.00", dollor:"￥"}
      ]
  },
  {
    title: '物流信息',
    dingdan: [
        {name: "发货日期", size:"2017-06-15 09:30:48"},
        {name: "物流单号", size:"DH-O-20170609-0015632"}
    ]
  },
  {
    title: '备注信息',
    bool: true,
    beizhu: [
        {name: "商品清单", size:"1", icon:"el-icon-arrow-right"},
        {name: "订单附件", size:"1", icon:"el-icon-arrow-right"}
    ]
  },
  {
    title: '收货地址',
    dingdan: [
        {name: "联系方式", size:"18888888888"},
        {name: "收货地址", size:"黑龙江省哈尔滨市呼兰区学院路"}
    ]
  }
]
</script>

<style rel="stylesheet" type="text/css">
#orderMain dl{ 
    background: #fff;
    margin-bottom: 10px;
}
#orderMain dt{
    font-weight:700;
    line-height:50px;
    padding:0 5px;
    box-sizing: border-box;
    border-bottom:1px solid #e5e5e5;
    position: relative;
}
#orderMain dt i{
    transform: rotate(-50deg);
    position: absolute;
    bottom: 10px;
    right: 5px;
    color: #aaa;
}
#orderMain dd{
    line-height: 30px;
    padding:0 5px;
    font-size:0.8em;
    color: #aaa;
}
#orderMain dd.active span{
    color: #c7000b;
    font-size: 1.1em;
}
#orderMain .fukuan{
    overflow:hidden;
    zoom: 1;
    background: #f39800;
    color:#fff;
    font-size: 0.8em;
    padding:10px 5px;
    line-height: 20px;
}
#orderMain .fukuan button{
    border:1px solid #fff;
    border-radius: 20px;
    color: #fff;
    background: #f6b240;
    width: 80px;
    height: 25px;
    margin-top: 8px;
}
#orderMain .beizhu{
    padding:0 5px;
    line-height: 50px;
    color: #000;
    border-bottom:1px solid #e5e5e5;
}
#orderMain .beizhu span{
    color: #aaa;
}
#orderMain .beizhu span i{
    margin-left: 5px;
}
</style>
