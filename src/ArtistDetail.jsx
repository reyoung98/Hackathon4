import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoverArt from './CoverArt'

export default function ArtistDetail() {
  const [artist, setArtist] = useState();
  const { id } = useParams();

  const fetchData = async () => {
    const response =
      await fetch(`https://musicbrainz.org/ws/2/artist/${id}?fmt=json&inc=releases
`);
    const artist = await response.json();
    setArtist(artist);
    console.log(artist);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="detail-container">
      {artist ? (
        <>
          <h1>{artist.name}</h1>
          <h2>Releases</h2>
          {artist.releases.map((release) => {
            console.log(release);
            return (
              <>
                <p>
                  <strong>{release.title}</strong>, {release.date},{" "}
                  {release.country}
                </p>
                <CoverArt id={release.id}/>
              </>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
