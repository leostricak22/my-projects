import {FaDatabase, FaNode, FaReact} from "react-icons/fa";
import {SiExpress} from "react-icons/si";

const MainScreen = require("../../assets/images/SnakeGame/MainScreen.png")
const Game = require("../../assets/images/SnakeGame/Game.png")
const Score = require("../../assets/images/SnakeGame/Score.png")

export default function SnakeGame() {
    return (
        <div className="content">
            <h1>Snake Game</h1>
            <p>Link for the <a href="https://zmijica.barbuddy.net/">game</a></p>
            <p className="project-info">Snake game is a simple game made in React.js. The goal of the game is to eat as
                many enemies as possible without hitting the walls or the snake's body.</p>

            <h2>Functionalities and features</h2>
            <p>Enter your name and start the game. Use arrow keys, or swipe to change direction of the snake's head</p>
            <p>Your score is shown on the leaderboard.</p>

            <h2>Technologies used</h2>
            <ul className="tech-items">
                <li><FaReact/> React.js</li>
                <li><FaNode/> Node.js</li>
                <li><SiExpress /> Express.js</li>
                <li><FaDatabase/> MySQL</li>
            </ul>

            <h2>Gameplay</h2>
            <div className="gallery">
                <img src={MainScreen} alt="Snake main screen" />
                <img src={Game} alt="Snake game" />
                <img src={Score} alt="Snake score" />
            </div>
        </div>
    );
}