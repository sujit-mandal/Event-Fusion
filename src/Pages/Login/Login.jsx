import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="mt-5 h-[75vh]">
      <div className="w-full mx-auto mt-20 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <h1 className="text-center bg-primary-color py-4 w-full text-white rounded-lg text-2xl font-semibold text-primary-text">
          Login your account
        </h1>
        <hr className="m-4" />
        <form onSubmit={handleLoginUser} className="space-y-2">
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#fa6aa6] focus:border-[#fa6aa6] block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              name="password"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#fa6aa6] focus:border-[#fa6aa6] block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#fa6aa6] "
                />
              </div>
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remember Me
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm text-primary-color hover:underline"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-primary-color hover:bg-[#f24990] focus:ring-4 focus:outline-none focus:ring-[#fa6aa6] font-medium rounded-lg text-sm px-5 py-2.5 text-center0"
          >
            Login
          </button>
          <div className="text-sm font-medium text-gray-500">
            Not registered?
            <Link
              to={"/register"}
              className="text-primary-color ml-2 hover:underline"
            >
              Register your account.
            </Link>
          </div>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
