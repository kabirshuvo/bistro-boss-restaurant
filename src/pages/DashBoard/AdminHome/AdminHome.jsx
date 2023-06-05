import { FaHospitalSymbol } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div className="w-full m-4">
      <h3 className="text-3xl">
        Welcome Back {user.displayName} <FaHospitalSymbol />
      </h3>
    </div>
  );
};

export default AdminHome;
