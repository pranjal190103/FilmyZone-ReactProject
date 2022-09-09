import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from "./search.svg";
import {MovieCard} from "./MovieCard";
// API KEY ---- 4857cdc1

const API_URL = 'https://www.omdbapi.com?apiKey=4857cdc1';

// const MOVIE1 = {
//     "Title": "Amazing Spiderman Syndrome",
//     "Year": "2012",
//     "imdbID": "tt2586634",
//     "Type": "movie",
//     "Poster": "N/A"
// }

export const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      searchMovies("Superman");
    }, []);
  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
  
      setMovies(data.Search);
    };
    console.log("Movies...",movies)
  
    return (
      <div className="app">
        <h1>FilmyZone</h1>
  
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for your favourites"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      
        {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    );
  };
