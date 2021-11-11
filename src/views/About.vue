<template>
  <div class="about">
	<div>我是通过vuex异步传的值:{{$store.state.a}}</div>
    <h1>This is an about page</h1>
	<!-- <button @click="fn1"></button> -->
	<h1>我是通过同步直接传入进来的:{{b}}</h1>
  </div>
</template>
	
<script>
	// 计算属性内要使用...mapState,mapactions 所以要引入这个属性
	import {mapState,mapactions} from "vuex"
	export default{
		name:'About',
		computed:{
		   ...mapState({
			   b:state => state.b 
		   })
		}
		
	}
	
</script>
