import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import MovieList from './components/MovieList/MovieList'
import { action, originals, romance, horror, comedy, documentaries } from './urls';


const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <MovieList title='Netflix Orginals' url={originals} />
      <MovieList title='Action' url={action} isSmall />
      <MovieList title='Comedy' url={comedy} isSmall />
      <MovieList title='Romance' url={romance} isSmall />
      <MovieList title='Horror' url={horror} isSmall />
      <MovieList title='Documentaries' url={documentaries} isSmall/>
      
    </div>
  )
}

export default App
