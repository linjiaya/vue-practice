<template>
  <div class="child">
    <div>当前倒计时: <span style="color: red">{{cTime / 1000}}S</span></div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'child',
  data () {
    return {
      cTime: 0,
      selfReset: false
    }
  },
  created () {
    this.cTime = this.alltime
    this.selfReset = this.needReset
  },
  props: {
    alltime: {
      type: Number,
      default: 0
    },
    needReset: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    alltime: {
      // 确保第一次入口进来时,进行更新.(immediate为false时,初始的赋值30s并不会开始倒计时,因为属于同一个更新队列)
      immediate: true,
      handler (newVal) {
        // 只要值改变,证明是父组件想要操作他.无论是想要立即重置,还是自然结束,都是一个新的开始
        this.startNewTimer(newVal)
      }
    },
    toggleReset (newVal) {
      this.startNewTimer(this.alltime)
    }
  },
  methods: {
    startNewTimer (time) {
      // 为了确保能在界面看到.所以多加了下面这句
      this.cTime = time
      this._timer && clearInterval(this._timer)
      this._timer = setInterval(() => {
        this.cTime -= 1000
        if (this.cTime <= 0) {
          clearInterval(this._timer)
          console.log('计时结束')
        }
        console.log(this.$refs.canvas, `当前剩余时间: ${this.cTime}ms`)
      }, 1000)
    }
  }
}
</script>

<style>

</style>
