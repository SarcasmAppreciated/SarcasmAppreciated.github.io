$(document).ready(function(){
	var minWidth = 2300;
	var pageWidth = getPageWidth();
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
		var pageWid = $(document).width();
		return pageWid;
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
	
	/*
	function addBG() {
		if (pageWidth < minWidth) {
			$("#about").css("background_size", "60%");
		}		
	}
	*/
	/*
	inputPictures();
	// Import infographics
	var pictureLinks = new Array;	 
	function inputPictures() {
		$.ajax({
            url : "pictureLinks.txt",
            dataType: "text",
            success : function (data) {
				pictureLinks = data.split('\n');
				var i;
				for (i = 0; i < pictureLinks.length; i++) {
					$("#content").append($("<div class='portfolio_element'><img src=" + pictureLinks[i] + " class='portfolio_infographic'></img></div>"));					
				}
            }
        });
	}
	*/
	/*
	$("#show_button").click(function(){
		$('#content').isotope({ filter: '' });
		  $container.isotope('layout');
	});
	$("#logo_button").click(function(){
		$('#content').isotope({ filter: '.logo' });
	});
	$("#web_button").click(function(){
		$('#content').isotope({ filter: '.website' });
	});
	*/
});