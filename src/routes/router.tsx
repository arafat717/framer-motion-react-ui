import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import About from "../page/About";
import AdminLayout from "../Layouts/AdminLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <h1>admin dashboard for better service</h1>,
      },
      {
        path: "/admin/add-admin",
        element: <h1>admin add</h1>,
      },
    ],
  },
]);
