import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Profile = () => {
  const { user, logout } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="text-center pt-20">profile</div>
      <div className="text-center pt-20">
        {" "}
        {user?.displayName ? (
          <button onClick={handleSignOut}>logout</button>
        ) : (
          <Link to="/login">sign in</Link>
        )}
      </div>
    </>
  );
};

export default Profile;
