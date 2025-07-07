import { NavLink, useNavigate } from "react-router-dom"
export const Header = () => {
  const navigator=useNavigate()
  const Handler=(e)=>{
    e.preventDefault();
    const queryTerm=e.target.search.value
    e.target.reset()
    return  (navigator(`/search?q=${queryTerm}`))
  }
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-primary navbar-dark ">
        <div className="container-fluid " >
          <a href="#"  className="nav-brand text-white me-3 d-flex align-items-center">
            <i className="bi bi-camera-reels me-2"></i>MovieHunt
          </a>
          <button type='button' className="navbar-toggler toggler m-3 fs-1"  data-bs-target='#menu' data-bs-toggle="collapse">
              <span className="navbar-toggler-icon toggler-icon"></span>
          </button>
          <div className="collapse  navbar-collapse d-md-flex justify-content-between" id='menu' >
            <ul className="navbar-nav">
              <li className="nav-item">
                  <NavLink className='nav-link' to='/' >Home</NavLink>
              </li>
              <li>
                  <NavLink className='nav-link' to='/movie/toprated' >Top Rated</NavLink>
              </li>
              <li>
                  <NavLink className='nav-link' to='/movie/popular' >Popular</NavLink>
              </li>
              <li>
                  <NavLink className='nav-link' to='/movie/upcoming' >Upcoming</NavLink>
              </li>
            </ul>
            <form onSubmit={Handler}>
              <input type="search" name="search" className="form-control form-control-sm " placeholder="Search for movies" />
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
