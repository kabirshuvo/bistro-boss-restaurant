import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Menu from "../pages/Menu/Menu/Menu";
import Orders from "../pages/Orders/Orders/Orders";
import SignUp from "../pages/signUp/signUp";

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
        }
      ]
    },
  ]);




export default router;