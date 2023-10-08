import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully.");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div>
      <nav className=" block w-full rounded-xl border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 ">
        <div>
          <div className="container space-y-4 md:space-y-0 mx-auto flex flex-col md:flex-row items-center justify-between text-gray-900">
            <Link>
              <img src={logo} alt="" className="w-36 h-16" />
            </Link>
            <ul className="items-center gap-6 flex">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  About Us
                </NavLink>
              </li>
            </ul>

            <div className="flex items-center">
              {user && (
                <div className="flex items-center">
                  <p className=" border-[1px] border-primary-color px-2 py-1 rounded-lg mr-2">
                    {user?.displayName}
                  </p>
                  <img
                    className="w-10 h-10 rounded-full mr-2"
                    src={user?.photoURL}
                    alt="user photo"
                  />
                </div>
              )}

              {user ? (
                <button
                  onClick={() => handleLogOut()}
                  className="middle none center rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                  type="button"
                  data-ripple-light="true"
                >
                  <span>Logout</span>
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="middle none center mb-4 md:mb-0 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                  type="button"
                  data-ripple-light="true"
                >
                  <span>Login</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
