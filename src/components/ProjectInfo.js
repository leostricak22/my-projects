import TechnologiesUsed from "./projectInfoComponents/TechnologiesUsed";
import FunctionalitiesAndFeatures from "./projectInfoComponents/FunctionalitiesAndFeatures";
import Screencast from "./projectInfoComponents/Screencast";
import Team from "./projectInfoComponents/Team";
import Gallery from "./projectInfoComponents/Gallery";

export default function ProjectInfo({project}) {
    if (!project.finished) {
        return (
            <div className="content">
                <h1>{project.name}</h1>
                <p className="project-info">This project has not been added yet.</p>
            </div>
        )
    }

    return (
        <div className="content">
            <h1>{project.name}</h1>
            <p>
                You can find the app <a href={project.url}>here</a>{!project.urlAvailable && <span className="unavailable">&nbsp;(currently unavailable)</span>}
            </p>
            { project.description && <p className="project-info">{project.description}</p> }

            <FunctionalitiesAndFeatures functionalitiesAndFeatures={project.functionalitiesAndFeatures} />
            <TechnologiesUsed technologies={project.technologiesUsed}/>
            <Gallery gallery={project.gallery} />
            <Screencast screencastUrl={project.screencast} />
            <Team team={project.team}/>
        </div>
    );
}