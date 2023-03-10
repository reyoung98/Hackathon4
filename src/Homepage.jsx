import Artist from "./Artist";
import SearchBar from "./SearchBar";

export default function Homepage({ artists, query, setQuery, setArtists }) {
  return (
    <>
      <SearchBar query={query} setQuery={setQuery} setArtists={setArtists} />
      <Artist artists={artists} />
    </>
  );
}
