import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Events from "../Pages/Events/Events";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
        element: (
          <PrivateRoute>
            <Events />
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery",
        element: (
          <PrivateRoute>
            <Gallery />
          </PrivateRoute>
        ),
      },
      {
        path: "/service-details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default myCreatedRoute;
