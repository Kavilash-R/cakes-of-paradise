import React from "react";
import { UserAuth } from "../context/AuthContext";

import Navba1 from "./Navba1";
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
      <Navba1 />
      <div className="text-center text-3xl pt-5">profile</div>
      <div className="text-center text-2xl pt-20 font-semibold">
        Welcome,{user?.displayName}
      </div>
      <div className="text-center pt-10">
        <button
          className="bg-gray-200 px-2 py-1 rounded-md"
          onClick={handleSignOut}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Profile;
