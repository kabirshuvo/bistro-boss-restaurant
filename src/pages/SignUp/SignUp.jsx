import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
const {createUser} = useContext(AuthContext)


  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
    })
    .catch(error => console.error(error))
  };

  console.log(watch("example"));

  return (
    <>
    <Helmet>
        <title>Bistro Boss | signUp</title>
    </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp</h1>
            <p className="py-6">
              Become a Valid customer of Bistro Boss and Get Super Duper and
              Bumper Offers on every week-end.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Your Name Please"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-warning">
                    Name Field Cannot be Empty
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Your email please"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-warning">
                    Without Email Registration is not possible
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", { required: true, minLength: 6 })}
                  placeholder="Type Yur Password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-warning">
                    Password should be at least 6 (six) carecthers
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="signUp"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
