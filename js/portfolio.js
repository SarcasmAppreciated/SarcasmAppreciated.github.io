$(document).ready(function(){
	var minWidth = 2300;
	var pageWidth = getPageWidth();
    var canvas, stage, exportRoot;
    
    guru_init();
    function guru_init() {
        canvas = document.getElementById("canvas");
        exportRoot = new lib.GuruGuru();        
        
        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();

        createjs.Ticker.setFPS(24);
        createjs.Ticker.addEventListener("tick", stage);
    } 
    
	// Resize sword picture and portfolio images to initial load
	// addBG();
    resizePortElems();
	// Dynamically resize sword picture and portfolio images
	$(window).resize(function() {
		// addBG();
		resizePortElems();
	});	
	
	// Image Resizing
	function getPageWidth() {
		return $(document).width();
	}
    function getPageHeight() {
		return $(document).height();
	}
	
	// Masonary
	var $container = $("#content");
	$("#content").imagesLoaded().done(function(instance){
		$("#loading").fadeOut("fast", function(){
			$(".portfolio_element").fadeIn("slow", function(){
				$container.isotope({
					itemSelector: '.portfolio_element'
				});				
			});	
		});			
	});	
	
	function resizePortElems() {
		var elemWidth = (getPageWidth())/4 - 0.25;
		
		if(pageWidth < 1000) {
			$(".portfolio_element").css("width", elemWidth * 2);
			$(".portfolio_element.large").css("width", elemWidth);			
		}
		else {
			$(".portfolio_element").css("width", elemWidth);
			$(".portfolio_element.large").css("width", elemWidth / 2);
		}		
	}
	
		
	// Scrolling animations
	$("#portfolio_button").click(function(){
		$("html, body").animate({ scrollTop: $("#portfolio").offset().top - 50 }, "slow");
	});
	
	$("#about_button, #down_button").click(function(){
		$("html, body").animate({ scrollTop: $("#about").offset().top - 50 }, "slow");
	});
	
	$("#contact_button").click(function(){
		$("html, body").animate({ scrollTop: $("#contact").offset().top - 50 }, "slow");
	});
	
	$(".portfolio_element").click(function() {
		var elem =  $(this).children("img").attr("src");
		var winTop = $(document).scrollTop();
		$("#lightbox img").attr("src", elem);
		
		if(navigator.userAgent.indexOf("Chrome") > -1) {
			var topPos = $(this).offset();
			winTop += 200 + topPos.top * 0.05;
		}
		
		$("#lightbox, #lightbox img").css("top", winTop).fadeIn("slow");		
	});
	
	$("#lightbox").click(function() {
		$("#lightbox img").attr("src", "");
		$("#lightbox, #lightbox img").fadeOut("fast");
	});
});