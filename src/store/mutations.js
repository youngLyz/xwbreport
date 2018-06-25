//使用常量替代 Mutation 事件类型
import types from './mutationtypes'
export default {
	[types.INCREMENT] (state,payLoad) {
		if(payLoad){
			state.beforeCount = state.count = payLoad.num
		}else{
			state.beforeCount = state.count++	
		}
		
	}
}