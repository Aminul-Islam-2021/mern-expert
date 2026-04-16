import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import LearnHooks from "../pages/LearnHooks";
import UploadForm from "../pages/UploadForm";
import DBLayout from "../dashboard/dbLayout/DBLayout";
import Dashboard from "../dashboard/dbPages/Dashboard";
import DBProducts from "../dashboard/dbPages/DBProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/learn-hooks",
        element: <LearnHooks />,
      },
      {
        path: "/uploads",
        element: <UploadForm />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DBLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "db-products",
        element: <DBProducts />,
      },
    ],
  },
]);
