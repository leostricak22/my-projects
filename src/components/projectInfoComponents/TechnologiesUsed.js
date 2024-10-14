import {SiExpo, SiExpress, SiFlyway, SiSpringboot} from "react-icons/si";
import {FaDatabase, FaDocker, FaNodeJs, FaReact} from "react-icons/fa";

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