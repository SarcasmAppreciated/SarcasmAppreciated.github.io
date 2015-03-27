$(document).ready(function(){
	var minWidth = 2133;
	// Resize sword picture to initial load
	addBG(getPageWidth());
	// Dynamically resize sword picture
	$(window).resize(function() {
		addBG(getPageWidth());
	});	
	
	// Image Resizing
	function getPageWidth() {
		var pageWidth = $(document).width();
		return pageWidth;
	}

	function addBG(pageWidth) {
		if (pageWidth < minWidth) {
			$("#about").css("background-size", "75%");
		}
		else if (pageWidth >= minWidth) {
			$(".right-text p").css("background", "none");
		}
		
	}
	
	inputPictures();
	// Import portfolio
	var pictureLinks = new Array;	 
	function inputPictures() {
		$.ajax({
            url : "pictureLinks.txt",
            dataType: "text",
            success : function (data) {
				pictureLinks = data.split('\n');
				var i;
				for (i = 0; i < pictureLinks.length; i++) {
					$("#content").append($("<img src=" + pictureLinks[i] + " class='port_info'></img>"));					
				}
				var $container = $("#content");
				$container.isotope({
					itemSelector: '.port_info'
				});
            }
        });
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