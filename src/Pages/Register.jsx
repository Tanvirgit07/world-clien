import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "sonner";

const Register = () => {
  const { createUser,updateUserProfile,setUser,setReload } = useContext(AuthContext);
  const navigate = useNavigate()
  const [registerError,setRegisterError] = useState('')
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);
    setRegisterError('')

    //create user
    createUser(email,password)
    .then(result => {
        console.log(result.user)
        updateUserProfile(name, photo).then(() => {
          setUser(result.user);
          setReload(true)
          toast.success('Register Successfully!')
          setTimeout(() =>{
            navigate('/')
          },2000)
        });
    })
    .catch(error =>{
        console.log(error.message)
        setRegisterError(error.message)
    })
  };
  return (
    <div className="mb-11">
      <form
        onSubmit={handleRegister}
        className="lg:max-w-lg w-11/12 mx-auto mt-5 border-solid border-2 border-indigo-600 p-8 rounded-xl space-y-4"
      >
        <div>
          <p className="text-lg font-bold">Name</p>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p className="text-lg font-bold">Email</p>
          <input
            type="text"
            name="email"
            placeholder="email"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p className="text-lg font-bold">photoURL</p>
          <input
            type="text"
            name="photo"
            placeholder="PhotoURL"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p className="text-lg font-bold">password</p>
          <input
            type=""
            name="password"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        {
          registerError && <p className="text-red-600">{registerError}</p>
        }
        <div>
          <button className="btn text-lg font-semibold btn-outline btn-accent mt-5 w-full">
            Register
          </button>
        </div>
        <div>
          <p>
            Do have account,Please?
            <Link to="/login" className="text-lg font-bold link link-primary">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
