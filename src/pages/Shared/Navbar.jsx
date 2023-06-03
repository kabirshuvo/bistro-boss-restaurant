import { useContext } from "react";
import { FaBeer, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/menu">D Menus</Link>
      </li>

      <li>
        <Link to="/orders/pizza">D Orders</Link>
      </li>

      <li>
        <Link to="/dashboard/mycart">
          <button className="btn gap-2">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
        
        {user ? (
          <>
            <button onClick={handleLogout} className="btn btn-ghost">
              LogOut
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">LogIn</Link>
            </li>
          </>
        )}
        
     
    
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-40 max-w-screen-xl bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <span className="px-1 text-purple-400">Bistro</span>{" "}
            <FaBeer className="text-purple-400"></FaBeer>{" "}
            <span className="px-1 text-purple-400">Boss</span>{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <Link to='/dashboard/payment' className="btn">instant *|* Payment</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
