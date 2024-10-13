import { FaJava, FaReact, FaDocker, FaDatabase } from 'react-icons/fa';
import {SiExpo, SiFlyway} from 'react-icons/si';

export default function Imbus() {
    return (
        <div className="content">
            <h1>Imbus</h1>
            <p>Link for the <a href="https://downloads.barbuddy.net/imbus">.apk</a> <span className="unavailable">(currently unavailable)</span></p>
            <p className="project-info">Imbus is a mobile application that allows users to find experts within Croatia,
                it was developed as part of the TVZ Mc2 competition.</p>

            <h2>Functionalities and features</h2>
            <p>The user creates an ad on which the expert makes an offer. Within the chat, they agree on the date of the
                work, which is automatically saved in the calendar after confirmation.</p>
            <p>The most important functionalities in the code are:</p>
            <ul>
                <li>Creating ads</li>
                <li>Browse and filter ads</li>
                <li>Small defects (forum)</li>
                <li>Calendar</li>
                <li>Filtering experts by category and location</li>
                <li>Reviews</li>
                <li>Offers</li>
                <li>Edit profile</li>
            </ul>

            <h2>Technologies used</h2>
            <ul className="tech-items">
                <li><FaJava/> Java Spring Boot</li>
                <li><FaReact/> React Native</li>
                <li><FaDocker/> Docker</li>
                <li><FaDatabase/> MySQL</li>
                <li><SiFlyway/> Flyway (with database migrations)</li>
                <li><SiExpo/> Expo</li>
            </ul>

            <h2>Screencast</h2>
            <iframe width="500" height="400" src="https://www.youtube.com/embed/HrZacMQllf0?si=AqG86td4lHqk4JRL"
                    title="Imbus screencast"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>

            <h2>Team</h2>
            <ul>
            <li>Leo Stričak (developer)</li>
                <li>Zvonimir Škegro (design)</li>
                <li>Oliver Živčić (developer & business plan)</li>
            </ul>
        </div>
    );
}