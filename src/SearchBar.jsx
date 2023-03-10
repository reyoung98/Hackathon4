import { useEffect, useState } from "react";

export default function SearchBar({ query, setQuery, setArtists }) {
  const fetchData = async () => {
    const response = await fetch(
      `http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json`
    );

    const data = await response.json();

    setArtists(data.artists);
    console.log(data.artists);
  };

  const handleInput = (event) => {
    const result = event.target.value;
    setQuery(result);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return <input type="text" onChange={handleInput} />;
}
