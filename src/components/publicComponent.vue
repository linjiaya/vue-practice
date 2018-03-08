<script>
import Vue from 'vue'
Vue.component('public-component', {
  template: '<div>A public component!</div>'
})
Vue.component('headerComp',{
  template:'<div ><h1 class="well">component header</h1></div>'
})
Vue.component('footerComp',{
  template:'<div ><h1 class="well">component footer</h1></div>'
})
</script>