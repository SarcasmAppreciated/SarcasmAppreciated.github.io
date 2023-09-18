$(document).ready(function(){
   
    function checkMobile() {
        var returnVal = 0;
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            returnVal = 1000;
        }
        return returnVal;
    }

	const copyright = "Benson Li 2015 - " + new Date().getFullYear() + " ©";
	$("#copyright").text(copyright);

    /* HHHP */
    $("#start_hhhp").click(function() {
        $(".hhhp_hide, #social_media, h1").fadeOut( function() {
            window.location.href = "hhhp.html";
        });        
    });
    
    const gridElements = [
        {background: "intro", title: "", text: "", size: "four", clickThrough: ""},
        {background: "", title: "Hi, I like making cool things - beautiful and immersive experiences.", text: "", size: "four", clickThrough: "true"},
    ];
    populateGrid();
    function renderElement(element) {
        $(".stage").append(`<div id="${element.background}-bg" class="stage_item ${element.size}" onClick="expandElement()">
            <div style="margin:10px">
                <h2>${element.title}</h2>
                <p class="stage_subtext">${element.text}</p>
            </div>
        </div>`);
    }
    function populateGrid() {
        gridElements.forEach((element) => renderElement(element));
    }

    function expandElement() {
        
    }
});