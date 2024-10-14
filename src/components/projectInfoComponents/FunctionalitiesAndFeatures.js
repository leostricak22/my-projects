import Description from "./Description";

export default function FunctionalitiesAndFeatures({functionalitiesAndFeatures}) {
    return (
        <>
            { functionalitiesAndFeatures &&
                <>
                    <h2>Functionalities and features</h2>
                    <Description description={functionalitiesAndFeatures.description} />
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