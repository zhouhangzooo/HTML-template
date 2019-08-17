/****************************************************************
 *																*		
 * 						      浠ｇ爜搴�							*
 *                        www.dmaku.com							*
 *       		  鍔姏鍒涘缓瀹屽杽銆佹寔缁洿鏂版彃浠朵互鍙婃ā鏉�			*
 * 																*
****************************************************************/

$(document).ready(function(){

	$("#menu ul li a").click(function(e){
		$("#menu .hover").removeClass("hover");
	});

	$("#menu ul > li").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});


	$.fn.scrollPath("getPath")
	.moveTo(1000, 0, {name: "home"})
	.lineTo(1000, 2250, {name: "about"})
	.lineTo(1000, 3250)
	.arc(1550, 3250, 550, -Math.PI, Math.PI/2, true)
	.lineTo(2500, 3800, {name: "culture", rotate: -Math.PI/2})
	.arc(3550, 3800, 900, -Math.PI, Math.PI/2, true)
	.lineTo(4500, 4700, {name: "joinus"})
	.arc(4500, 3800, 900, Math.PI/2, 0, true)
	.lineTo(5400, 1350, {name: "address", rotate: Math.PI/2})
	.arc(5400, -50, 1350, Math.PI/2, Math.PI*1.5, true, {name: "galerie", rotate: 0})
	.lineTo(2400, -1400, {name: "kontakty"})
	.arc(2400, 0, 1400, Math.PI*1.5, Math.PI, true)
	.lineTo(2800, 1200, {name: "guangGao"})
	.arc(2800, 0, 1200, Math.PI/2,  Math.PI*1.5, true);


	$(".wrapper").scrollPath({drawPath: false, wrapAround: true});

	$("nav > ul > li > a").each(function(){
										 
		var target = $(this).attr("href").replace("#", "");
		
		$(this).click(function(e){
			if(target != "home"){
				window.location.hash = '#'+target;
			}else{
				window.location.hash = '#';
			}

			$("nav .active").removeClass("active");
			$(this).parent().addClass("active");
			$.fn.scrollPath("scrollTo", target, 2000, function(t, b, c, d) {
				return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
			});

			$(".wrap").fadeIn(1000);

		});
		
	});

});console.log("\u002f\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u000d\u000a\u0020\u002a\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u0009\u0009\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0020\u0020\u0020\u0020\u0020\u0020\u4ee3\u7801\u5e93\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0077\u0077\u0077\u002e\u0064\u006d\u0061\u006b\u0075\u002e\u0063\u006f\u006d\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0009\u0009\u0020\u0020\u52aa\u529b\u521b\u5efa\u5b8c\u5584\u3001\u6301\u7eed\u66f4\u65b0\u63d2\u4ef6\u4ee5\u53ca\u6a21\u677f\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002f");