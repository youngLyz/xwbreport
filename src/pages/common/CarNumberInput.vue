<template>
	<div class="form-item">
		<div class="form-label">
			车牌号						
		</div>
		<div class="form-input-box">
			<span class="form-input-btn iconfont icon-xialakuang" v-model="car_city">
				苏
			</span>
			<input type="text" class="form-input" v-model="car_num">
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'CarNumberInput',
		props: {
			car_city: String,
			car_num: String
		}
	}
</script>

<style lang="scss" scoped="">
	
</style>