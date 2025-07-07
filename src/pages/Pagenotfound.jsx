import errorimg from '../assets/error.jpg'
import '../App.css'
import { Link } from 'react-router-dom'
export const Pagenotfound = () => {
  return (
    <div className="container d-flex align-items-center flex-column justify-content-center">
      <img  className='img-fluid pagenotfound 'src={errorimg} />
      <Link to='/' className='btn btn-sm btn-pagenotfound bg-danger text-white'>Go To HomePage</Link>
    </div>
  )
}
