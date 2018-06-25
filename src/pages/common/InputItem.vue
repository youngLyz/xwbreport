<template>
	<div class="form-item">
		<div class="form-label">
			{{label_name}}
		</div>
		<div class="form-input-box">
			<input type="text" class="form-input" v-model="inputValue" @change="changedValue">
		</div>
	</div>
</template>

<script type="text/javascript">
	import Bus from '@/Bus'
	import Validate from '@/assets/js/FormValidate'
	import simpleDialog from '@/assets/js/jqDialog'	
	export default {
		name: "InputItem",
		props: ['label_name','input_val','input_name','valid_type'],
		data () {
			return {
				inputValue: this.input_val
			}			
		},
		methods: {
			changedValue () {
				let res = Validate(this.valid_type,this.inputValue);
				console.log(res)
				if(res.status){
					Bus.$emit('changedFormObject',this.input_name,this.inputValue);	
				}else{
					setTimeout(()=>{
						simpleDialog.show(res.msg);	
					},500)
					
				}
				
			}
		}
	}
</script>