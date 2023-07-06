import { NavLink,Link, Outlet } from "react-router-dom"
import { BiLogIn,BiUser} from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
const Header = () => {
  const { user,isAuthenticated,logout } = useContext(AuthContext);
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
              {user.Role === "Admin" ?
                <NavLink className="nav-link mx-1" to="/medicine">Medicine</NavLink>
                :
                <NavLink className="nav-link mx-1" to="/shopping">Shopping</NavLink>
              }
              <NavLink className="nav-link mx-1" to="/orders">Orders</NavLink>
              <NavLink className="nav-link mx-1" to="/profile">Profile</NavLink>

              <span className="mx-3"></span>
              {!isAuthenticated ?
                <>
                  <Link className="btn btn-sm btn-outline-light mx-1" to="/signup">SignUp<span><BiUser /></span></Link>
                  <Link className="btn btn-sm btn-outline-light mx-1" to="/login">Login<span><BiLogIn/></span></Link>
                </>
                :
                  (<button className="btn btn-sm btn-outline-light mx-1" onClick={()=>logout()}>Logout</button>)

              }
            </div>
          </div>
        </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Header
