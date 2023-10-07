import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className=" block w-full  rounded-xl border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 ">
        <div>
          <div className="container mx-auto flex items-center justify-between text-gray-900">
            <Link>
              <img src={logo} alt="" className="w-36 h-16" />
            </Link>
            <ul className="items-center gap-6 lg:flex">
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
                  to="/manager-tools"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Manager Tools
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/suppliers"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Suppliers
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
            <button
              className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
              type="button"
              data-ripple-light="true"
            >
              <span>Login</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
