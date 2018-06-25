<template>
	<section class="search-list">
	<p class="search-tip"><span class="black">{{searchText}}</span>相关的客户信息</p>
	<ul >
		<router-link 
			tag="li"
			class="search-item" 
			v-for="(item,index) of slist"
			:key="item.id"
			:to="'/form/'+item.id">
			<a href="" class="search-item-link">
				<p class="text">{{item.carInfo}}| {{item.carNumber}}<br>
					{{item.clientName}}({{item.clientPhone}})
				</p>
				<span class="iconfont icon-angle-right"></span>
			</a>
		</router-link>
	</ul>	
</section>	

</template>

<script type="text/javascript">
	export default {
		name: "SearchList",
		props: {
			searchText:String,
			slist: Array
		}		
	}
</script>

<style lang="scss" scoped>
	
.search-list{
	
}
.search-tip{
	font-size: $font12;
	color:$grey;
	line-height: px2rem(45px);
	@include border-b;
	padding-left: px2rem(10px);
	.black{color: $black;}
}
.search-item-link{
	display: block;
	font-size: $font12;
	color: $black;
	height:px2rem(60px);
	@include border-b;
	display: flex;
	.text{padding-top: px2rem(13px);padding-left: px2rem(10px);flex: 1;}
	.iconfont{width:px2rem(30px);margin-right: px2rem(10px);color: $grey;line-height: px2rem(60px);}
}
</style>