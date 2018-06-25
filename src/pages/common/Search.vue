<template>
	<div class="top-search border-bottom">
		<ul>		
			<li>
				<div class="search-card">
					<input v-model="searchText" maxlength="11" placeholder="姓名/手机/车牌"/>
					<span class="search-icon iconfont icon-i-search" @click="handleSearchClick"></span>
				</div>
			</li>
			<li>
				<span class="iconfont icon-scanning"></span>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "ReportSearch",
		data () {
			return {
				searchText:''			
			}
		},
		methods: {
			handleSearchClick (){
				//console.log(this.searchText);
				if(this.searchText!==''){
					this.$emit('changeShow',true,this.searchText);
				}else{
					this.$emit('changeShow',false);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.top-search {  
  height: px2rem(52px);
  margin-top: px2rem(45px);
  width: 100%;
  background-color:$white;  
  @include border-b;
}

.top-search ul {
  line-height: px2rem(52px);  
  display: flex;
  width: 100%;
}


.top-search ul li .search-card {
  background-color: #fff;
  border-radius: px2rem(18px);
  padding: 0px px2rem(11px);
  position: relative;
  height: px2rem(30px);
  line-height: px2rem(30px);
  z-index: 10;
  overflow: hidden;
  display: flex;
  border: 1px solid $grey;
  margin-left:px2rem(10px);
  margin-top:px2rem(10px);
  width: px2rem(315px);
  box-sizing: border-box;
}

.top-search ul li .search-card input {
  border: 0px;
  outline: none;
  line-height: px2rem(28px);
  margin-left: px2rem(5px);
  font-size: $font14;
  height: px2rem(28px);
  flex-grow: 1;
  flex-shrink: 1;
  min-width: px2rem(10px);
}
.top-search ul li:last-child{flex:1;text-align: center;} 

.icon-i-search{
  font-size:$font24;
  color:$grey;
}

.icon-scanning{
  font-size:$font30;
  color:$blue;
}

</style>