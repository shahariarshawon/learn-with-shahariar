import React, { useState } from "react";
import loginImage from "../assets/login.jfif";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useAuth();
  // login function
  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result);
        toast.success("Login Successfull");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Login Failed");
      });
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center bg-base-200 min-h-screen px-6 ">
      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl w-full  bg-white md:p-10 rounded-2xl shadow-lg">
        {/* LEFT IMAGE */}
        <div className="hidden lg:block w-3/4">
          <img
            src={loginImage}
            alt="login"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full p-5 lg:w-1/2">
          <h1 className="text-4xl font-bold text-center mb-6">Welcome Back!</h1>

          {/* TOGGLE */}
          <div className="relative flex bg-[#75e0e1] rounded-full p-1 mb-8">
            <Link
              to="/login"
              className="flex-1 text-center z-10 text-white bg-[#3ba3a4] rounded-4xl py-2 font-medium"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="flex-1 text-center z-10 text-white py-2 font-medium"
            >
              Sign Up
            </Link>
          </div>

          <p className="text-gray-500 text-center mb-8">
            An learning platform for the upcoming developers
          </p>

          {/* login form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* email address */}
            <div className="mb-5">
              <h3 className="mb-2 font-medium">Email Address</h3>

              <input
                type="email"
                name="email"
                id="email"
                required
                {...register("email", { required: true })}
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#49bbbd]"
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-5 relative">
              <h3 className="mb-2 font-medium">Password</h3>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                required
                {...register("password", { required: true, minLength: 6 })}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:border-[#49bbbd]"
              />

              {/* SHOW BUTTON */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-12 text-sm text-gray-500 hover:text-[#49bbbd] hover:cursor-pointer"
              >
                {showPassword ? <FiEyeOff></FiEyeOff> : <FiEye></FiEye>}
              </button>

              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm">
                  Password must be 6 characters long
                </p>
              )}
            </div>

            {/* REMEMBER */}
            <div className="flex justify-between items-center mb-6 text-sm">
              <p className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </p>

              <p className="text-[#49bbbd] cursor-pointer hover:underline">
                Forgot Password?
              </p>
            </div>

            {/* BUTTON */}
            <button className="w-full py-3 rounded-lg bg-[#49bbbd] text-white font-semibold hover:opacity-90 transition hover:cursor-pointer">
              Login
            </button>
          </form>

          {/* not having an account option */}
          <p className="text-center text-gray-500 pt-2">
            Don't have an account?{" "}
            <Link className="text-primary" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
