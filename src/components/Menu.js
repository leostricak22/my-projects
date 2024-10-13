import {projectsData} from "../ProjectsData";

export default function Menu({ setSelectedProject }) {
    return (
        <div id="menu">
            <ul>
                {projectsData.map((project) => (
                    <li key={project.name} onClick={() => setSelectedProject(project.name)}>
                        {project.name}
                    </li>
                ))}
            </ul>
            <div className="user" onClick={() => window.location.href = "https://resume.barbuddy.net/"}>
                <img src="https://avatars.githubusercontent.com/u/36726619?s=96&v=4" alt="Leo Stričak" />
                <p>Leo Stričak</p>
            </div>
        </div>
    );
}
