<template>
  <div class="hello">
    <p>这是hello.vue</p>
    <router-view></router-view>
    <!-- <h2>Essential Links {{msg}}</h2> -->
    <ul>
      <!-- <li><a href="https://vuejs.org" target="_blank">11Core Docs</a></li> -->
     <!--  <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li> -->
    </ul>
    <!-- <h2>Ecosystem</h2> -->
    <ul>
      <!-- <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li> -->
      <!-- <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li> -->
    </ul>
    vue-test
    <!-- <vue-test></vue-test> -->
  </div>
</template>

<script>
import vueTest from '../example/vuexTest'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    vueTest: vueTest,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
