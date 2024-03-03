export default function Projects({element}) {
    return (
        <div className="stage-item" id={element.background}>    
            <div className="stage-item-image" id={`${element.background}-bg`} />
            <div className="stage-item-text">
                <h2>{element.title}</h2>
                <p className="stage-subtext">{element.text}</p>
                {element.clickThrough
                    ? <a href={`${element.clickThrough}`}><button class="stage-button">{element.clickText}</button></a>
                    : <div><button class="stage-button">{element.clickText}</button></div>}
            </div>
        </div>
    );
}