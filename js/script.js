
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

			//var more = ["微商","电商","网红，主播","2016年3月30日 魏则西事件","2016年6月23日 英国举行脱欧公投","2016年8月15号 宝强，马蓉，宋喆","2016-10-25 朴槿惠闺蜜门","2016-11-9 美国大选，川普入主白宫","2016-11-17 林丹出轨"];
			var more = ["对窗外大喊我好寂寞啊","慢慢地性感地把上衣撩起到不能再撩起的位置","把右边第一个异性横抱起来","和左边第一个异性换穿上衣","头顶簸箕，手拿笤帚，边跳边唱道：我爱劳动，我爱卫生","男生摸自己胸说唉太小了","男生将女生逼角落，用调情式一手撑墙，两人深情对视10秒","男生仰躺地上，女生撑在上面，坚持5秒钟","跳钢管舞","对外大喊我是猪","正面相隔做接吻陶醉状10秒","表演一个卡通人物，直到有人认出来为止","做一个大家都满意的鬼脸","背你左边的人，绕场一周","喂你右边第一位异性吃东西.","表演哈哈大笑15秒，要出声哟","俯卧撑15下","用卫生纸做围巾，围在脖子上直到下个游戏结束","模仿脑白金广告，边唱边跳","唱青藏高原最后一句","背对大家来个回眸一笑","学超级名模走秀","你好幸运，换下一个人","喝一杯朋友们用各种饮料混合的饮料","饶你一死，换你右边第三个人接受惩罚","原地转10圈后走直线，走歪了请你喝饮料","(男生)选一个同伴，你躺在地上，他手撑住地，坚持20秒","就地闭眼，左转三圈，右转三圈，睁开眼走直线，然后回到自己的座位","选一个小伙伴，正面相对，十指相扣，深情对视，并朗诵骆宾王的《鹅鹅鹅》","用屁股写自己的姓氏","抱起一个同伴，做深蹲5个","为右边的第一个男生脱衣服，由下一轮抽中的人再为他穿上","将在场的所有红色衣服穿在身上"];
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
	$("body").append("<img class='tmp_face' src='http://www.sail.name/random/images/"+obj+".gif'/>");
	var winW = $(window).width();
	var winH = $(window).height();
	$(".tmp_face").css("top",winH/2-100).fadeIn().animate({"left":winW/2-200},500).delay(1000).fadeOut(function(){
		$(this).remove()
	});
}

