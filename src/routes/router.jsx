import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Orders from "../pages/Orders/Orders/Orders";

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
        }
      ]
    },
  ]);




export default router;