import '../App.css'
import { Link } from 'react-router-dom'
export const Card = ({ poster_path, id, overview, title, vote_average,vote_count}) => {
  const image=poster_path? `http://image.tmdb.org/t/p/original${poster_path}`:'./imglogo.jpg'
  return (
    <div>
        <div className="col  h-100">
              <div className="card-img-top " title={title}>
                      <img className='img-film' src={image} />
              </div>
            <div className="card card-shadow-sm " >
                <h2 className=' card-title movie-title'>{title}</h2>
                <p className='movie-overview text-secondary'>{overview}</p>
                <div className='d-flex justify-content-between align-items-center card-footer '>
                    <Link to={`/movie/${id}` }className='btn btn-sm  card-btn  stretched-link   btn-outline-primary'>Show more</Link>
                    <small   className='text-muted foot  '>
                      <i className='bi bi-star-fill me-1 text-warning'/>
                        {vote_average}|{vote_count} 
                    </small>
                 </div>
            </div>
            
        </div>
    </div>
  )
}
