$(document).ready(function(){
    navIntro();
    
    // Nav Intro
    function navIntro(){
        $("#hook").delay(1000).fadeOut("fast", function(){
            $("#hook_alignment").animate({"margin-top": "0", "width" : "100%", "height" : "50px"}, 1000, function(){
                $(this).css({"cursor": "auto", "background" : "#FFF", "box-shadow" : "0px 1px 1px 1px #999", "position" : "fixed", "left" : "0"});
                $(".azimuth, #project, ul").fadeIn("slow");  
            });                
        });        
    }
    
    
});