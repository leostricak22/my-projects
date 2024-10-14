import TechnologiesUsed from "./projectInfoComponents/TechnologiesUsed";
import FunctionalitiesAndFeatures from "./projectInfoComponents/FunctionalitiesAndFeatures";
import Screencast from "./projectInfoComponents/Screencast";
import Team from "./projectInfoComponents/Team";
import Gallery from "./projectInfoComponents/Gallery";
import Description from "./projectInfoComponents/Description";

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
            <div className="projectName">
                <h1>{project.name}</h1>
                {
                    <img src={project.logo ? project.logo : "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="} alt={project.name} className="project-logo"/>
                }
            </div>

            {
                project.inDevelopment && <p className="in-development">New version of this project is coming out soon.</p>
            }

            {
                project.url && <p>You can find the app <a href={project.url}>here</a>.{!project.urlAvailable && <span className="unavailable">&nbsp;(currently unavailable)</span>}</p>
            }

            <Description description={project.description} />

            {
                project.documentation && <p>Project documentation is <a href={project.documentation}>here</a>.</p>
            }

            <FunctionalitiesAndFeatures functionalitiesAndFeatures={project.functionalitiesAndFeatures} />
            <TechnologiesUsed technologies={project.technologiesUsed}/>
            <Gallery gallery={project.gallery} />
            <Screencast screencastUrl={project.screencast} />
            <Team team={project.team}/>

            {
                project.awards &&
                <>
                    <h2>Awards</h2>
                    <Description description={project.awards} />
                </>
            }
        </div>
    );
}