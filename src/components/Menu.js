export default function Menu({setSelectedProject}) {
    return (
        <div id="menu">
            <ul>
                <li onClick={() => setSelectedProject("Imbus")}>Imbus</li>
                <li onClick={() => setSelectedProject("BarBuddy")}>BarBuddy</li>
                <li onClick={() => setSelectedProject("SnakeGame")}>Snake-Game</li>
            </ul>
        </div>
    );
}