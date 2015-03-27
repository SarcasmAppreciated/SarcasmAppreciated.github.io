$(document).ready(function(){
	var minWidth = 2133;
	// Resize sword picture and portfolio images to initial load
	addBG();
	resizePortElems();
	// Dynamically resize sword picture and portfolio images
	$(window).resize(function() {
		addBG();
		resizePortElems();
	});	
	
	// Image Resizing
	function getPageWidth() {
		var pageWidth = $(document).width();
		return pageWidth;
	}

	function addBG() {
		var pageWidth = getPageWidth();
		if (pageWidth < minWidth) {
			$("#about").css("background-size", "75%");
		}
		else if (pageWidth >= minWidth) {
			$(".right-text p").css("background", "none");
		}
		
	}
	
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
	
	// Masonary
	var $container = $("#content");
	$("#content").imagesLoaded(function() {
		$container.isotope({
			itemSelector: '.portfolio_element'
		});		
	});	

	
	function resizePortElems() {
		var elemWidth = (getPageWidth())/4 - 0.25;
		var pageWidth = getPageWidth();
		
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
	$("#portfolio-button, #down-button").click(function(){
		$("html, body").animate({ scrollTop: $("#portfolio").offset().top - 50 }, "slow");
	});
	
	$("#about-button").click(function(){
		$("html, body").animate({ scrollTop: $("#about").offset().top - 50 }, "slow");
	});
	
	$("#contact-button").click(function(){
		$("html, body").animate({ scrollTop: $("#contact").offset().top - 50 }, "slow");
	});
	
	/*
	$("#show-button").click(function(){
		$('#content').isotope({ filter: '' });
		  $container.isotope('layout');
	});
	$("#logo-button").click(function(){
		$('#content').isotope({ filter: '.logo' });
	});
	$("#web-button").click(function(){
		$('#content').isotope({ filter: '.website' });
	});
	*/
});