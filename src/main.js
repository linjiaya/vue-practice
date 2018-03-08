// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import publicComponent from '@/components/publicComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import $ from 'jquery'
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//路由
  template: '<App/>',
  components: { App }//引用的是./App.vue
})
// Vue.component('public-component', {
//   template: '<div>A public component!</div>'
// })

