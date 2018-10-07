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
            anchors: ['0', '1', '2', '3', '4', '5', '6', '7'],
            menu: "#navigation",
            responsiveHeight: checkMobile()
        });
    }
    
    function checkMobile() {
        var returnVal = 0;
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            returnVal = 1000;
        }
        return returnVal;
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
        } else {
            $("ul#navigation").css("top", "calc(50% - 50px)");            
        }
    });
    
    /* Parallax */
    
    /*$(".parallax_layer").parallax(
        { mouseport: $("#parallax") },
        { xparallax: "48px", yparallax: "48px"}
    );*/
    
    /* HHHP */
    $("#start_hhhp").click(function() {
        $(".hhhp_hide, #navigation, #social_media, h1").fadeOut( function() {
            window.location.href = "hhhp.html";
        });        
    });
});