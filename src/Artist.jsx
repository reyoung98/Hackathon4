import './Artist.scss'

export default function Artist({ artists }) {
    return (
        <div className="artists">
            { artists.map((artist) => {
                return (
                    <a href={`/artist/${artist.id}`} className="artist-card" key={artist.id}>
                        {/* <div className="avatar"></div> */}
                        <div className="artist-name">{artist.name}</div>
                        {/* <div className="artist-country">{artist.country}</div> */}
                        <div className="artist-disambiguation">{artist.disambiguation}</div>
                        <div className="artist-aliases">Aliases: {artist.aliases.map(alias => alias.name).join(", ")}</div>
                    </a>
                )
            }
            )}
        </div> 
    )
}
