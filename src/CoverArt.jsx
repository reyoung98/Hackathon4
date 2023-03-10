import { useEffect, useState } from "react";
import "./ArtistDetail.scss";
import defaultImage from '/default-image.jpg';

export default function CoverArt({ id }) {


    // <img className="release-img" src={imageUrl} />

    //   const handleError = () => {
    //     setImageError(ture);
    //   };

    //   return (
    //     <div>
    //       {imageError ? (
    //         <p>failed to load</p>
    //       ) : (
    //         <img className="release-img" src={imageUrl} onError={handleError} />
    //       )}
    //     </div>
    //   );
    // }

    return (
        <img className="release-img" src={`https://coverartarchive.org/release/${id}/front`}
            alt=""
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultImage;
            }}
        />
    )
}

    // The below is unnecessary - fetch not needed here, just put URL in image src

    // const [imageUrl, setImageUrl] = useState('')

    // const getImage = async () => {
    //     const response = await fetch(`https://coverartarchive.org/release/${id}/front`)
    //     const data = await response;

    //     console.log(data.url)
    //     setImageUrl(data.url)
    // }

    // useEffect(()=> {
    //     getImage()
    // }, [])
