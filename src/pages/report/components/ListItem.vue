<template>
	<div class="record" @click="clickListItem(itemVal.id)">
		<div class="car-file">
			<img :src="itemVal.bgImg" class="car-img">
			<ul>
				<li>{{itemVal.carNumber}}</li>
				<li>{{itemVal.carInfo}}</li>
			</ul>	
			<ul>
				<li>{{itemVal.clientName}}</li>
				<li>{{itemVal.clientPhone}}</li>
			</ul>	
			<ul>
				<li>检测时间:{{itemVal.checkDate}}</li>
				<li>当前里程:{{itemVal.currentMiles}}km</li>
			</ul>  
		</div>
		<div class="record-detail">
			<div class="item">
					<div class="item-label2 top2">紧急处理</div>
					<div class="item-label2">{{itemVal.dangerNum}}项</div>
			</div>
			<div class="item">
				<div class="item-label2 top2">密切关注</div>
				<div class="item-label2">{{itemVal.warnNum}}项</div>
			</div>
			<div class="item">
				<div class="item-label2 top2">状态良好</div>
				<div class="item-label2">{{itemVal.normalNum}}项</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "ListItem",
		props: {
			itemVal: Object
		},
		methods: {
			clickListItem (id) {
				this.$router.push("/detail/"+id);
			}
		}
	}
</script>

<style lang="scss" scoped>
.record{
  @include border-b;
  margin-bottom: px2rem(5px);
  background: $white;
  &:last-child{margin-bottom:0;}
}

.car-file{
	padding:px2rem(10px);
  	position: relative;
  .car-img{
    height:px2rem(68px);width: px2rem(45px);
    position: absolute;right: 0;top: px2rem(10px);
  }
}
.car-file ul{
	width:100%;
	display: flex;
}
.car-file ul li{	
	flex:1;
	font-size: $font12;
  color: $black;
  line-height: px2rem(22px);
}
.record-detail{
  margin: 0;
  border-top: 1px solid $bg-grey;
  width: 100%;
  display: flex;
}
.record-detail .item {
    flex: 1;
    height: px2rem(75px);
    &:first-child {
    	color:$red;
    }
    &:nth-child(2) {
    	color:$orange;
    }
    &:nth-child(3) {
    	color:$green;
    }
}
.record-detail .item-label2 {        
    text-align: center;
    font-size: $font14;
}

.record-detail .top2{
  margin-top: px2rem(20px);
}
</style>