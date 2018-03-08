<template>
  <div class="parent">
    <p>child tells me: {{childWords}}</p>
    <child msgfromfather="some interesting" v-on:child-tell-me-something="listenToMy"></child>
  </div>
</template>

<script>
import child from '@/components/child'
export default {
  name: 'parent',
  data:function (){
    return {
      childWords:''
    }
  },
  components:{ child },
  methods:{
    listenToMy : function(msg){
      this.childWords = msg;
    }
  },
  events:{
    'child-tell-me-something' : function(msg){
      this.childWords = msg;
    }
  }
}
</script>