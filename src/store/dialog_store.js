export default {
  state: {
    show: false
  },
  getters: {//类似computed ，计算state后生成新的数据
    not_show (state) {// 这里的state对应这上面这个state
      return !state.show;
    }
  },
  mutations: {// 多个state操作用mutations
    switch_dialog (state) { // 这里的state对应着上面的state
      state.show = !state.show;
      // 还可以这这里 执行其他的操作 改变state
      // 对state里面的各种数据 的各种操作合集
    }
  },
  actions: {
    switch_dialog (context) {// 这里的 context 和使用的 $store 拥有相同的对象和方法
      context.commit('switch_dialog');
      // 还可以在这里出发其他的mutations方法;
      // 处理 对state的处理的函数 的合集
    }
  }
}