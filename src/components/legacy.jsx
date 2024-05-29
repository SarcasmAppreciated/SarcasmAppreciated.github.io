import Circle from "./legacyComponents/circle";
import Projects from "./legacyComponents/projects";
import Skill from "./legacyComponents/skill";

export default function Legacy() {
    const skillElements = [
        {size: "80", text: "// Java"},
        {size: "40", text: "// C#"},
        {size: "60", text: "// Android"},
        {size: "100", text: "<!-- HTML -->"},
        {size: "100", text: "{ CSS }"},
        {size: "90", text: ".javascript"},
        {size: "70", text: "react()"},
        {size: "80", text: "$.jQuery"},
        {size: "60", text: "-- LUA"},
        {size: "60", text: "UI/UX"}
    ];
    const gridElements = [
        {background: "meta", title: "Meta: Senior Software Engineer", text: "- Circa. 2024 to Present -\nAR Glasses", clickThrough: "", clickText: "Coming Soon"},
        {background: "wvw", title: "WebView Wrappers", text: "- Circa. 2024 to Present -\nBetter mobile experiences for hobbies", clickThrough: "https://github.com/SarcasmAppreciated/webview-wrapper", clickText: "Github Page"},
        {background: "rr", title: "Restorankings", text: "- Circa. 2024 to Present -\nPersonal restaurant rankings for Vancouver and Seattle", clickThrough: "https://benson.li/restorankings", clickText: "Web Page"},
        {background: "hll", title: "Hotline League and Travis Gafford", text: "- Circa. 2018 to Present -", clickThrough: "https://www.behance.net/gallery/56894655/Overlays-and-Branding", clickText: "Behance Page"},
        {background: "amazon", title: "Amazon: Software Engineer", text: "- June 2017 to June 2023 -\nAmazon Display Ad Products\nArchitected and developed products\ngenerating millions of revenue", clickThrough: "https://amazonfiretv.blog/immerse-yourself-in-middle-earth-with-the-lord-of-the-rings-the-rings-of-power-bb76cc29a9ff", clickText: "Case Study"},
        {background: "poki", title: "Pokimane Podcast", text: "- Completed March 2018 -\nDynamic start and intermission screens", clickThrough: "https://archive.org/details/twitch-vod-v282019111", clickText: "Podcast"},
        {background: "ample", title: "Ample Food Icons", text: "- Completed January 2017 -\nIcons and Infographic", clickThrough: "https://www.behance.net/gallery/49921415/AmpleMealcom", clickText: "Behance Page"},
        {background: "hhhp", title: "HipHopHeads Polls", text: "- Circa March 2016 -\nPolled Music Player", clickThrough: "https://benson.li/HipHopHeadsDesignStudy/", clickText: "Case Study"},
        {background: "gamespot", title: "Gamespot", text: "- March 2014 - February 2016 -\nGraphic design for onGamers and G | League", clickThrough: "https://www.behance.net/SarcasmAppreciated", clickText: "Behance Page"},
        {background: "fiist", title: "Fiist: Waitlist Management", text: "- Circa. 2012 -\nProject page for Fiist (startup); designed by Brian Leung", clickThrough: "https://benson.li/Fiist-Site/", clickText: "Github Page"}
    ];
    const people = [
        {clickThrough: "https://twitter.com/pokimanelol", name: "pokimane"},
        {clickThrough: "https://ateyo.com/", name: "ateyo"},
        {clickThrough: "https://www.amplemeal.com/", name: "ample"},
        {clickThrough: "https://twitter.com/LGDgaming", name: "lgd"},
        {clickThrough: "https://uwaterloo.ca/conrad-business-entrepreneurship-technology/", name: "uw"}
    ];


    return (
        <div id="main">
            <div className="stage" id="first">
                {gridElements.map((element, i) => 
                    <Projects key={i} element={element} />                                
                )}
                <div id="about" className="stage-item large about">
                    <div className="stage-item-text">
                        <h2 style={{marginBottom: "15px"}}>About</h2>
                        <p>Hi, I'm Benson - I'm a software engineer and graphics designer; I like making cool things - beautiful and immersive experiences.</p>
                        <p>I'm from Vancouver, BC based in Seattle, WA. My past work includes everything from brand creation, AAA software development, and World of Warcraft addons.</p>
                        <h2 style={{marginBottom: "15px"}}>Clients</h2>
                        <p>Here are some of the lovely people I've had the pleasure working with. I've worked as a graphics artist or dev for: Travis Gafford, ATEYO, Pokimane, GameSpot (formerly onGamers), LGD Gaming, and the University of Waterloo - creating art and design for their respective needs.</p>
                        <div className="circle-container" id="clients">
                            {people.map((element, i) => 
                                <Circle key={i} element={element} />                                
                            )}
                        </div>
                    </div>
                </div>
                <div className="stage-item about">
                    <div className="stage-item-text">
                        <h2 style={{marginBottom: "15px"}}>Skills</h2>
                        <p>I work best with Object Oriented Languages but am fluent in Typescript/Javascript and React.</p>
                        <div id="skills" style={{width: "100%", display: "inline-block", marginTop: "10px"}}>
                            {skillElements.map((element, i) => 
                                <Skill key={i} element={element} />                                
                            )}
                        </div>
                        <div className="skill icon" id="PS"></div>
                        <div className="skill icon" id="AI"></div>
                        <div className="skill icon" id="FL"></div>
                        <div className="skill icon" id="AE"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}