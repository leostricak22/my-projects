export default function Menu({setSelectedProject}) {
    return (
        <div id="menu">
            <ul>
                <li onClick={() => setSelectedProject("Imbus")}>Imbus</li>
                <li onClick={() => setSelectedProject("BarBuddy")}>BarBuddy</li>
                <li onClick={() => setSelectedProject("SnakeGame")}>Snake-Game</li>
            </ul>
            <div className="user" onClick={() => window.location.href = "https://resume.barbuddy.net/"}>
                <img src="https://avatars.githubusercontent.com/u/36726619?s=96&v=4" alt="Leo Stričak"/>
                <p>Leo Stričak</p>
            </div>
        </div>
    );
}