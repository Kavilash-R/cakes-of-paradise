import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navba1 from "./Navba1";
import Navbar from "./Navbar";
const Login = () => {
  const { googleSignIn, user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/profile");
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="dark:bg-[#131313] dark:text-white pb-96">
        <div className="h-full w-full ">
          <div className="text-5xl font-semibold text-center pt-20">
            Sign In
          </div>

          <div className=" grid grid-cols-1 gap-4 place-items-center pt-10  h-80">
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
