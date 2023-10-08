import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Events from "../Pages/Events/Events";
import Gallery from "../Pages/Gallery/Gallery";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path:'/gallery',
        element: <Gallery />,
      },
      {
        path: "/service-details/:id",
        element: <ServiceDetails />,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);

export default myCreatedRoute;
