<template>
  <div class="parent">
    <child :alltime="time" :needReset="toggleReset"></child>
    <button @click="toggleReset = !toggleReset, time = 30000">立即重置</button>
    <button @click="setTime">设置时间</button>
  </div>
</template>

<script>
import Child from './child'
export default {
  name: 'parent',
  data () {
    return {
      time: 30000,
      toggleReset: false
    }
  },
  components: {
    Child
  },
  methods: {
    setTime () {
      this.time = 10000
    }
  }
}
</script>

<style>

</style>
