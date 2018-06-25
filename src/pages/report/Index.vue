<template>
	<div>
		<report-header 
			:backUrl="backUrl"
			:headerName="headerName"
			></report-header>
		<report-search @changeShow="handleChangeShowList"></report-search>
		<report-list 
			v-show="!showList"
			:list="rlist"
			></report-list>
		<search-list 
			v-show="showList"
			:searchText="searchText"
			:slist="slist"></search-list>
	</div>	
</template>

<script type="text/javascript">
	import ReportHeader from "@/pages/common/Header"	
	import ReportSearch from "@/pages/common/Search"
	import SearchList from "@/pages/common/SearchList"
	import ReportList from "./components/List"
	
	export default {
		name: "ReportIndex",
		data () {
			return {
				backUrl:"/",
				headerName:"检查报告",
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
				rlist:[
						{id: 1,
						bgImg: require('../../assets/images/vw.png'),//使用require引入本地文件
						carNumber: '苏E12345',
						carInfo: '大众 polo 1.6 2017',
						clientName: '王小明先生',
						clientPhone: '18878787878',
						checkDate: '2017-02-08',
						currentMiles: 1000,
						dangerNum: 1,
						warnNum: 3,
						normalNum: 12
					}
				]		
			}
		},
		components: {
			ReportHeader,
			ReportSearch,
			ReportList,
			SearchList
		},
		methods: {
			handleChangeShowList (isShow,searchText){
				//console.log(isShow)
				this.searchText = searchText;
				this.showList = isShow;				
			}
		}
	}
</script>

<style lang="scss" scoped>
	

</style>