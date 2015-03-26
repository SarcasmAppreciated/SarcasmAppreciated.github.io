$(document).ready(function(){
	var minWidth = 2133;
	
	addBG(getPageWidth());
	$(window).resize(function() {
		addBG(getPageWidth());
	});
	
	
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

	var dir = "C:\Users\Benson\Documents\Portfolio\SarcasmAppreciated.github.io\index.html\images\gallery/";
	var fileextension = ".jpg";
	$.ajax({
		//This will retrieve the contents of the folder if the folder is configured as 'browsable'
		url: dir,
		success: function (data) {
			alert(dir);
			//Lsit all png file names in the page
			$(data).find("a:contains(" + fileextension + ")").each(function () {
				var filename = this.href.replace(window.location, "").replace("http:///", "");
				alert(filename);
				$("#portfolio").append($("<img src=" + dir + filename + "></img>"));
			});
		}
	});
/*
	$(function(){
		
		var $container = $('#content');
		
		
		$container.imagesLoaded( function(){
			$container.isotope({
				itemSelector : '.post'
			})
		});
		
		
	   $container.infinitescroll({
			navSelector  : '.nav-next',
			nextSelector : '.nav-next a', 
			itemSelector : '.post',
			loading: {
				finishedMsg: '',
				img: '' 
				}
			},
			function( newElements ) {
				/* $container.isotope( 'appended', $( newElements ) );
				var $newElems = $(newElements);
				$newElems.imagesLoaded(function(){
				$container.isotope('appended', $newElems );
				 });
			});
		
	});
	*/
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