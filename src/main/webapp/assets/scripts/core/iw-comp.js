/**
 * Created by whz on 2014/10/30.
 */
// 声明一个全局对象Namespace，用来注册命名空间
Namespace = new Object();

// 全局对象仅仅存在register函数，参数为名称空间全路径，如"Iw.Util"
Namespace.register = function()
{
	var a = arguments, o = null, i, j, d, rt;
	for (i = 0; i < a.length; ++i) {
		d = a[i].split(".");
		rt = d[0];
		eval("if (typeof " + rt + " == \"undefined\"){"
			+ rt + " = {};} o = " + rt + ";");
		for (j = 1; j < d.length; ++j) {
			o[d[j]] = o[d[j]] || {};
			o = o[d[j]]
		}
	}
}

Namespace.register("Iw.Util");

//弹出通知消息函数
//说明：弹出通知消息函数。
//message：消息内容
//layout：布局
//type：显示类型

Iw.Util.noty = function (message, layout, type) {
	var dataNotyOption = {text:"" + message + "", layout:"" + layout + "", type:"" + type + "", timeout:5000, maxVisible: 1};
	noty(dataNotyOption);
	jQuery.noty.clearQueue();
}

//弹出警告的通知消息函数
//说明：弹出警告的通知消息函数。
//message：消息内容
Iw.Util.warningNoty = function (message) {
	Iw.Util.noty(message, "top", "warning");
}

//弹出错误的通知消息函数
//说明：弹出错误的通知消息函数。
//message：消息内容
Iw.Util.errorNoty = function (message) {
	Iw.Util.noty(message, "top", "error");
}

//弹出成功的通知消息函数
//说明：弹出成功的通知消息函数。
//message：消息内容
Iw.Util.successNoty = function (message) {
	Iw.Util.noty(message, "top", "success");
}

//Iw.Util.formatYyyyMMddHHmm = function(date) {
//	return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
//}

Iw.Util.formatYyyyMMddHHmm = function(date) {
	return date.format("yyyy-MM-dd hh:mm");
}

Date.prototype.format = function(fmt)
{
	var o = {
		"M+" : this.getMonth()+1,                 //月份
		"d+" : this.getDate(),                    //日
		"h+" : this.getHours(),                   //小时
		"m+" : this.getMinutes(),                 //分
		"s+" : this.getSeconds(),                 //秒
		"q+" : Math.floor((this.getMonth()+3)/3), //季度
		"S"  : this.getMilliseconds()             //毫秒
	};
	if(/(y+)/.test(fmt))
		fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("("+ k +")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
	return fmt;
}