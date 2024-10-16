import {FaFilter} from "react-icons/fa";
import {useEffect, useState} from "react";
import {FaX} from "react-icons/fa6";

export default function FilterBox({filter, setFilter}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    function changeFilter(changeTo) {
        setFilter(changeTo);
        setIsOpen(false);
    }

    return (
        <>
            {isOpen && <div id="modalBackground" onClick={toggleDropdown}></div>}
            <div className="filter-container">
                <div className="filter" onClick={toggleDropdown}>
                    <FaFilter id="filterIcon"/>
                </div>
                {
                    filter !== "all" &&
                    <div className="filter" onClick={() => setFilter("all")}>
                        <FaX id="removeIcon"/>
                    </div>
                }

                {isOpen && (
                    <div className="dropdown">
                        <ul>
                        <li onClick={() => changeFilter("web")}>Web apps</li>
                            <li onClick={() => changeFilter("mobile")}>Mobile apps</li>
                            <li onClick={() => changeFilter("desktop")}>Desktop</li>
                            <li onClick={() => changeFilter("arduino")}>Arduino</li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}
