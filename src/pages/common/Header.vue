<template>	
	<header class="top-header">
	 	<span @click="goBack" class="iconfont icon-return"></span>
	 	<h1 class="top-title">{{headerName}}</h1>
	</header>
	
</template>

<script type="text/javascript">
	export default {
		name: "ReportHeader",
		props: {		
			headerName: String
		},
		methods: {
			goBack () {
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="scss" scoped>		
	.top-header{
		width:100%;
		height:px2rem(45px);
		line-height: px2rem(45px);
		background-color: $blue;
		@include padlf10;
		box-sizing: border-box;
		position: fixed;
		top:0;
		z-index: 999;
		.icon-return{
			color:$white;
	    	font-size: $font24;
	    	width: px2rem(30px);
	    	position: absolute;
	    	text-align: center;
	    	left: 0;
		}
		.top-title{
			font-size: $font16;
			text-align:center;
			color: $white;
		}
	}
</style>