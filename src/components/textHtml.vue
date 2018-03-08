<template>
  <div class="textHtml">
    <p>｛{title}｝：{{title}}</p>
    <p>v-text:<span v-text="title"></span></p>
    <p>v-html:<span v-html="title"></span></p>
  </div>
</template>
<script>
  export default {
    name: 'textHtml',
    data(){
      return {
        title : '标题',
        msg : this.$route.params
      }
    }
  }
</script>