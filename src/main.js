// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// axios
import axios from 'axios'

import publicComponent from '@/components/publicComponent'
import 'bootstrap/dist/css/bootstrap.min.css'

// vue2-google-map 引入
import * as VueGoogleMaps from 'vue2-google-maps'

// import $ from 'jquery'
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
console.log(2);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDEK4XKx_F2_R76kuxE_igcWbZpu1n14BQ',
    // libraries: 'places',// 如果你使用自动完成插件
    // OR：libraries：'places，drawing'
    // OR：libraries：'places，drawing，visualization'
    //（如你所需）
  }
})

Vue.prototype.$axios = axios

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//路由
  store,//vuex
  template: '<App/>',
  components: { App }, //引用的是./App.vue
  watch: {
    '$router' (to, from) {
      Vue.$gmapDefaultResizeBus.$emit('resize')
    }
  }
})
// Vue.component('public-component', {
//   template: '<div>A public component!</div>'
// })

