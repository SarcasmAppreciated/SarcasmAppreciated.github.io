export default function Footer({legacy}) {
    const copyright = "Benson Li 2015 - " + new Date().getFullYear() + " ©";
    return (
        <footer style={{position: legacy ? "inherit" : "fixed"}}>
            <p style={{marginTop: "30px"}}>"Pokemon RSE - Pokemon Center" (https://skfb.ly/6uUzL) by Wesai is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>
            <p id="copyright">{copyright}</p>
        </footer>
    );
}