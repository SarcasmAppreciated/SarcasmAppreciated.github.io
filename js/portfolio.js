$(document).ready(function(){
    $("#intro, #arrow_down_box").click(function(){
        $("#arrow_down").fadeOut("fast", function(){
            if($("#hook_alignment").css("margin-top") == "400px") {
                $("#hook_alignment").animate({"margin-top": "75px"}, 1000).css("cursor", "auto");
                $("#arrow_down_box").css({"cursor" : "auto", "color" : "#c71f31"});
                $("#about, #projects").fadeIn("slow");
            }            
        });
    });
    
    $("html, body").bind("DOMMouseScroll MouseScrollEvent MozMousePixelScroll wheel scroll", function(){
        $("#arrow_down").fadeOut("fast", function(){
            if($("#hook_alignment").css("margin-top") == "400px") {
                $("#hook_alignment").animate({"margin-top": "75px"}, 1000).css("cursor", "auto");
                $("#arrow_down_box").css({"cursor" : "auto", "color" : "#c71f31"});
                $("#about, #projects").fadeIn("slow");
            }            
        });      
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
});