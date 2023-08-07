import React, { useEffect,useState } from 'react'
import './banner.css';
import { API_KEY, imgUrl } from '../../constants/constants';
import axios from '../../axios';



const Banner = () => {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(`trending/movie/day?api_key=${API_KEY}&&language=en-US`).then((response) => {
      setMovie(response.data.results[0]);
      
    })
    
  }, [])
  
  return (
   
      <>
    <div className='banner' style={{backgroundImage: `url(${movie ? imgUrl+movie.backdrop_path:''})`}}>
          <div className="banner-content">
              <h1 className="title">{movie ? movie.title : ""}</h1>
            <p className="description">{movie ? movie.overview: ""}.......</p>
              <div className="btn-container">
                  <button className='btn'>play</button>
                  <button className='btn'>more info</button>
              </div>
              
                </div>
                <div className="bottom-overlay"></div>
      </div>
           
            </>
  )
}

export default Banner
