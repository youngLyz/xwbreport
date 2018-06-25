let validNotions = {
		noEmpty:'不许为空',
		phone:'请输入正确的手机号码',
		idCard:'请输入正确的身份证号码',
		licensePlate:'请输入正确的车牌号',
		number:"请输入数字"
	};

let validFuncs = {
	noEmpty:function(val){
		return val!=='';
	},
	phone:function(mobile){
		//手机号码不是11位
		if(mobile.length!=11)
		{
			return false;
		}

		//正则 手机号码是不是以特定开头
		let myreg = /^1[3,4,5,7,8]([0-9]){1}(\d){8}$/;
		if(!myreg.test(mobile))
		{
			return false;
		}
		return true;
	},
	idCard:function(idCard){
		/*
		 * 身份证15位编码规则：dddddd yymmdd xx p
		 * dddddd：6位地区编码
		 * yymmdd: 出生年(两位年)月日，如：910215
		 * xx: 顺序编码，系统产生，无法确定
		 * p: 性别，奇数为男，偶数为女
		 *
		 * 身份证18位编码规则：dddddd yyyymmdd xxx y
		 * dddddd：6位地区编码
		 * yyyymmdd: 出生年(四位年)月日，如：19910215
		 * xxx：顺序编码，系统产生，无法确定，奇数为男，偶数为女
		 * y: 校验码，该位数值可通过前17位计算获得
		 *
		 * 前17位号码加权因子为 Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ]
		 * 验证位 Y = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ]
		 * 如果验证码恰好是10，为了保证身份证是十八位，那么第十八位将用X来代替
		 * 校验位计算公式：Y_P = mod( ∑(Ai×Wi),11 )
		 * i为身份证号码1...17 位; Y_P为校验码Y所在校验码数组位置
		 */
		//15位和18位身份证号码的正则表达式
		let regIdCard=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

		//如果通过该验证，说明身份证格式正确，但准确性还需计算
		if(regIdCard.test(idCard)){
			if(idCard.length==18){
				let idCardWi=new Array( 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ); //将前17位加权因子保存在数组里
				let idCardY=new Array( 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
				let idCardWiSum=0; //用来保存前17位各自乖以加权因子后的总和
				for(let i=0;i<17;i++){
					idCardWiSum+=idCard.substring(i,i+1)*idCardWi[i];
				}

				let idCardMod=idCardWiSum%11;//计算出校验码所在数组的位置
				let idCardLast=idCard.substring(17);//得到最后一位身份证号码

				//如果等于2，则说明校验码是10，身份证号码最后一位应该是X
				if(idCardMod==2){
					if(idCardLast=="X"||idCardLast=="x"){
						// alert("恭喜通过验证啦！");
						return true;
					}else{
						return false;
						//alert("身份证号码错误！");
					}
				}else{
					//用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
					if(idCardLast==idCardY[idCardMod]){
						//alert("恭喜通过验证啦！");
						return true;
					}else{
						//alert("身份证号码错误！");
						return false;
					}
				}
			}
		}else{
			//alert("身份证格式不正确!");
			return false;
		}
	},
	licensePlate:function(val){
		
		return val.length<5 || !/^[a-zA-Z]{1}[a-zA-Z_0-9]{4,5}$/.test(val) || /[a-zA-Z]{5,6}/.test(val);
	},
	number:function(val){
		return !isNaN(val);
	}
};

function checkUndefined(value){
	return value || "";
}
let Validate = function(validTypes,value){		
	let results = {status:true,msg:''};
	let validTypesArr = checkUndefined(validTypes).split(" ");
	for(let j=0;j<validTypesArr.length;j++){
		let vt = validTypesArr[j];
		console.log(vt);
		if(vt!==''&&!validFuncs[vt](value)){
			results.status = false;
			results.msg = validNotions[vt];			
			return results;
		}		
	}	
	return results;	
};
export default Validate;