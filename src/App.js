import Menu from "./components/Menu";
import {useState} from "react";
import ProjectInfo from "./components/ProjectComponent";

function App() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div id="main">
          <Menu selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
          <ProjectInfo selectedProject={selectedProject}/>
        </div>
    );
}

export default App;
