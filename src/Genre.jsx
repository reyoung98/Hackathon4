import { useState, useEffect } from "react";



export const Genre = ({ id }) => {
    const [genres, setGenres] = useState([]);

    const fetchData = async () => {
        const response =
            await fetch(`https://musicbrainz.org/ws/2/artist/${id}?inc=genres&fmt=json`);
        const data = await response.json();
        console.log(data);
        setGenres(data.genres);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            { genres && (
                <div className="genre-container">{genres.map((genre) => {
                    return <div className="genre">{genre.name}</div>
                })}
                </div>
            ) }
        </div>
    )
}

export default Genre
