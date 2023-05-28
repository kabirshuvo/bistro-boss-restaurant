import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import DashBoard from "../layout/DashBoard";
import MyCart from "../pages/DashBoard/MyCart";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Menu from "../pages/Menu/Menu/Menu";
import Orders from "../pages/Orders/Orders/Orders";
import Secret from "../pages/Shared/Secret";
import SignUp from "../pages/signUp/signUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'orders',
          element: <Orders></Orders>
        },
        {
          path: 'orders/:category',
          element: <Orders></Orders>
        },
        {
          path: 'LogIn',
          element: <LogIn></LogIn>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        }
      ]
    }
  ]);




export default router;