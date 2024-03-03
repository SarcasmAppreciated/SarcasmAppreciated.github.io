export default function Header({legacy, callback}) {
    return (
        <header style={{position: legacy ? "inherit" : "fixed"}}>
            <h1>Benson Li</h1>
            <ul id="social_media">
                <a href="https://github.com/SarcasmAppreciated" target="_blank"><li>Github</li></a>
                <a href="https://www.linkedin.com/in/bli08/" target="_blank"><li>LinkedIn</li></a>
                <a href="https://www.behance.net/SarcasmAppreciated" target="_blank"><li>Behance</li></a>
            </ul>
            <button id="old-experience" onClick={() => callback()}>Legacy View</button>
        </header>
    );
}