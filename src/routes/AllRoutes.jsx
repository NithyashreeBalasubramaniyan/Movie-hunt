import React from 'react'
import { MoviesList } from '../pages/MoviesList'
import { Route ,Routes} from 'react-router-dom'
import {MoviesDetail} from '../pages/MoviesDetail'
import {Pagenotfound} from '../pages/Pagenotfound'
import {Search} from '../pages/Search'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<MoviesList title='your guide to great movies' apipath="movie/now_playing" />} />
            <Route path='/movie/toprated' element={<MoviesList title='Top Rated movies are here' apipath='movie/top_rated' />}/>
            <Route path='/movie/popular' element={<MoviesList title='Popular movies are here' apipath='movie/popular' />}/>
            <Route path='/movie/upcoming' element={<MoviesList title='upcoming movies are here' apipath='movie/upcoming'/>}/>
            <Route path='/movie/:id' element={<MoviesDetail />} />
            <Route path='/search' element={<Search apipath='search/movie' />}/>
            <Route path='*' element={<Pagenotfound />}/>
        </Routes>
    </div>
  )
}
