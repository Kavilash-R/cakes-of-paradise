import React from "react";
import { UserAuth } from "../context/AuthContext";

import Navba1 from "./Navba1";
import Navbar from "./Navbar";
const Profile = () => {
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
      <Navbar />
      <div className="dark:bg-[#131313] dark:text-white ">
        <div className="text-center font-bold text-3xl md:text-5xl pt-5 ">
          Account
        </div>
        <div className="text-center text-2xl md:text-3xl pt-16 font-semibold flex items-center justify-center">
          <div>Welcome,</div>
          <div className="font-bold">{user?.displayName}</div>
        </div>
        <div className="text-center  pt-10 pb-[500px]">
          <button
            className="bg-gray-200 px-2 md:px-4 md:py-2 py-1 rounded-md md:text-xl dark:text-black "
            onClick={handleSignOut}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
