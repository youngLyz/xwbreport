<template>
		<div class="form-item" id="select_carType">
		<div class="form-label">
			车型
		</div>
		<div class="form-input-box">
			<input type="text" class="form-input" v-model="car_type">
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'CarTypeSelect',
		props: {
			car_type: String
		}
	}
</script>

<style lang="scss" scoped="">
	
</style>