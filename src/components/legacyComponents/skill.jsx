export default function Skill({element}) {
    return (
        <div className="skill" style={{backgroundSize: `${element.size}% 100%`}}>{element.text}</div>
    );
}