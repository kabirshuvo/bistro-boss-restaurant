import {
  FaBook,
  FaFirstOrder,
  FaHome,
  FaLandmark,
  FaMedapps,
  FaMemory,
  FaRedRiver,
  FaShoppingCart,
  FaUserAstronaut,
  FaUsers,
  FaUtensils,
  FaWallet
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on data
  // TODO: DONE :)
  // const isAdmin = true;

  const [isAdmin] = useAdmin()


  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            View Tabs
          </label>
        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-purple-700 rounded-lg text-base-content">

{/* Checking admin or not */}
            {isAdmin ? <>
            <li>
              <NavLink to="/dashboard/adminhome">
                <FaLandmark /> ADMIN HOME{" "}
              </NavLink>
            </li> 
            <li>
              <NavLink to="/dashboard/additem">
                <FaUtensils />
                ADD ITEMS
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageitems">
                <FaMedapps />
                MANAGE ITEMS
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/managebookings">
                <FaRedRiver />
                MANAGE BOOKINGS
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allusers">
                <FaUsers />
                ALL USERS
              </NavLink>
            </li>
            
            </> : <>
            <li>
              <NavLink to="/dashboard/home">
                <FaHome /> USER HOME{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservations">
                <FaBook />
                RESERVATION
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/history">
                <FaWallet />
                PAYMENT HISTORY
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mycart">
                <FaShoppingCart />
                My Cart
                <span className="badge ">+{cart?.length || 0}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addreview">
                <FaRedRiver />
                ADD REVIEW
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mybookings">
                <FaMemory />
                MY BOOKING
              </NavLink>
            </li>
            
            </>}
            
            <div className="divider"></div>

            <div className="divider"></div>

            <li>
              <NavLink to="/">
                <FaHome />
                HOME{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <FaUserAstronaut /> D Menus
              </NavLink>
            </li>
            <li>
              <NavLink to="/orders/pizza">
                <FaFirstOrder></FaFirstOrder>D Orders
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
