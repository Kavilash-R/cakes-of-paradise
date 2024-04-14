import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navba1 = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="max-w-[1500px] h-16 mx-auto bg-gray-100 flex items-center  dark:bg-[#080707e4] dark:text-white">
        <div className="flex w-full ">
          <Link
            to="/"
            className=" min-[300px]:text-lg sm:text-xl md:text-2xl lg:text-3xl ml-5 font-bold "
          >
            CAKES OF PARADISE
          </Link>
        </div>
        <div className="mr-5 font-semibold text-lg md:text-xl">
          {user?.displayName ? (
            <button onClick={handleSignOut}>Logout</button>
          ) : (
            <Link to="/login">sign in</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navba1;
