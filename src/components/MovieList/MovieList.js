import React, { useState,useEffect } from 'react'
import './movielist.css'
import axios from '../../axios'
import { imgUrl,API_KEY } from '../../constants/constants'
import YouTube from 'react-youtube';



function MovieList(props) {

  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState();

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results)
      setMovies(response.data.results)
    })
    
  }, [])


  const handleMovieClick = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0]);
      }
    })
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
      <section className="movie-list-container">
      <h2>{props.title}</h2>
      <div className="movie-list">
        {movies.map((movie)=>{
         return  <img src={`${imgUrl+ movie.backdrop_path}`} alt="movie-poster" className={`${props.isSmall ? 'movie-small' : 'movie'}`} onClick={()=>handleMovieClick(movie.id)}/>
        })}            
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </section>
  )
}

export default MovieList
