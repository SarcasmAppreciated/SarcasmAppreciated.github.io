$(document).ready(function(){
    
    /*navIntro();

    // Nav Intro
    function navIntro(){
        // $("#hook").delay(1000).fadeOut("fast", function(){
            // $("#hook_alignment").animate({"margin-top": "0", "width" : "100%", "height" : "50px"}, 1000, function(){
                // $(this).css({"cursor": "auto", "background" : "#FFF", "box-shadow" : "0px 1px 1px 1px #999", "position" : "fixed", "z-index" : "100", "left" : "0"});
                // $(this).css({});
                $("#about, ul, .azimuth, #project, #splash").fadeIn("slow");
            // });                
        // });    
    }
    
    */
    
    $("#about, ul, .azimuth, #project, #splash").fadeIn("slow", function (){            
        if($("#hook_alignment").width() > 800){
            $("#arrow_down").fadeIn("slow", function(){
                bounce($(this), 3, '5px', 500);                
            });
        }
    });
    
    $("#arrow_down").click(function(){
        var target = $("#about");
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);        
    });
  
    
    // Arrow Bounce
    function bounce(element, times, distance, speed) {
        for(var i = 0; i < times; i++) {
            element.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
        }       
    }

    /*
    $("#intro, #arrow_down_box").click(function(){
        navIntro();
    });
    
    $("html, body").bind("DOMMouseScroll MouseScrollEvent MozMousePixelScroll wheel scroll", function(){
        navIntro();
    });
    
    if($("#hook_alignment").css("margin-top") != "0px") {
 
    }
    
    // Arrow Bounce
    function bounce(element, times, distance, speed) {
        for(var i = 0; i < times; i++) {
            element.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
        }       
    }
    
    // Nav Intro
    function navIntro(){
        $("#arrow_down_box").fadeOut("fast", function(){
            if($("#hook_alignment").css("margin-top") != "0px") {
                $("#hook").fadeOut("fast", function(){
                    $("#hook_alignment").animate({"margin-top": "0", "width" : "100%", "height" : "50px"}, 1000, function(){
                        $(this).css({"cursor": "auto", "background-image" : "none", "box-shadow" : "0px 1px 1px 1px #999", "position" : "fixed", "left" : "0px", "z-index": "100", "background" : "#FFF"});
                        $("#about, ul").fadeIn("slow");  
                    });
                    // $("#arrow_down_box").css({"cursor" : "auto", "color" : "#c71f31"});                  
                });          
            }            
        });        
    }*/
});