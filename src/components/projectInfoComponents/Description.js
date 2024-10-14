export default function Description({description}) {

    if(description && Array.isArray(description)) {
        return (
            <div>
                {description.map((paragraph, index) => <p key={index} className="project-info">{paragraph}</p>)}
            </div>
        );
    }

    return (
        <div>
            {description && <p className="project-info">{description}</p>}
        </div>
    );
}