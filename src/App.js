import Menu from "./components/Menu";
import {useState} from "react";
import ProjectInfo from "./components/ProjectInfo";

function App() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div id="main">
          <Menu setSelectedProject={setSelectedProject}/>
          <ProjectInfo selectedProject={selectedProject}/>
        </div>
    );
}

export default App;
