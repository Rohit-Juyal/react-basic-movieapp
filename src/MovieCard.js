import React from 'react'

const MovieCard = ({ movies }) => {
  return (
    <div className='movies'>
    {
        movies.map(movie => (
            
             <div className='movie' key={movie.imdbID}>
                <div className='year'>
                    <p>{movie.Year}</p>
                </div>
                <div>
                    <img src={movie.Poster} alt='movie-image' />
                </div>
                <div className='title'>
                    <span>{movie.Type}</span>
                    <h4>{movie.Title}</h4>
                </div>
             </div>
            
        ))
    }
    </div>
  )
}

export default MovieCard