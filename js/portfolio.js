$(document).ready(function(){
    initializeVerticalScroll();

    $(".up").click(function(){
        $.fn.fullpage.moveSectionUp();  
    });
    
    $(".down").click(function(){
        $.fn.fullpage.moveSectionDown();  
    });
    
    function initializeVerticalScroll() {
        $("#main").fullpage({
            bigSectionsDestination: "top",
            css3: true,
            afterLoad: function(anchor, index) {
                var $currentNav = $("ul#navigation").find("[data='" + index +"']").children("li");
                $currentNav.addClass("active strikethrough");
                $("ul#navigation").find("li").not($currentNav).removeClass("active strikethrough");
            },
            responsiveHeight: 940
        });
    }
       
    $( window ).scroll(function() {
        if($(".fp-responsive").length > 0) {
            if($( window ).scrollTop() != 0) {
                $("h1").css("display", "none");
                $("ul#social_media").css("margin-top", "5px");
                $("ul#navigation").css("margin-top", "25px");
            } else {
                $("h1").css("display", "block");
                $("ul#social_media").css("margin-top", "calc(2% + 35px)");
                $("ul#navigation").css("margin-top", "calc(2% + 55px)");
            }
        }
    });
    
    /* Parallax */
    
    /*$(".parallax_layer").parallax(
        { mouseport: $("#parallax") },
        { xparallax: "48px", yparallax: "48px"}
    );*/
    
});