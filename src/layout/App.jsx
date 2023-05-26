import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

function App() {
  const location = useLocation();
  // console.log(location);
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup")
  return (
    <>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </>
  );
}

export default App;
