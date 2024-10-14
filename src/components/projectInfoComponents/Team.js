export default function Team({team}) {
    return (
        <>
            { team &&
                <>
                    <h2>Team</h2>
                    <ul>
                        {team.map((member, index) => <li key={index}>{member}</li>)}
                    </ul>
                </>
            }
        </>
    )
}