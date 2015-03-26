$(document).ready(function(){
	var minWidth = 2133;
	
	addBG(getPageWidth());
	$(window).resize(function() {
		addBG(getPageWidth());
	});
	
	inputInfo();
	
	$("#portfolio-button, #down-button").click(function(){
		$("html, body").animate({ scrollTop: $("#portfolio").offset().top - 50 }, "slow");
	});
	
	$("#about-button").click(function(){
		$("html, body").animate({ scrollTop: $("#about").offset().top - 50 }, "slow");
	});
	
	$("#contact-button").click(function(){
		$("html, body").animate({ scrollTop: $("#contact").offset().top - 50 }, "slow");
	});
	
	function getPageWidth() {
		var pageWidth = $(document).width();
		return pageWidth;
	}

	function addBG(pageWidth) {
		if (pageWidth < minWidth) {
			// $(".right-text p").css("background-color", "#fff");
			// $(".right-text.left p").css("background", "none");
			$("#about").css("background-size", "75%");
		}
		else if (pageWidth >= minWidth) {
			$(".right-text p").css("background", "none");
		}
		
	}

	var pictureLinks = new Array;	
	 
	function inputInfo() {
		$.ajax({
            url : "pictureLinks.txt",
            dataType: "text",
            success : function (data) {
                alert(data);
				pictureLinks = data.split('\n');
				alert(pictureLinks[0]);
            }
        });

	}
	
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