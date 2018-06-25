let $ = require('jquery')

var dialogConfig = {
	options:{
		title:'',
		content:'',
		singleBtn:false,
		singleBtnTxt:'确定',
		confirmFunc:function(){},
		cancelFunc:function(){}
	},
	createDialog:function(options){
		var $dialog = $('<div class="ui-dialog">'),
		$content = $('<div class="ui-dialog-cnt">'),
		$body = $('<div class="ui-dialog-bd">'),
		$foot = $('<div class="ui-dialog-ft">');

		if(options.title!==''){
			$body.append('<h3>'+options.title+'</h3>');
		}
		if(options.content!==''){
			$body.append('<p id="ui_dialog_content">'+options.content+'</p>');	
		}
		$content.append($body);

		var $confirmBtn = $('<button type="button">确定</button>');
		$confirmBtn.on('click',function(){			
			options.confirmFunc.call(this);
			$dialog.removeClass('show');
		});
		$foot.append($confirmBtn);

		if(options.singleBtn){
			$confirmBtn.addClass('ui-btn-lg').html(options.singleBtnTxt);
		}else{
			var $cancelBtn = $('<button type="button">取消</button>');
			$cancelBtn.on('click',function(){			
				options.cancelFunc.call(this);
				$dialog.removeClass('show');
			});
			$foot.prepend($cancelBtn);
		}

		$content.append($foot);
		$dialog.append($content);
		//$dialog.addClass('show');

		$(document.body).append($dialog);

		return $dialog;
	}
}

function jqDialog(opt){
	var options = $.extend({},dialogConfig.options,opt)
	this.dialog = dialogConfig.createDialog(options);	
	this.show = function(msg){
		if(msg!=undefined){
			this.dialog.find("#ui_dialog_content").html(msg);
		}
		this.dialog.addClass('show');

	};
	this.hide = function(){
		this.dialog.removeClass('show');
	}
}
let simpleDialog = new jqDialog({
		title:'提示',
		content:'提示内容',
		singleBtn:true,
		singleBtnTxt:'确定',
		confirmFunc:function(){}
	});
/*let dialog = new jqDialog({
		title:'提示',
		content:'提示内容',		
		confirmFunc:function(){},
		cancelFunc:function(){}
	});*/

export default simpleDialog