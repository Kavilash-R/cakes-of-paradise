import React from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
const Login = () => {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-full w-full">
        <div className="text-5xl font-semibold text-center mt-20">Sign In</div>

        <div className=" grid grid-cols-1 gap-4 place-items-center h-80">
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      </div>
    </>
  );
};
export default Login;
