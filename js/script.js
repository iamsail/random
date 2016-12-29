
var wait = 2;
var jieguo = 0;

$(function(){
	var time;
	var font;

	$(".start").show();
	$(".start").click(function(){
		time = setInterval("gaocf()",30);$("#chengfa_text").animate({fontSize:"25px"});
		$(".start").hide();
		$("#come").hide();
		$("#finish").hide();
		$(".past_one").hide();
		$(".about").hide();
		setTimeout(function(){$(".over").trigger("click")},Math.random()*test.length*1000);
	});

	$(".over").click(function(){
		clearInterval(time);

		openFace(Math.round(Math.random()*4));
		$("#chengfa_text").animate({fontSize:"20px"}).animate({fontSize:"25px"});
		for( i=1;i<=wait;i++ ){
			setTimeout("count("+ i + ")",i*1000)
		}
		$(".start").hide();$(".count").show();
	});
	
	$(document).keydown(function(event){
		if(event.keyCode == 13 || event.keyCode == 32){
			if($(".start").css("display") == "none" && $(".over").css("display") == "none" ){
				return false;
			}		
			if($(".start").css("display") == "block"){
				$(".start").click()
			}else{
				$(".over").click()
			}
		};
	});
});

$(function(){
	$(".past_one").click(function(){

			var more = ["微商","电商","网红，主播","2016年3月30日 魏则西事件","2016年6月23日 英国举行脱欧公投","2016年8月15号 宝强，马蓉，宋喆","2016-10-25 朴槿惠闺蜜门","2016-11-9 美国大选，川普入主白宫","2016-11-17 林丹出轨"];
			test = more;
			$("#come").val("");
	})
});



$(function(){
	$("#finish").click(function(){
		var text =$("#come").val();
		temp=text;
		var arr = temp.split('666');
		var apple;  //新输入的字符串，化成标准格式后，存储其中
		apple="["+"\"";
		for(var i=0;i<arr.length;i++){
			if(i!==arr.length-1){
				apple += arr[i]+"\""+","+"\"";
			}
			if(i===arr.length-1){
				apple+=arr[i]+"\""+"]";
			}
		}
		test=arr;
	});
});


function count(num){
	if(num == wait){
		$(".count").hide();
		$(".start").show();
		$("#come").show();
		$("#finish").show();
		$(".past_one").show();
		$(".about").show();
	}else{
		jieguo = wait - num;
		$(".start").hide();$(".count").show();
		$(".count").html("启动(" + jieguo + "秒)")
	}
}

function gaocf(){
	var numSj = Math.floor(Math.random()*test.length);
	var chengfa_text = test[numSj];
	$("#chengfa_text").html(chengfa_text);
}

function openFace(obj){
	$("body").append("<img class='tmp_face' src='images/"+obj+".gif'/>");
	var winW = $(window).width();
	var winH = $(window).height();
	$(".tmp_face").css("top",winH/2-100).fadeIn().animate({"left":winW/2-200},500).delay(1000).fadeOut(function(){
		$(this).remove()
	});
}

