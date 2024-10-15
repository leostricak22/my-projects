import {projectsData} from "../ProjectsData";
import FilterBox from "./FilterBox";

export default function Menu({ selectedProject, setSelectedProject }) {
    return (
        <div id="menu">
            <div className="filter">
                <FilterBox />
            </div>
            <ul>
                {projectsData.map((project) => (
                    <li key={project.name} onClick={() => setSelectedProject(project.name)} className={selectedProject === project.name && "selected-project"}>
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
