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
      <div className="max-w-[1500px] h-16 mx-auto dark:bg-[#080707e4] dark:text-white bg-gray-100 flex items-center">
        <div className="flex w-full ">
          <Link
            to="/"
            className=" min-[300px]:text-lg sm:text-xl md:text-2xl lg:text-3xl ml-5 font-bold "
          >
            CAKES OF PARADISE
          </Link>
        </div>
        {user?.displayName ? (
          <button onClick={handleSignOut}>logout</button>
        ) : (
          <Link to="/login">sign in</Link>
        )}
      </div>
    </>
  );
};

export default Navba1;
