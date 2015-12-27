$(document).ready(function(){
    $("#intro").click(function(){
        navIntro();
    });
    
    $("html, body").bind("DOMMouseScroll MouseScrollEvent MozMousePixelScroll wheel scroll", function(){
        navIntro();
    });
    
    // Nav Intro
    function navIntro(){
        if($("#hook_alignment").css("margin-top") == "400px") {
            $("#hook").fadeOut("fast", function(){
                $("#hook_alignment").animate({"margin-top": "0", "width" : "100%", "height" : "50px"}, 1000, function(){
                    $(this).css({"cursor": "auto", "background-image" : "none", "box-shadow" : "0px 1px 1px 1px #999"});
                    $(".azimuth, ul").fadeIn("slow");  
                });                
            });          
        }       
    }
});