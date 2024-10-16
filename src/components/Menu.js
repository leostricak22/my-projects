import {projectsData} from "../ProjectsData";
import FilterBox from "./FilterBox";
import {useEffect, useState} from "react";

export default function Menu({ selectedProject, setSelectedProject }) {
    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState(projectsData);

    useEffect(() => {
        const filteredProjects = projectsData.filter((project) => {
            return filter === "all" || project.category === filter;
        });
        setProjects(filteredProjects);
    }, [filter, setProjects]);


    return (
        <div id="menu">
            <div className="filter">
                <FilterBox filter={filter} setFilter={setFilter} />
            </div>
            <ul>
                {projects.map((project) => (
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
