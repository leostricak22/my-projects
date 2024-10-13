import Imbus from "./Projects/Imbus";
import SnakeGame from "./Projects/SnakeGame";

export default function ProjectInfo({selectedProject}) {
    switch (selectedProject) {
        case "Imbus":
            return (
                <Imbus />
            );
        case "BarBuddy":
            return (
                <div id="project1">
                    <h2>Project 1</h2>
                    <p>Project 1 details...</p>
                </div>
            );
        case "SnakeGame":
            return (
                <SnakeGame />
            );
        default:
            return (
                <div className="content">
                    <p className="no-project-selected">Select a project to see it's information.</p>
                </div>
            );
    }
}