import { useState, useEffect } from 'react'
import './App.css'
import MovieCard from './components/MovieCard.jsx'
import SearchIcon from './search_icon.png'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=ced5e437'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])

  // the search movie function
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    return setMovies(data.Search);
  }

  return (
    <>
      <header>
        <h1 className="title text-center">Movie Land</h1>
        <div className="search">
          <input 
            type="text" 
            placeholder='Search something...' 
            value={searchTerm} 
            onChange={(e) => {setSearchTerm(e.target.value)}} 
          />
          <img 
            src={SearchIcon} 
            alt="search" 
            className="search_icon"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </header>

      <main>
        <div className="movies">
          {
            movies.length === 0 ? 
            <div className='no_result'>Nothing found tho 😒</div>
            :
            movies.map((movie) => {
              return (
                <MovieCard 
                  year={movie.Year} 
                  title={movie.Title}
                  type={movie.Type}
                  poster={movie.Poster}
                />
              )
            } )
          }
        </div>
      </main>
    </>
  )
}

export default App
