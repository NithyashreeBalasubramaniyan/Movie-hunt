import React, { useEffect,useState } from 'react'
import {  useParams } from 'react-router-dom'
import imglogo from '../assets/imglogo.jpg'
export const MoviesDetail = () => {

  const params=useParams()
  const [movie,setMovie]=useState([])
  const key='83498be9aef4cdc05b538b6b32f7c72c'
  const url=`https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
  useEffect(()=>{
              async function fetchMovies(){
                  const res = await fetch(url);
                  const json = await res.json();
                  setMovie(json);
              }
              fetchMovies()
    },[url,params.id])
    console.log(movie)
    const image=movie.poster_path? `http://image.tmdb.org/t/p/original${movie.poster_path}`:imglogo

  return (
    <div>
      
      <main className='container mt-5 d-md-flex gap-3'>
        <div className="col-md-4">
          <img className='img-fluid img-thumbnail' src={image}/>
        </div>
        <div className="col-md-8">
          <h2 className='text-primary col-title'>{movie.title}</h2>
          <p className='text-secondary'>{movie.overview}</p>
          {movie.genres?movie.genres.map((m)=>(
             <span className='badge bg-danger p-2 text-white  me-2 mb-4' key={m.id}>{m.name}</span>
          )):""}
          <div>
          <small>
            <i className='bi bi-star-fill text-warning fs-4 me-2' />{movie.vote_average}|<i className='bi fs-4 bi-people-fill text-success me-2 ms-2'/>{movie.vote_count}{""}reviews
          </small>
          </div>
         
          <table className='table table-border mt-4'>
            <tbody>
              <tr>
                  <th>Runtime</th>
                  <td>{movie.runtime}</td>
              </tr>
              <tr>
                  <th>Release Date</th>
                  <td>{movie.release_date}</td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td>{movie.revenue}</td>
              </tr>
              <tr>
              <th>Budget</th>
              <td>{movie.budget}</td>
              </tr>
        
            </tbody>
          </table>
          <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" className='btn p-2  mt-3  text-white bg-success' >View in IMDB</a>
        </div>
      </main>
    </div>
  )
}

