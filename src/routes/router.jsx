import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import DashBoard from "../layout/DashBoard";
import AddItems from "../pages/DashBoard/AddItems/AddItems";
import AdminHome from "../pages/DashBoard/AdminHome/AdminHome";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import ManageBookings from "../pages/DashBoard/ManageBookings/ManageBookings";
import ManageItems from "../pages/DashBoard/ManageItems/ManageItems";
import MyCart from "../pages/DashBoard/MyCart";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Menu from "../pages/Menu/Menu/Menu";
import Orders from "../pages/Orders/Orders/Orders";
import Secret from "../pages/Shared/Secret";
import SignUp from "../pages/signUp/signUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/DashBoard/Payment/Payment";

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
          path: 'adminhome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },

        {
          path: 'payment',
          element: <Payment></Payment>
        },

        // Admin Routes : 
        {
          path: 'additem',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'manageitems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'managebookings',
          element: <ManageBookings></ManageBookings>
        },
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>
        },
      ]
    }
  ]);




export default router;