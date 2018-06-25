<template>
	<form class="form">
		<div class="form-group">
			<h2 class="form-tit">车辆信息</h2>
			<div class="form-items">
				<car-number-input 
					:car_city="formObject.car_city"
					:car_num="formObject.car_num"></car-number-input>
				<car-type-select
					:car_type="formObject.car_type"></car-type-select>
			</div>			
		</div>
		<div class="form-group">
			<h2 class="form-tit">客户信息</h2>
			<div class="form-items">
				<input-item 
					label_name="姓名" 
					:input_val="formObject.client_name"
					input_name="client_name"
					valid_type="noEmpty"
					></input-item>
				<input-item 
					label_name="手机号" 
					:input_val="formObject.client_phone"
					valid_type="noEmpty phone"
					input_name="client_phone"></input-item>	
			</div>
		</div>
		<div class="form-group">
			<h2 class="form-tit">行驶信息</h2>
			<div class="form-items">
				<input-item 
					label_name="当前里程" 
					input_name="current_miles"
					valid_type="noEmpty number"
					:input_val="formObject.current_miles"></input-item>
				<input-item 
					label_name="上次检测里程" 
					input_name="prev_miles"
					valid_type="noEmpty number"
					:input_val="formObject.prev_miles"></input-item>
				<input-item 
					label_name="上路时间" 
					input_name="road_date"
					valid_type="noEmpty"
					:input_val="formObject.road_date"></input-item>
			</div>
			<div class="form-items">
				<div class="form-item">
					<div class="form-label">
						变速箱类型
					</div>
					<div class="form-input-box">						
						<template v-if="formObject.gearbox_type===1">
							<input class="form-radio" checked type="radio" id="hand_radio" name="type" value="1">	
							<label class="form-radio-label" for="hand_radio">手动</label>
							<input class="form-radio" type="radio" name="type" id="auto_radio" value="2">
						</template>
						
						<template v-if="formObject.gearbox_type===2">
							<input class="form-radio" type="radio" name="type" id="hand_radio" value="1">	
							<label class="form-radio-label" for="hand_radio">手动</label>
							<input class="form-radio" checked type="radio" id="auto_radio" name="type" value="2">
						</template>	
						<label class="form-radio-label" for="auto_radio" >自动</label>					
					</div>
					
				</div>
			</div>
		</div>
	</form>
</template>

<script type="text/javascript">
	import CarNumberInput from '@/pages/common/CarNumberInput'
	import CarTypeSelect from '@/pages/common/CarTypeSelect'
	import InputItem from '@/pages/common/InputItem'
	export default {
		name: 'FormItems',
		props:{
			formVal: Object
		},
		data () {
			return {
				formObject: this.formVal
			}
		},
		components: {
			CarNumberInput,
			CarTypeSelect,
			InputItem
		},
		methods: {

		}
	}
</script>

<style lang="scss">
.form{background-color: $bg-grey;}
.form-warning{
	background-color: $bg-warn;
}
.form-group{
	background-color: $white;
	margin-bottom: px2rem(5px);

	.form-tit{
		padding-left: px2rem(23px);
		color:$blue;
		font-size: $font14;
		height:px2rem(39px);
		line-height: px2rem(39px);
		position: relative;
		&:before{
			content:'';
			width:px2rem(3px);
			height:px2rem(15px);
			background-color: $blue;
			position: absolute;
			top:50%;
			margin-top:px2rem(-8px);
			left:px2rem(10px);
		}
	}
	.form-items{
		display: flex;
		@include border-tb;	
		
		&:nth-child(odd){
			border-top:0;
		}
	}
	.form-item{
		flex: 1;
		height:px2rem(75px);
		@include border-r;
		&:last-child{
			border-right:0;
		}
	}

	.form-label{
		color:$grey;
		font-size:$font12;	
		@include padlf10;
		line-height: px2rem(40px);
	}
	.form-input-box{
		color:$black;
		font-size: $font16;
		@include padlf10;
		display: flex;		
		.form-input-btn{			
			width:px2rem(40px);
			display: block;

			&:before{float:right;}
		}
		.mbsc-control,.form-input{
			border:none;
			color:$black;			
			width: px2rem(105px);
			flex:1;	
			font-size: $font16;	
			background-color: transparent;	
		}	

	}
}
.form-area{
	height: 100%;
    width: 100%;
    border: 0;
    padding: px2rem(5px) px2rem(20px);
    box-sizing: border-box;
    font-size: $font14;
}

.form-radio{
		width:px2rem(20px);
		height:px2rem(20px);
		-webkit-appearance:none;
		border:0;		
		vertical-align: middle;
		position: relative;

	&:before{		
		content:'\e644';
		font-size: $font14;
		color: $grey;
		font-family:"iconfont" !important;
		position: absolute;
		top:px2rem(4px);
		left: 0;		
	}
	&:checked:before{		
		content:'\e645';
		color: $blue;
	}	
}
.form-radio-label{
	font-size: $font16;
	color: $black;
	margin-right: 20px;
}
	
</style>