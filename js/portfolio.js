$(document).ready(function(){
    function checkMobile() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            return true;
        }
        return false;
    }

	const copyright = "Benson Li 2015 - " + new Date().getFullYear() + " ©";
	$("#copyright").text(copyright);

    let oldExperience = false;

    const skillElements = [
        {size: "80", text: "// Java"},
        {size: "40", text: "// C#"},
        {size: "60", text: "// Android"},
        {size: "100", text: "&#60; HTML &#62;"},
        {size: "100", text: "{ CSS }"},
        {size: "90", text: ".javascript"},
        {size: "70", text: "react()"},
        {size: "80", text: "$.jQuery"},
        {size: "60", text: "-- LUA"},
        {size: "60", text: "UI/UX"}
    ];
    const gridElements = [
        {background: "hll", title: "Hotline League and Travis Gafford", text: "- Circa. 2018 to Present -", clickThrough: "https://www.behance.net/gallery/56894655/Overlays-and-Branding", clickText: "Behance Page"},
        {background: "amazon", title: "Amazon: Software Engineer", text: "- June 2017 to June 2023 -<br>Amazon Display Ad Products<br>Architected and developed products<br>generating millions of revenue", clickThrough: "https://amazonfiretv.blog/immerse-yourself-in-middle-earth-with-the-lord-of-the-rings-the-rings-of-power-bb76cc29a9ff", clickText: "Case Study"},
        {background: "poki", title: "Pokimane Podcast", text: "- Completed March 2018 -<br>Dynamic start and intermission screens", clickThrough: "https://archive.org/details/twitch-vod-v282019111", clickText: "Podcast"},
        {background: "ample", title: "Ample Food Icons", text: "- Completed January 2017 -<br>Icons and Infographic", clickThrough: "https://www.behance.net/gallery/49921415/AmpleMealcom", clickText: "Behance Page"},
        {background: "hhhp", title: "HipHopHeads Polls", text: "- Circa March 2016 -<br>Polled Music Player", clickThrough: "", clickText: "Case Study"},
        {background: "gamespot", title: "Gamespot", text: "- March 2014 - February 2016 -<br>Graphic design for onGamers and G | League", clickThrough: "https://www.behance.net/SarcasmAppreciated", clickText: "Behance Page"},
        {background: "fiist", title: "Fiist: Waitlist Management", text: "- Circa. 2012 -<br>Project page for Fiist (startup); designed by Brian Leung", clickThrough: "http://sarcasmappreciated.github.io/Fiist-Site/", clickText: "Github Page"}
    ];
    const people = [
        {clickThrough: "https://twitter.com/pokimanelol", name: "pokimane"},
        {clickThrough: "https://ateyo.com/", name: "ateyo"},
        {clickThrough: "https://www.amplemeal.com/", name: "ample"},
        {clickThrough: "https://twitter.com/LGDgaming", name: "lgd"},
        {clickThrough: "https://uwaterloo.ca/conrad-business-entrepreneurship-technology/", name: "uw"}
    ];

    // populateElements();

    function renderSkills(element) {
        $("#skills").append(`
            <div class="skill" style="background-size: ${element.size}%">${element.text}</div>
        `);
    }
    function renderPeople(element) {
        $("#clients").append(`
            <a href="${element.clickThrough}">
                <div class="circle ${element.name}"></div>
            </a>
        `);
    }
    function renderGrid(element) {
        $(".stage").append(`
            <div class="stage-item" id="${element.background}">    
                <div class="stage-item-image" id="${element.background}-bg" />
                <div class="stage-item-text">
                    <h2>${element.title}</h2>
                    <p class="stage-subtext">${element.text}</p>
                    ${element.clickThrough ? '<a href="' + element.clickThrough + '">' : '<div>'}<button class="stage-button">${element.clickText}</button></a>${element.clickThrough ? '</a>' : '</div>'}
                </div>
            </div>
        `);
    }
    function populateElements() {
        $("#skills").empty();
        $("#clients").empty();
        people.forEach((element) => renderPeople(element));
        skillElements.forEach((element) => renderSkills(element));
        gridElements.forEach((element) => renderGrid(element));
        $("#hhhp").find("button").click(function() {
            $("#main, #social_media, h1").fadeOut(function() {
                window.location.href = "hhhp.html";
            });
        });
    }

    $("#old-experience").click(function() {
        if (!oldExperience) {
            $(this).text("New View");
            $("header").css({position: "inherit"});
            $("footer").css({position: "inherit"});
            $("#sky").hide();
            $("#main").show();
            populateElements();
        } else {
            $(this).text("Legacy View");
            $("header").css({position: "fixed"});
            $("footer").css({position: "fixed"});
            $("#sky").show();
            $("#main").hide();
            $("#first").empty();
        }
        oldExperience = !oldExperience;
    });
});