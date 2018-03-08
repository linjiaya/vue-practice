<template>
  <div class="child">
    <h1>{{msg}}</h1>
    <h1>{{msgfromfather}}</h1>
    <button class="btn btn-primary" v-on:click="onClickMe">click</button>
  </div>
</template>

<script>
  export default {
    data: function (){
      return {
        msg : 'hello headera',
      }
    },
    props:['msgfromfather'],//这里必须注册这个属性
    methods: {
      onClickMe :function(){
        console.log(this.msgfromfather);
        this.$emit('child-tell-me-something',this.msg)
        // this.$dispatch('child-tell-me-something',this.msg)
      }
    }
  }
</script>