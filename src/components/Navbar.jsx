import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="max-w-[1500px] h-16 mx-auto bg-gray-100 flex items-center">
      <div className="flex w-full ">
        <Link
          to="/"
          className=" min-[300px]:text-lg sm:text-xl md:text-2xl lg:text-3xl ml-5 font-bold "
        >
          CAKES OF PARADISE
        </Link>
      </div>
      <div className="min-[300px]:px-1 sm:px-2 md:px-6  hidden md:flex">
        <Link className="px-3">Cart</Link>
      </div>
      <button className="px-3">Dark</button>
      <div className="min-[300px]:px-1 sm:px-2 md:px-6  hidden md:flex">
        <Link className="px-3">Login</Link>
      </div>
      <div onClick={handleNav} className="mr-6 cursor-pointer block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "w-[35%] lg:w-[25%] h-full fixed left-0 top-0 bg-gray-200 ease-in-out duration-500"
            : "fixed left-[100%]"
        }
      >
        <Link to="/" className="flex justify-center  font-bold py-5 text-2xl">
          COP
        </Link>
        <ul className="p-4">
          <Link to="/cart">
            <li className="p-6 text-center cursor-pointer border-b border-black">
              Cart
            </li>
          </Link>
          <Link to="/login">
            <li className="p-6 text-center cursor-pointer border-b  border-black">
              Login
            </li>
          </Link>
          <Link to="/about">
            <li className="p-6 text-center cursor-pointer border-b  border-black">
              About
            </li>
          </Link>

          <li className="p-6 text-center cursor-pointer border-b  border-black">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
