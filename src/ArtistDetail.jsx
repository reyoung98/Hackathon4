import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArtistDetail.scss";
import CoverArt from "./CoverArt";

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
        <div className="detail-info">
          <h1 className="title">{artist.name}</h1>
          <div className="releases">
            <h1 className="title-releases">Releases</h1>
            {artist.releases.map((release) => {
              console.log(release);
              return (
                <div className="info-container">
                  <h2>{release.title}</h2>
                  <p>
                    Release date: {release.date}, {release.country}
                  </p>
                  <CoverArt id={release.id} /> <br></br>
                  <hr></hr>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
