import {FaFilter} from "react-icons/fa";
import {useEffect, useState} from "react";

export default function FilterBox() {
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

    return (
        <>
            {isOpen && <div id="modalBackground" onClick={toggleDropdown}></div>}
            <div className="filter-container">
                <div className="filter" onClick={toggleDropdown}>
                    <FaFilter id="filterIcon"/>
                </div>

                {isOpen && (
                    <div className="dropdown">
                        <ul>
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}
