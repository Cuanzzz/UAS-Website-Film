// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('URL_API_ANDA')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="container-fluid">
      
      <Navbar/>

      <div className="row mt-3">
        {movies.map(movie => (
          <div className="col-md-4" key={movie.id}>
            <div className="card">
              <img src={movie.poster_path} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
