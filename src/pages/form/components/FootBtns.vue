<template>
	<div class="form-btn-group">
		<router-link to="/detail" class="btn-default">检测报告</router-link>
		<a href="javascript:void(0)" @click="handleSubmitClick" class="btn-default">开始检测</a>
	</div>	
</template>

<script type="text/javascript">
	export default {
		name: 'FootBtns',
		methods: {
			handleSubmitClick (){
				this.$emit('submitForm');
			}
		}
	}
</script>

<style lang="scss">
.btn-default,.btn-full-default{
	width:px2rem(145px);
	height:px2rem(40px);
	background-color: $blue;
	color: $white;
	font-size: $font16;
	text-align: center;
	display: inline-block;
	border:none;
	border-radius:px2rem(20px);
	line-height: px2rem(40px);

	&:link{
		background-color:$blue;
	}
	
	&:visited{
		background-color:#0890da;
	}
	&:hover{
		background-color:#0a75b0;
	}
	&:active{
		background-color:#137eb8;
	}
}

.btn-full-default{
	width:100%;		
}
.form-btn-group{
	display:flex;
	margin:px2rem(75px) px2rem(29px) 0;	
	.btn-default{
		flex:1;
		&:first-child{margin-right:px2rem(29px);}
	}
}
</style>