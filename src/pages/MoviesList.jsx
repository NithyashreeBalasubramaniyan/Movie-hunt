import { useEffect } from "react"
import {Fetch} from '../config/Fetch'
import { Card } from "../components/Card"
export const MoviesList = ({title,apipath}) => {
  const match="your guide to great movies"
  const {data:movies}=Fetch(apipath)
  useEffect(()=>{
    document.title=title
  })


  return (
    <>
          {title === 'your guide to great movies' ? (
         <div className='d-flex flex-column  container mt-2 border-opacity-2 pt-md-4 pt-3 bg-body-secondary p-3'>
            <h2 className="welcommer">Welcome to MovieHunt </h2>
            <p className=" lead ">Your ultimate destination to discover and hunt down the best movies and shows. Dive into the world of entertainment
             </p>
            <button className="bg-primary explorer text-white p-2">Explore Now</button>
          </div>  ) : null}
          <h2 className="text-danger titlebar">{title}</h2>
          <div className="container ">
          <div className="row container  justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2 ">
              {movies.map((movie) => (
                  <Card key={movie.id} {...movie} />
                ))}
          </div>
          </div>
          
    </>
  )
}
