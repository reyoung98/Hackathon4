import './Artist.scss'

export default function Artist({ artists }) {
    return (
        <div className="artists">
            { artists.map((artist) => {
                return (
                    <a href={`/artist/${artist.id}`} className="artist-card" key={artist.id}>
                        <div className="artist-name">{artist.name}</div>
                        <div className="artist-name">{artist.country}</div>
                    </a>
                )
            }
            )}
        </div> 
    )
}
