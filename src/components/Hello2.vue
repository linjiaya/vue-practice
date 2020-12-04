<template>
<div>
  <hr>
  <p v-if="ok"> if <br>这是hello2.vue :{{msg}}</p>
  <p v-else>else</p>
  <button class="btn btn-default" @click="changeOk()">ok toggle</button>
  <br>
  <br>
  <p>这样不用写watch :{{this.$route.name}}</p>
</div>
</template>

<script>
  export default {
    name: 'hello2',
    data(){
      return {
        msg : this.$route.params,
        ok : true
      }
    },
    watch:{
      $route:function (to,from){
        this.msg = this.$route.params;
      }
    },
    methods:{
      changeOk:function(){
        this.ok = !this.ok;
      }
    }
  }
</script>