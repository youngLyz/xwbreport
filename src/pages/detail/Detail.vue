<template>
	<div>
		<report-header 			
			:headerName="headerName"
			></report-header>
		<div class="image-box">
			<img class="image-preview" src="../../assets/images/preview.jpg">
		</div>	
	</div>
</template>

<script type="text/javascript">
	import ReportHeader from "@/pages/common/Header"
	export default {
		name: 'ReportDetail',
		data () {
			return {
				headerName: '检查报告详情'				
			}
		},
		components: {
			ReportHeader
		}
		
	}
</script>

<style lang="scss" scoped>
	.image-box{
		width:100%;
		height: 100%;
		margin-top:px2rem(45px);
	}
	.image-preview{
		width: 100%;
	}
</style>