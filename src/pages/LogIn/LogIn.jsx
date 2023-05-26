import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
    LoadCanvasTemplate,
    loadCaptchaEnginge,
    validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";

const LogIn = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | logIn</title>
      </Helmet>

      <div>
        <h3 className="text-center">Please Log In</h3>

        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>

                  <input
                    ref={captchaRef}
                    type="text"
                    name="captcha"
                    placeholder="Type The Captcha"
                    className="input input-bordered"
                    required
                  />

                  <button
                    onClick={handleValidateCaptcha}
                    className="btn btn-info btn-outline btn-xs mt-4"
                  >
                    Vaidate Now
                  </button>
                </div>
                <div className="form-control mt-6">
                  <input
                    disabled={disable}
                    className="btn btn-primary"
                    type="submit"
                    value="Please LogIn"
                  />
                </div>
              </form>
              <p className="text-center">
                <small>
                  New On this Site?{" "}
                  <Link className="text-warning" to="/signup">
                    Please Register
                  </Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
