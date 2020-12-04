import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

// 这里 $store.state.show 无论哪个组件都可以使用 , 那组件多了之后 , 状态也多了 , 这么多状态都堆在 store 文件夹下的 index.js 不好维护怎么办 ?
import dialog_store from './dialog_store.js'
export default new vuex.Store({
	/* state: {
		show: false,
	} */
	modules: {//我们可以使用 vuex 的 modules,这样之后$store.state.show 统统改为 $store.state.dialog.show
		dialog: dialog_store
	}
})
/* const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment (state) {
			state.count++
		}
	}
}) */