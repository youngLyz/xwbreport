<template>
	<div>
		检查报告详情{{moduleName}}
		<!-- <p>{{count}}</p>
		<p>{{beforeCount}}</p>
		<p>{{listCount}}</p>
		<p v-if="todoItem">{{todoItem.id}}:{{todoItem.name}}</p>
		<button type="button" @click="handleCountAdd">click</button> -->

	</div>
</template>

<script type="text/javascript">
	import { mapState } from 'vuex'
	import { mapGetters } from 'vuex'
	import { mapMutations } from 'vuex'
	import { mapActions } from 'vuex'
	export default {
		name: 'ReportDetail',
		computed: {
			moduleName () {
				return this.$store.state.a.name
			}
		}/*1、mapState 函数返回的是一个对象，获取多个状态
		mapState({
			count: state=>state.count,
			beforeCount: 'beforeCount'
		})*/
		/*2、当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
		mapState(['count','beforeCount'])*/
		/*3、与局部计算属性混合使用，将多个对象合并为一个，以使我们可以将最终对象传给 computed 属性***/
		/*{	 
			localComputed () { },
			...mapState(['count','beforeCount']),
			listCount () {
				return this.$store.getters.listCount//.state.list.filter(item=>item>3).length
			},
			todoItem () {
				return this.$store.getters.getTodoById(this.count);
			},
			//mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
			...mapGetters(['listCount'])
		},*/
		//methods: {
			/*handleCountAdd () {
				//this.$store.commit('increment',{num:3});
				//this.$store.commit({type:'INCREMENT',num:3})
				this.$store.dispatch('INCREMENTASYNC').then(()=>{
					console.log('async end')
				})
			}*/
			/*...mapMutations({
				handleCountAdd: 'INCREMENT'
			})*/
			/*...mapActions({
				handleCountAdd:'INCREMENTASYNC'
			})*/
	//	}
	}
</script>

<style lang="scss" scoped>
	
</style>