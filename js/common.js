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
		$('#💞').Kenburns({
			images: [
				"img/top_slide_01.jpg",
				"img/top_slide_02.jpg",
				"img/top_slide_03.jpg",
				"img/top_slide_04.jpg",
				"img/top_slide_05.jpg",
				"img/top_slide_06.jpg",
				"img/top_slide_07.jpg",
				"img/top_slide_08.jpg",
				"img/top_slide_09.jpg"
			],
			scale:1.15,
			duration:4000,
			fadeSpeed:2000,
			ease3d:'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
		});
		
		
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
