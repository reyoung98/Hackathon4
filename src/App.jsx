import { useState } from "react";
import "./App.css";
import Homepage from "./Homepage";

function App() {
  const [artists, setArtists] = useState([]);
  const [query, setQuery] = useState("band");

  return (
    <div className="App">
      <Homepage
        artists={artists}
        query={query}
        setQuery={setQuery}
        setArtists={setArtists}
      />
    </div>
  );
}

export default App;
