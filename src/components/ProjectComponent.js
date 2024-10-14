import {projectsData} from "../ProjectsData";
import ProjectInfo from "./ProjectInfo";

export default function ProjectComponent({selectedProject}) {
    const project = projectsData.find(proj => proj.name === selectedProject);

    if (project) {
        return <ProjectInfo project={project} />;
    }

    return (
        <div className="content">
            <p className="no-project-selected">Select a project to see its information.</p>
        </div>
    );
}