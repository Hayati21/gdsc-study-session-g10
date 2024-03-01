import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SignIn = () => {
  // ============= Initial State Start here =============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ============= Event Handler End here ===============
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Enter your email");
    }

    if (!password) {
      setErrPassword("Create a password");
    }
    // ============== Getting the value ==============
    if (email && password) {
      setSuccessMsg(
        `Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
      );
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="hidden w-1/2 h-full text-white lgl:inline-flex">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="text-xl font-medium font-titleFont">
              Stay sign in for more
            </h1>
            <p className="text-base">When you sign in, you are with us!</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="mt-1 text-green-500">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="font-semibold text-white font-titleFont">
                Get started fast with OREBI
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="mt-1 text-green-500">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="font-semibold text-white font-titleFont">
                Access all OREBI services
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="mt-1 text-green-500">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="font-semibold text-white font-titleFont">
                Trusted by online Shoppers
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <Link to="/">
              <p className="text-sm font-semibold text-gray-300 duration-300 cursor-pointer font-titleFont hover:text-white">
                © OREBI
              </p>
            </Link>
            <p className="text-sm font-semibold text-gray-300 duration-300 cursor-pointer font-titleFont hover:text-white">
              Terms
            </p>
            <p className="text-sm font-semibold text-gray-300 duration-300 cursor-pointer font-titleFont hover:text-white">
              Privacy
            </p>
            <p className="text-sm font-semibold text-gray-300 duration-300 cursor-pointer font-titleFont hover:text-white">
              Security
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full lgl:w-1/2">
        {successMsg ? (
          <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
            <p className="w-full px-4 py-10 font-medium text-green-500 font-titleFont">
              {successMsg}
            </p>
            <Link to="/signup">
              <button
                className="w-full h-10 text-base font-semibold tracking-wide text-gray-200 duration-300 rounded-md bg-primeColor font-titleFont hover:bg-black hover:text-white"
              >
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
                Sign in
              </h1>
              <div className="flex flex-col gap-3">
                {/* Email */}
                <div className="flex flex-col gap-.5">
                  <p className="text-base font-semibold text-gray-600 font-titleFont">
                    Work Email
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="email"
                    placeholder="john@workemail.com"
                  />
                  {errEmail && (
                    <p className="px-4 text-sm font-semibold text-red-500 font-titleFont">
                      <span className="mr-1 italic font-bold">!</span>
                      {errEmail}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-.5">
                  <p className="text-base font-semibold text-gray-600 font-titleFont">
                    Password
                  </p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Create password"
                  />
                  {errPassword && (
                    <p className="px-4 text-sm font-semibold text-red-500 font-titleFont">
                      <span className="mr-1 italic font-bold">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSignUp}
                  className="w-full h-10 text-base font-medium text-gray-200 duration-300 rounded-md cursor-pointer bg-primeColor hover:bg-black hover:text-white"
                >
                  Sign In
                </button>
                <p className="text-sm font-medium text-center font-titleFont">
                  Don't have an Account?{" "}
                  <Link to="/signup">
                    <span className="duration-300 hover:text-blue-600">
                      Sign up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
