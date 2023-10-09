import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { ScrollRestoration } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="mx-auto max-w-screen-xl font-sans">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster/>
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
