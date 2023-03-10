import { useEffect, useState } from "react";
import "./ArtistDetail.scss";

export default function CoverArt({ id }) {
  const [imageUrl, setImageUrl] = useState("");
  const [imageError, setImageError] = useState(false);

  const getImage = async () => {
    const response = await fetch(
      `https://coverartarchive.org/release/${id}/front`
    );
    const data = await response;

    console.log(data.url);
    setImageUrl(data.url);
  };

  useEffect(() => {
    getImage();
  }, []);

  //       <img className="release-img" src={imageUrl} />

  const handleError = () => {
    setImageError(ture);
  };

  return (
    <div>
      {imageError ? (
        <p>failed to load</p>
      ) : (
        <img className="release-img" src={imageUrl} onError={handleError} />
      )}
    </div>
  );
}
