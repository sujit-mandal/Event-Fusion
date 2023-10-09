import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer className="flex w-full flex-col md:flex-row md:px-5 flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
        <p className="font-sans text-xl font-normal text-gray-900 ">
          © 2023 Event Fusion
        </p>
        <div className="text-3xl flex items-center gap-4">
          <FaFacebook></FaFacebook>
          <AiFillGithub></AiFillGithub>
          <AiFillYoutube></AiFillYoutube>
        </div>
        <ul className="flex flex-col lg:flex-row flex-wrap items-center md:items-start gap-y-2 gap-x-8">
          <li>
            <Link
              to={"/about"}
              className=" font-sans text-base font-normal  hover:text-pink-500 focus:text-pink-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to={"/contact-us"}
              className=" font-sans text-base font-normal  hover:text-pink-500 focus:text-pink-500"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
