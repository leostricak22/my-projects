import {
    SiArduino,
    SiChartdotjs, SiCplusplus,
    SiExpo,
    SiExpress,
    SiFlyway,
    SiJavascript,
    SiMatterdotjs,
    SiOpenlayers,
    SiSpringboot
} from "react-icons/si";
import {FaCss3, FaDatabase, FaDocker, FaHtml5, FaNodeJs, FaPhp, FaReact} from "react-icons/fa";

export default function TechnologiesUsed({technologies}) {
    function technologiesUsedIcon(item) {
        switch (item) {
            case "Java Spring Boot":
                return <SiSpringboot />;
            case "React Native":
                return <FaReact />;
            case "Docker":
                return <FaDocker />
            case "MySQL":
                return <FaDatabase />
            case "Flyway":
                return <SiFlyway />
            case "Expo":
                return <SiExpo />
            case "React.js":
                return <FaReact />
            case "Node.js":
                return <FaNodeJs />
            case "Express.js":
                return <SiExpress />
            case "OpenLayers":
                return <SiOpenlayers />
            case "HTML":
                return <FaHtml5 />
            case "CSS":
                return <FaCss3 />
            case "JavaScript":
                return <SiJavascript />
            case "Chart.js":
                return <SiChartdotjs />
            case "Matter.js":
                return <SiMatterdotjs />
            case "PHP":
                return <FaPhp />
            case "Arduino":
                return <SiArduino />
            case "C++":
                return <SiCplusplus />
            case "Blynk":
                return <img src={require("../../assets/images/icons/blynk.png")} alt="Blynk" className="tech-icon" />
            default:
                return null;
        }
    }

    return (
        <>
            { technologies &&
                    <>
                        <h2>Technologies used</h2>
                        <ul className="tech-items">
                            {
                                technologies.list.map((item, index) =>
                                    <li key={index}>
                                        {technologiesUsedIcon(item)} {item}
                                    </li>
                                )
                            }
                        </ul>
                    </>
            }
        </>
    )
}