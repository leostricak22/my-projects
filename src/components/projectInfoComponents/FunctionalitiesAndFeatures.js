export default function FunctionalitiesAndFeatures({functionalitiesAndFeatures}) {
    return (
        <>
            { functionalitiesAndFeatures &&
                <>
                    <h2>Functionalities and features</h2>
                    <p>
                        {
                            functionalitiesAndFeatures.description &&
                            functionalitiesAndFeatures.description.map((item, index) => <p key={index}>{item}</p>)
                        }
                    </p>
                    {
                        functionalitiesAndFeatures.list && <>
                            <p>The most important functionalities in the code are:</p>
                            <ul>
                                {functionalitiesAndFeatures.list.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </>
                    }
                </>
            }
        </>
    )
}