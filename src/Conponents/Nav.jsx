import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Nav = () => {
  const { user, userLogout } = useContext(AuthContext);
  // console.log(user);
  const handleLogout = () => {
    userLogout()
      .then(() => {
        console.log("successfully logOut!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allTourist">All Tourists Spot</NavLink>
            </li>
            <li>
              <NavLink to="/addTourist">Add Tourists Spot</NavLink>
            </li>
            <li>
              <NavLink to="/myCart">My List</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl ">World Explore</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allTourist">All Tourists Spot</NavLink>
          </li>
          <li>
            <NavLink to="/addTourist">Add Tourists Spot</NavLink>
          </li>
          <li>
            <NavLink to="/myCart">My List</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <div>
          <div className="w-12 h-12 rounded-full bg-red-700 mr-3 relative">
            <div className="absolute w-4 h-4 rounded-full bg-green-700 right-0 -top-1"></div>
          </div>
        </div> */}
        <div className="flex gap-4">
          <div>
            {user ? (
              <>
                <div className="flex gap-3">
                  <div title={user.displayName}>
                    <img
                      className="w-12 h-12 rounded-full border-2 border-gray-500"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline btn-md btn-primary"
                  >
                    Log Out
                  </button>
                </div>
              </>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline btn-md btn-primary">
                  Login
                </button>
              </Link>
            )}
          </div>
          <div className="hidden lg:block">
            <Link to="/register">
              <button className="btn btn-outline btn-success">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
