import { NavLink } from 'react-router-dom'
// import { useDispatch, useSelector } from "react-redux";
// import { LogOut, reset } from "../../features/authSlice";
// import Cookies from 'js-cookie';

export const Navbar = () => {
  //   const navigate = useNavigate()
  // const dispatch = useDispatch()

  // const { user } = useSelector((state) => state.auth)

  // const logout = () => {
    //   Cookies.remove("token")
    //   dispatch(LogOut())
    //   dispatch(reset())
    //   navigate("/")
  // }

  return (
    <div className="mb-9 flex justify-center gap-5">
      <NavLink
        to={"/"}
        style={{ display: 'flex', alignItems: 'center', gap: '2%' }}
        className={({ isActive }) =>
          isActive
            ? 'text-gray-500  hover:text-gray-500'
            : 'bg-transparent text-gray-100 hover:text-gray-500'
        }
      >
        <div className='text-md'>Home</div>
      </NavLink>

      <NavLink
        to={"/Generate"}
        style={{ display: 'flex', alignItems: 'center', gap: '2%' }}
        className={({ isActive }) =>
          isActive
            ? 'text-gray-500  hover:text-gray-500'
            : 'bg-transparent text-gray-100 hover:text-gray-500'
        }
      >
        <div className='text-md'>Generate</div>
      </NavLink>

      <NavLink
        to={"/support"}
        style={{ display: 'flex', alignItems: 'center', gap: '2%' }}
        className={({ isActive }) =>
          isActive
            ? 'text-gray-500  hover:text-gray-500'
            : 'bg-transparent text-gray-100 hover:text-gray-500'
        }
      >
        <div className='text-md'>Support</div>
      </NavLink>
    </div>

  )
}

export default Navbar