import {projectsData} from "../ProjectsData";

export default function ProjectInfo({selectedProject}) {
    const project = projectsData.find(proj => proj.name === selectedProject);

    if (project) {
        const ProjectComponent = project.component;
        return <ProjectComponent />;
    }

    return (
        <div className="content">
            <p className="no-project-selected">Select a project to see its information.</p>
        </div>
    );
}