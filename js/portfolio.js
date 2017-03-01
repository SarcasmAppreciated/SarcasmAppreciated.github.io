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
            responsiveHeight: 940
        });
    }
    
    /* Parallax */
    
    /*$(".parallax_layer").parallax(
        { mouseport: $("#parallax") },
        { xparallax: "48px", yparallax: "48px"}
    );*/
    
});