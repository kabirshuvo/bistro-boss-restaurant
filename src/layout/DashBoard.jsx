import {
  FaBook,
  FaFirstOrder,
  FaHome,
  FaMemory,
  FaRedRiver,
  FaShoppingCart,
  FaUserAstronaut,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
const DashBoard = () => {
  const [ cart ] = useCart();
//   console.log(cart)
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
            {/* <!-- Sidebar content here --> */}
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
            <li>
              <NavLink to="/dashboard/history">
                <FaWallet />
                PAYMENT HISTORY
              </NavLink>
            </li>

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
