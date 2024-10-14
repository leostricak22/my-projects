export default function Screencast({screencastUrl}) {
    return (
        <>
            { screencastUrl &&
                <>
                    <h2>Screencast</h2>
                    <iframe width="500" height="400" src={screencastUrl}
                            title="screencast"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </>
            }
        </>
    )
}