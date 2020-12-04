<template>
  <div class="yzmInput">
      <span :class="{spanFocus: index == 0}">{{value[0]}}</span>
      <span :class="{spanFocus: index == 1}">{{value[1]}}</span>
      <span :class="{spanFocus: index == 2}">{{value[2]}}</span>
      <span :class="{spanFocus: index == 3}">{{value[3]}}</span>
      <input type="text" v-model="value" @input="inputChange()">
      {{value}}
  </div>
</template>

<script>
export default {
  name: 'yzmInput',
  data () {
    return {
      index: 0,
      value: ''
    }
  },
  methods: {
    inputChange () {
      console.log(this.value)
      this.index = this.value.length;
    }
  }
}
</script>
<style scoped>
span {
  width: 30px;
  height: 30px;
  display: inline-block;
  border: 1px solid gray;
}
span.spanFocus {
  border: 1px solid orange;
}
</style>
