$(document).ready(function(){
    $("#intro, #arrow_down_box").click(function(){
        navIntro();
    });
    
    $("html, body").bind("DOMMouseScroll MouseScrollEvent MozMousePixelScroll wheel scroll", function(){
        navIntro();
    });
    
    if($(".mobile_message").css("display") == "none") {
        $("#arrow_down_box").delay(1000).fadeIn("slow", function(){
            bounce($(this), 2, '10px', 500);                
        });    
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
                        $("#about, #projects, ul").fadeIn("slow");  
                    });
                    // $("#arrow_down_box").css({"cursor" : "auto", "color" : "#c71f31"});                  
                });          
            }            
        });        
    }
});