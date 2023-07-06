import { NavLink,Link, Outlet } from "react-router-dom"
import { BiLogIn,BiUser} from "react-icons/bi";
const Header = () => {
  return (
    <>
      <nav className="navbar sticky-top bg-dark navbar-expand-md" data-bs-theme="dark" style={{ zIndex:"1035" }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fs-6 initialism">Exam Quiz</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav Home-nav-list">
              <NavLink className="nav-link mx-1" to="/">Home</NavLink>
              <NavLink className="nav-link mx-1" to="/service">Services</NavLink>
              <NavLink className="nav-link mx-1" to="/about">About</NavLink>
              <NavLink className="nav-link mx-1" to="/contact">Contact</NavLink>
              <span className="mx-3"></span>
              <Link className="btn btn-sm btn-outline-light mx-1" to="/signup">SignUp<span><BiUser/></span></Link>
              <Link className="btn btn-sm btn-outline-light mx-1" to="/login">Login<span><BiLogIn/></span></Link>
            </div>
          </div>
        </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Header