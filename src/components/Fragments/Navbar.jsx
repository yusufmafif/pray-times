// import { NavLink, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from "react-redux";
// import { LogOut, reset } from "../../features/authSlice";
// import Cookies from 'js-cookie';

export const Navbar = () => {
//   const navigate = useNavigate()
    // const dispatch = useDispatch()

    // const { user } = useSelector((state) => state.auth)

const logout = () => {
//   Cookies.remove("token")
//   dispatch(LogOut())
//   dispatch(reset())
//   navigate("/")
}

  return (
    <div className="mb-9"><nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* <NavLink to={"/dashboard"} className="navbar-item" href="https://bulma.io"> */}
         <h1 className="text-white">Pray Times</h1>
        {/* </NavLink> */}
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {/* <button className="bg-white" onClick={logout}>
                Log out
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </nav></div>
  )
}

export default Navbar