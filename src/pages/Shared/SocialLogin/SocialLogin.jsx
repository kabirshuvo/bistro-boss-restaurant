import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGooleSignIn = () => {
    googleSignIn()
    .then((result) => {
      const loggedUser = result.user;
      const saveUser = {name: loggedUser.displayName, email: loggedUser.email}

      console.log(loggedUser);
      fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
              'content-type':'application/json'
            },
            body: JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then(() => {
              navigate(from, { replace: true });
              
              
            });
      
    })
    .catch((error) => {
      // Handle any error that occurred during sign-in
      console.error(error);
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="divider"></div>
      <button
        onClick={handleGooleSignIn}
        className="btn btn-circle btn-outline"
      >
        <FaGoogle></FaGoogle>
      </button>
      <div className="divider"></div>
    </div>
  );
};

export default SocialLogin;
