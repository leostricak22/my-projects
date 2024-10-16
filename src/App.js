import Menu from "./components/Menu";
import {useEffect, useState} from "react";
import ProjectInfo from "./components/ProjectComponent";

function App() {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const path = window.location.pathname;
        let lastSegment = path.substring(path.lastIndexOf('/') + 1).replaceAll("%20", " ");

        setSelectedProject(lastSegment);
    }, []);

    useEffect(() => {
        if(selectedProject !== null)
            window.history.pushState(null, "", `/${selectedProject}`);
    }, [selectedProject]);

    return (
        <div id="main">
          <Menu selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
          <ProjectInfo selectedProject={selectedProject}/>
        </div>
    );
}

export default App;
