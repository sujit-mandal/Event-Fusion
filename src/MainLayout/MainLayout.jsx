import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="mx-auto max-w-screen-xl font-sans">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster/>
    </div>
  );
};

export default MainLayout;
