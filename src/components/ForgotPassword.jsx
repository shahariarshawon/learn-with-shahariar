import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { auth } from "../Firebase/firebase.init";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const value = e.target.email.value;

    sendPasswordResetEmail(auth, value)
      .then(() => {
        toast.success("Reset email sent!");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-6">
      <div className=" max-w-5xl  bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* RIGHT FORM */}
        <div className="w-full p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Reset Password
          </h2>

          <p className="text-gray-500 text-center mb-8">
            Enter your email and we’ll send you a reset link
          </p>

          <form onSubmit={handleForgotPassword} className="space-y-5">
            {/* EMAIL */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#49bbbd] transition"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#49bbbd] text-white font-semibold hover:opacity-90 transition"
            >
              Send Reset Link
            </button>
          </form>

          {/* BACK TO LOGIN */}
          <p className="text-center text-gray-500 mt-6">
            Remember your password?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#49bbbd] cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
