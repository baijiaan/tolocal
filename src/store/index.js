import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
	  name:'123'
  },
  mutations: {
	  ff(state,a){
		  console.log(state,'111')
		  console.log(a,'异步传入同步的值')
		  state.a = a
	  },
	  fn(state,b){
		  console.log(state)
		  state.b = b
	  }
  },
  actions: {
	  // 第一个参数是对象,解构赋值拿到对象中的commit
	  ff({commit},a){
		  console.log(commit,a)
		  commit('ff',a)
	  }
  },
  modules: {
  }
})
