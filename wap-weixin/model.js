
var ct = function (str){
	return function(n){
		return str.replace(/\\?{{([^{}]+)}}/gm,function(t,e){
			return n&&n[e]||""
		})
	}};

var tpls = (function(){
 	var result = {};
 	$('.tpl').each(function(){
 		var $tpl = $(this);
 		var tplName = $tpl.attr('id');

 		result[tplName] = ct($tpl.html());
 		$tpl.remove();
 	});

 	return result;
 })();



//alert($("#list").html());
var obj={
"info": [
{imgpath:"<img alt='' src='img/user.gif' width=40 height=40>",title:'W3cschool1',date:'昨天',info:'一位女程序员的征婚PPT，很.....'},
{imgpath:"<img alt='' src='img/user.gif' width=40 height=40>",title:'W3cschool2',date:'昨天',info:'一位女程序员的征婚PPT，很.....'},
{imgpath:"<img alt='' src='img/user.gif' width=40 height=40>",title:'W3cschool3',date:'昨天',info:'一位女程序员的征婚PPT，很.....'},
{imgpath:"<img alt='' src='img/user.gif' width=40 height=40>",title:'W3cschool4',date:'昨天',info:'一位女程序员的征婚PPT，很.....'}
]
};
var html = '';
for(var i=0;i<obj.info.length;i++)
{
	//var strcode=t(obj.info[i]);

	html += tpls.item(obj.info[i]);
	//msg=msg+strcode;
}

$('#list').html(html);
 // var t = ct($("#list").html());
 // var msg="";

 // $('#list').html(msg);




