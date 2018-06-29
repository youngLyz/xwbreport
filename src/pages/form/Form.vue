<template>
	<div>
		<report-header 
			:backUrl="backUrl"
			:headerName="headerName"
			></report-header>
		<report-search @changeShow="handleChangeShowList"></report-search>		
		<search-list 
			v-show="showList"
			:searchText="searchText"
			:slist="slist"></search-list>
		<form-items :formVal="formVal"></form-items>
		<foot-btns @submitForm="handleFormSubmit"></foot-btns>
	</div>	
</template>

<script type="text/javascript">
	import ReportHeader from "@/pages/common/Header"	
	import ReportSearch from "@/pages/common/Search"
	import SearchList from "@/pages/common/SearchList"
	import FormItems from "./components/FormItems"
	import FootBtns from './components/FootBtns'
	import Bus from '@/Bus'
	export default {
		name: "ReporForm",
		data () {
			return {
				backUrl:"/",
				headerName:"检查报告Form",
				showList:false,
				searchText:'',
				slist: [
					{id: 1,
					carInfo: '宝马 GT 320i 2.0T 2015',
					carNumber: '苏D637823',
					clientName: '李清弦',
					clientPhone: '18887852365'
					}
				],
				formVal:{
					car_city: '苏',
					car_num: '15236',
					car_type: '宝马 GT 320i 2.0T 2015',
					client_name: '王源',
					client_phone: '15326456562',
					current_miles: '12000',
					prev_miles: '5000',
					road_date: '2017-08-06',
					gearbox_type: 1
				}	
			}
		},
		components: {
			ReportHeader,
			ReportSearch,
			FormItems,
			FootBtns,
			SearchList
		},
		methods: {
			handleChangeShowList (isShow,searchText){			
				this.searchText = searchText;
				this.showList = isShow;				
			},
			handleFormSubmit () {				
				for(let i in this.formVal){
					console.log(i+":"+this.formVal[i]);
				}				
			},
			handleFormChange (name,val) {
				this.formVal[name] = val;
			}
		},
		mounted () {
			Bus.$on('changedFormObject',this.handleFormChange);
		},
		beforeDestroy () {
			Bus.$off('changedFormObject',this.handleFormChange);
		}
	}
</script>

<style lang="scss" scoped>
	

</style>