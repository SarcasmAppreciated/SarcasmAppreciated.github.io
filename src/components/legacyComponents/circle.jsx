export default function Circle({element}) {
    return (
        <a href={element.clickThrough}>
            <div className={`circle ${element.name}`}></div>
        </a>
    );
}