import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutationtypes'
import mutations from './mutations'

Vue.use(Vuex);

const moduleA = {
	state: {
		name: "Alice"
	}
}
const moduleB = {
	state: {
		name: "Bush"
	}
}
const store = new Vuex.Store({
	modules: {
		a: moduleA,
		b: moduleB
	}
}


/*{
	state: {
		count: 1,
		beforeCount:0,
		list:[1,2,3,4,5,6,7],
		todos: [{id: 1,name: 'admin'},{id: 2,name: 'superadmin'}]
	},
	getters: {//多个组件需要用到此属性时，使用getters.
		//可以认为是 store 的计算属性:
		//getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
		//Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值：store.getters.listCount
		listCount:state => state.list.filter(item=>item>3).length,
		//让 getter 返回一个函数，来实现给 getter 传参。
		//getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果
		getTodoById: (state) => (id) => {			
		    return state.todos.find(todo => todo.id === id)
		  }
	},
	mutations,
	actions: {
	   /* INCREMENT (context) {
	      context.commit('INCREMENT')
	    }*/
	  /*  [types.INCREMENT] ({ commit }) {//参数结构
		    commit('INCREMENT')
		},
		[types.INCREMENTASYNC] ({ commit }) {
			setTimeout(()=>{
				commit('INCREMENT')	
			},500)			
		}
	  }*/
);
export default store