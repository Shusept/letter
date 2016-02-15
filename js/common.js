// 图片预加载及进度条
window.addEventListener('DOMContentLoaded', function() {
    "use strict";
    var ql = new QueryLoader2(document.querySelector("body"), {
        barColor: "#666",
        backgroundColor: "#eee",
        percentage: true,
        barHeight: 10,
        minimumTime: 1000,
        fadeOutTime: 3000
    });
});


$(document).ready(function(){
	
	
	var windH = $(document).height();
	$(".cd").height(windH);
	
	
$('#💗').flipcountdown({
	size:'sm',
	beforeDateTime:'4/1/2016 00:00:00',
	callback:function(){
	
	$(".cd").fadeOut(3000).css("display","none");
	
	// 点击intro后才执行 start
	$("#💖").click(function(document){
		
		// 踢飞intro
		$(this).addClass("go");
		setTimeout(function(){
			$("#💖").css("display","none");
		}, 1500);
		
		// 开始播放音乐
		$("audio").attr("autoplay","autoplay");
		
		setInterval(function(){
			$('#💞').removeClass("dn");
			$('#💞').toggleClass("hidden");
			$('#💞').toggleClass("show");
		}, 18000);
		
		
		// 圆形旋转图定时循环3张切换
		var count = 0;
		setInterval(function(){
			count++;
			$('.💕').toggleClass("img1", count % 3 == 0)
				.toggleClass("img2", count % 3 == 1)
				.toggleClass("img3", count % 3 == 2);
		}, 36000);
		
		
		// 顶部图片轮播
		eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(\'\\p\\t\\u\')["\\s\\7\\o\\j\\n\\m\\o\\8"]({q:["\\0\\f\\4\\e\\9\\a\\3\\2\\8\\d\\0\\c\\7\\2\\5\\r\\6\\b\\3\\4","\\0\\f\\4\\e\\9\\a\\3\\2\\8\\d\\0\\c\\7\\2\\5\\y\\6\\b\\3\\4","\\0\\f\\4\\e\\9\\a\\3\\2\\8\\d\\0\\c\\7\\2\\5\\z\\6\\b\\3\\4","\\0\\f\\4\\e\\9\\a\\3\\2\\8\\d\\0\\c\\7\\2\\5\\i\\6\\b\\3\\4","\\0\\f\\4\\e\\9\\a\\3\\2\\8\\d\\0\\c\\7\\2\\5\\g\\6\\b\\3\\4","\\0\\f\\4\\e\\9\\a\\3\\2\\8\\d\\0\\c\\7\\2\\5\\x\\6\\b\\3\\4","\\0\\f\\4\\e\\9\\a\\3\\2\\8\\d\\0\\c\\7\\2\\5\\v\\6\\b\\3\\4","\\0\\f\\4\\e\\9\\a\\3\\2\\8\\d\\0\\c\\7\\2\\5\\w\\6\\b\\3\\4","\\0\\f\\4\\e\\9\\a\\3\\2\\8\\d\\0\\c\\7\\2\\5\\k\\6\\b\\3\\4"],H:1.G,I:K,J:C,B:\'\\l\\n\\j\\0\\l\\A\\j\\7\\F\\0\\7\\m\\E\\5\\6\\i\\i\\g\\h \\5\\6\\5\\g\\5\\h \\5\\6\\g\\g\\5\\h \\5\\6\\k\\g\\5\\D\'});',47,47,'x69||x5f|x70|x67|x30|x2e|x65|x73|x74|x6f|x6a|x64|x6c|x2f|x6d|x35|x2c|x34|x62|x39|x63|x72|x75|x6e|x23|images|x31|x4b|ud83d|udc9e|x37|x38|x36|x32|x33|x2d|ease3d|2000|x29|x28|x7a|15|scale|duration|fadeSpeed|4000'.split('|'),0,{}))
		
		
		// 字幕轮播
		$('.slider').bxSlider({
			auto: true,
			mode: 'vertical',
			speed: 6000,
			pause: 10000,
			pager: false,
			controls: false,
			//infiniteLoop: false,
			slideWidth: 375,
			minSlides: 4,
			maxSlides: 4,
			moveSlides: 1,
			slideMargin: 0
		});
		
	});
	// 点击intro后才执行 end
	
		return false;
	}
});
// 倒计时结束后才执行 end
	
	
	// 音乐播放开关设定
	$(".music-trigger").click(function(document){
		if($(this).hasClass("play")){
			$('#stop-btn').click();
			$(this).removeClass("play").addClass("stop");
		} else{
			$('#play-btn').click();
			$(this).removeClass("stop").addClass("play");
		}
	});
	
	var myVid=document.getElementById("myaudio2");
	myVid.volume=0.2;
	
	
	// 圆形旋转图尺寸及位置设定
	var windW = $(document).width();
	var iconW = windW*0.17624;
	var mg = -iconW/2;
	$(".💕").width(iconW);
	$(".💕").height(iconW).css({marginTop:mg, marginLeft:mg});
	
	
});
