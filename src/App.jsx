import { useState } from "react";
import "./App.scss";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import ArtistDetail from "./ArtistDetail";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [artists, setArtists] = useState([]);
  const [query, setQuery] = useState("band");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/"
            element={<Homepage artists={artists}
              query={query}
              setQuery={setQuery}
              setArtists={setArtists} />} />
          <Route path={`/artist/:id`}
            element={<ArtistDetail />} >
          </Route>


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
