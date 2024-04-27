import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext)
  const [registerError, setRegisterError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email,password)
    .then(result =>{
        console.log(result.user)
    })
    .catch(error =>{
        console.log(error.message)
        setRegisterError(error.message)
    })
  };
  return (
    <div className="lg:max-w-lg mx-auto mb-9 mt-10  border-solid border-2 border-indigo-600 p-8 rounded-xl w-11/12">
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <p className="text-lg font-bold">Email</p>
          <input
            type="text"
            name="email"
            required
            placeholder="Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="relative">
          <p className="text-lg font-bold">Password</p>
          <input
            type={showPass ? "text" : "password"}
            name="password"
            required
            placeholder="password"
            className="input input-bordered w-full"
          />
          <span
            className="absolute top-[42px] right-3 text-xl"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {registerError && <p className="text-red-600">{registerError}</p>}
        <div className="">
          <button className="btn btn-outline  text-lg font-semibold btn-accent w-full mt-5">
            Login
          </button>
        </div>
        <div className="">
          <p className="my-6">
            Do not have account,Please?
            <Link
              to="/register"
              className="link text-lg font-bold link-primary"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
