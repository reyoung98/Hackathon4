import { useEffect, useState } from "react";
// import "./Searchbar.scss";

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
    if (result !== "") {
      setQuery(result);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <div className="search-container">
      <input
        className="searchBox"
        type="text"
        onChange={handleInput}
        placeholder="Search for an artist..."
      />
    </div>
  );
}
