import { useEffect, useRef } from "react";
import { animate, init } from '../assets/js/threeMain.js';

export default function Three() {
    const devInit = useRef(false);
    useEffect(() => {
        if (!devInit.current) {
            devInit.current = true;
            init();
            animate();
        }
    }, []);
    
    return (
        <div id="sky">
            <div className="blurb static">
                <p className="blurb-paragraph">Hi, I'm Benson - I'm a software engineer and graphics designer; I like making cool things - beautiful and immersive experiences.</p>
                <p className="blurb-paragraph">I'm from Vancouver, BC based in Seattle, WA currently working for Meta. My past work includes everything from brand creation, AAA software development, and World of Warcraft addons.</p>
                <p className="blurb-paragraph">I've had the pleasure working with and for: Amazon, Travis Gafford, ATEYO, Pokimane, GameSpot (formerly onGamers), LGD Gaming, and the University of Waterloo - creating art and design for their respective needs.</p>
            </div>
        </div>
    );
}