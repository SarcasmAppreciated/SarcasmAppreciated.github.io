$(document).ready(function(){
    /*
    $("#main").onepage_scroll({
        sectionContainer: ".section_container",
        easing: "ease",
        animationTime: 800,
        pagination: true,
        updateURL: false,
        keyboard: false,
        beforeMove: null,
        afterMove: null,
        loop: false,
        responsiveFallback: 800,
        direction : 'vertical'        
    });    
    */
	// var minWidth = 2300;
	// var pageWidth = getPageWidth();
    var canvas, stage, exportRoot;
     
    // Animation
    guru_init();
    function guru_init() {
        canvas = document.getElementById("canvas");
        exportRoot = new lib.GuruGuru();        
        
        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();

        createjs.Ticker.setFPS(24);
        createjs.Ticker.addEventListener("tick", stage);
        
        $("#dialogue_window").delay(500).fadeIn("slow", function(){
            startDialogue();
            $("#down_button").delay(6000).fadeIn("slow", function(){
                bounce($(this), 3, '10px', 500);                
            });            
        });
    }    
    
    // Animation Dialogue
    function startDialogue() {
        $("#dialogue_window").append("<p class='dialogue'>Go around, go around, go around...</p>");
        setTimeout(function() {$("#dialogue_window").append("<p class='dialogue'>But, you're not here for music are you...</p>");}, 2500);
        setTimeout(function() {$("#dialogue_window").append("<p class='dialogue'>Pity...</p>");}, 5000);
        setTimeout(function() {$("#dialogue_window").append("<p class='dialogue third_Line'>Well, take a look below!</p>");}, 6000);
    }
    
    // Arrow Bounce
    function bounce(element, times, distance, speed) {
        for(var i = 0; i < times; i++) {
            element.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
        }       
    }
    
    // Music
    var sound_Off = true;
    $("#sound_control").click(function() {
        $(this).find('img').toggle();
        if(sound_Off) {
            document.getElementById("sos").play();
            sound_Off = false;
        }
        else {
            document.getElementById("sos").pause();
            sound_Off = true;            
        }              
    });
    
    // Scrolling animations
	$("#about_button, #down_button").click(function(){
        $("html,body").animate({ scrollTop: $("#about").offset().top}, "slow");
	});     
    
    $("#projects_button").click(function(){
		$("html,body").animate({ scrollTop: $("#projects").offset().top}, "slow");
	});
	
	$("#portfolio_button").click(function(){
		$("html,body").animate({ scrollTop: $("#portfolio").offset().top}, "slow");
	});
	
    /*
	$("#contact_button").click(function(){
		$("#main").moveTo(5);
	});*/
    
    /*
    // Projects
    $(".project_container").mouseover(function(){
        var id = $(this).attr("id");
        $("#projects").removeClass("azimuth_bg fiist_bg lcs_bg purge_bg spellsy_bg").addClass(id + "_bg");
    });
    */
    
    
    /*
	// Resize sword picture and portfolio images to initial load
	// addBG();
    // resizePortElems();
	// Dynamically resize sword picture and portfolio images
	$(window).resize(function() {
		// addBG();
		resizePortElems();
	});	
	
	// Image Resizing
	function getPageWidth() {
		return $(document).width();
	}
    */
	// Masonary
	/*
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
	*/
	/*
    // LightBox
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
    */
});