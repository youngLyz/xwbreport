<template>
	<section class="reports-list">
	<div class="sub-title">检测报告</div>	
	<div class="sub-list">
		<list-item 
		v-for="(item,index) of list"
		:key="item.id"
		:itemVal="item"
		></list-item>
	</div>	
</section>	
</template>

<script type="text/javascript">
	import ListItem from './ListItem'
	export default {
		name: "ReportList",
		props: {			
			list: Array			
		},
		components: {
			ListItem
		}
	}
</script>

<style lang="scss" scoped>
.sub-title{
	padding-left: px2rem(23px);
	color:$blue;
	font-size: $font14;
	height:px2rem(39px);
	line-height: px2rem(39px);
	position: relative;
	@include border-b;
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
.sub-list{
  background-color: $bg-grey;
}

</style>