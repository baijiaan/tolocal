<template>
  <div class="home">
	  <button @click="fn">vuex异步传入同步在获取</button>
	  <button @click="fn2">vuex直接传入同步</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
	  fn(){
		  let a = '白家安'
		  this.$store.dispatch('ff',a)
		
	  },
	  fn2(){
		  let b = '北京'
		  this.$store.commit('fn',b)
	  }
	  
	  
  }
}

</script>
