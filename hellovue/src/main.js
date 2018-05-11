// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入饿了么
import ElementUI from 'element-ui';
//引入全局css
import './css/reset.css';
import './css/font-awesome.min.css'

//底部
import kbtHeader from './components/index/footer'
// 饿了么
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.component('my-footer', kbtHeader)

/* eslint-disable no-new */
//document.addEventListener('deviceready', function() {
  new Vue({
      el: '#app',
      router,
      // store,
      template: '<App/>',
      components: { App },
      // 饿了么
      render: h => h(App)
  })
  window.navigator.splashscreen.hide()
//}, false);
