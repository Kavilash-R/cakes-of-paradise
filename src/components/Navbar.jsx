import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

import { IoMdContact } from "react-icons/io";
const Navbar = ({ cartItems }) => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  const [dark, setdark] = useState(true);
  const handleDark = () => {
    setdark(!dark);
  };

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className="max-w-[1500px] h-16 mx-auto dark:bg-[#080707e4] dark:text-white bg-gray-100 flex items-center">
      <div className="flex w-full ">
        <Link
          to="/"
          className=" min-[300px]:text-lg sm:text-xl md:text-2xl lg:text-3xl ml-5 font-bold "
        >
          CAKES OF PARADISE
        </Link>
      </div>
      <div className="min-[300px]:px-1 sm:px-2 md:px-6  md:flex">
        <Link to="/cart" className="px-3">
          <FaShoppingCart size={20} />
        </Link>
      </div>
      <div onClick={toggleTheme} className="pt-2">
        <button onClick={handleDark} className="px-3">
          {!dark ? <CiLight size={20} /> : <MdDarkMode size={20} />}
        </button>
      </div>
      <div className="min-[300px]:px-1 sm:px-2 md:px-6  hidden md:flex">
        <Link to="/profile" className="px-3">
          <IoMdContact size={23} />
        </Link>
      </div>
      <div onClick={handleNav} className="mr-6 cursor-pointer block ">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "w-[35%] lg:w-[25%] h-full fixed left-0 top-0 dark:bg-black bg-gray-200 ease-in-out duration-500 z-10"
            : "fixed left-[-100%]"
        }
      >
        <Link
          to="/"
          className="flex justify-center  font-bold py-5 text-2xl hover:underline"
        >
          COP
        </Link>
        <ul className="p-4">
          <Link to="/cart">
            <li className="p-6 text-center cursor-pointer dark:border-b-white border-b border-black hover:underline">
              Cart
            </li>
          </Link>
          <Link to="/login">
            <li className="p-6 text-center cursor-pointer  dark:border-b-white  border-b  border-black hover:underline">
              Login
            </li>
          </Link>
          <Link to="/profile">
            <li className="p-6 text-center cursor-pointer  dark:border-b-white  border-b  border-black hover:underline">
              Account
            </li>
          </Link>
          <Link to="/about">
            <li className="p-6 text-center cursor-pointer  dark:border-b-white  border-b  border-black hover:underline">
              About
            </li>
          </Link>
          <a href="#contact">
            <li className="p-6 text-center cursor-pointer  dark:border-b-white  border-b  border-black hover:underline">
              Contact
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
