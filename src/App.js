import { useState, useEffect } from "react";
import './App.css'
import { FiSearch } from 'react-icons/fi'
import MovieCard from "./MovieCard";

// c5c5eabf

const API_URL = 'http://www.omdbapi.com/?apikey=c5c5eabf'

const App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('') 

  const defaultMovie = ['superman', 'avengers', 'batman', 'spiderman', 'iron man', 'naruto']

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies(defaultMovie[Math.floor(Math.random() * 6)])
  }, [])

  return (
    <div className="App">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> 
        <button 
          onClick={() => searchMovies(searchTerm)}
        >
          <FiSearch />
        </button>
      </div>

      {
        movies?.length > 0 
          ? (
              <div className="container">
                <MovieCard movies={movies} />
              </div>
            ) : (
              <div className="empty">
                <h2>No movie found!</h2>
              </div>
            )
      }
      
      
    </div>
  );
}

export default App;
