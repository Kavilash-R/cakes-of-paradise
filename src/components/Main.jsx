import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Run from "./Run";
import Contact from "./Contact";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <center className="w-full dark:bg-[#131313] dark:text-white">
        <div className="py-8 ">
          <h1 className="min-[0px]:text-2xl md:text-3xl lg:text-5xl ">
            GREETINGS!!
          </h1>
          <br />
          <br />
          <p className="min-[0px]:text-2xl md:text-3xl lg:text-4xl px-2">
            Welcome, where every bite is a taste of happiness!
          </p>
          <br />
          <br /> <br />
          {/*
          <input
            type="text"
            className="w-[40%] h-10 pl-4 border-2 border-gray-400 bg-gray-100 rounded-xl dark:bg-gray-800 dark:border-white"
            placeholder="Search"
          />
        */}
        </div>
        <div className="flex flex-wrap justify-center ">
          <Link
            to="/cakes"
            className="border rounded-3xl hover:border-gray-800   min-[0px]:h-48 min-[0px]:w-36 min-[0px]:my-5 min-[0px]:mx-2  
             sm:h-60 sm:w-60 sm:m-10  lg:h-[300px] lg:w-[300px] lg:m-10  bg-gray-100 min-[376px]:w-40 shadow-md
             dark:bg-[#2c2b2b] dark:hover:border-white dark:border-[#2c2b2b]"
          >
            <img
              src="./images/cakes-2.png"
              alt="cakes"
              className="h-[30%] w-[30%] rounded-lg mr-[50%] mt-[8%]  "
            ></img>
            <br />
            <h1 className="text-start font-bold ml-7 ">CAKES</h1>
            <h3 className="sm:block text-center min-[0px]:hidden">
              Crafted with love and passion!
            </h3>
            <br />
            <p className="dark:text-black border sm:mt-2 border-gray-500 bg-white rounded-3xl flex items-center sm:p-1 min-[0px]:w-[70%] sm:w-[50%] text-center">
              &nbsp; &nbsp; Explore &nbsp; <FaArrowRightLong />
            </p>
          </Link>

          <Link
            to="/puff"
            className="border rounded-3xl hover:border-gray-800   min-[0px]:h-48 min-[0px]:w-36 min-[0px]:my-5 min-[0px]:mx-2  
             sm:h-60 sm:w-60 sm:m-10  lg:h-[300px] lg:w-[300px] lg:m-10 bg-gray-100  min-[376px]:w-40 shadow-md
             dark:bg-[#2c2b2b] dark:hover:border-white dark:border-[#2c2b2b]"
          >
            <img
              src="./images/puffs-set.jpg"
              alt="puffs"
              className="h-[30%] w-[30%] rounded-lg mr-[50%] mt-[8%]  "
            ></img>
            <br />
            <h1 className="text-start font-bold ml-7 ">PUFFS</h1>
            <h3 className="sm:block text-center min-[0px]:hidden">
              Savor our delightful puffs
            </h3>
            <br />
            <p className="dark:text-black border sm:mt-2 border-gray-500 bg-white rounded-3xl flex items-center sm:p-1 min-[0px]:w-[70%] sm:w-[50%] text-center">
              &nbsp; &nbsp; Explore &nbsp; <FaArrowRightLong />
            </p>
          </Link>
          <Link
            to="/bread"
            className="border rounded-3xl hover:border-gray-800   min-[0px]:h-48 min-[0px]:w-36 min-[0px]:my-5 min-[0px]:mx-2  
            sm:h-60 sm:w-60 sm:m-10  lg:h-[300px] lg:w-[300px] lg:m-10 bg-gray-100  min-[376px]:w-40 shadow-md
            dark:bg-[#2c2b2b] dark:hover:border-white dark:border-[#2c2b2b]"
          >
            <img
              src="./images/bread.png"
              alt="bread"
              className="h-[30%] w-[30%] border bg-white rounded-lg mr-[50%] mt-[8%]  "
            ></img>
            <br />
            <h1 className="text-start font-bold ml-7 ">BREAD</h1>
            <h3 className="sm:block text-center min-[0px]:hidden">
              Freshly baked bread, just for you!
            </h3>
            <br />
            <p className="dark:text-black border sm:mt-2 border-gray-500 bg-white rounded-3xl flex items-center sm:p-1 min-[0px]:w-[70%] sm:w-[50%] text-center">
              &nbsp; &nbsp; Explore &nbsp; <FaArrowRightLong />
            </p>
          </Link>
          <Link
            to="/chat"
            className="border rounded-3xl hover:border-gray-800   min-[0px]:h-48 min-[0px]:w-36 min-[0px]:my-5 min-[0px]:mx-2  
             sm:h-60 sm:w-60 sm:m-10  lg:h-[300px] lg:w-[300px] lg:m-10 bg-gray-100  min-[376px]:w-40 shadow-md
             dark:bg-[#2c2b2b] dark:hover:border-white dark:border-[#2c2b2b]"
          >
            <img
              src="./images/chat-items.jpg"
              alt="chats"
              className="h-[30%] w-[30%] rounded-lg mr-[50%] mt-[8%]  "
            ></img>
            <br />
            <h1 className="text-start font-bold ml-7 ">CHATS</h1>
            <h3 className="sm:block text-center min-[0px]:hidden">
              Crispy puris, perfect for snacking!
            </h3>
            <br />
            <p className="dark:text-black border sm:mt-2 border-gray-500 bg-white rounded-3xl flex items-center sm:p-1 min-[0px]:w-[70%] sm:w-[50%] text-center">
              &nbsp; &nbsp; Explore &nbsp; <FaArrowRightLong />
            </p>
          </Link>
          <Link
            to="/cookies"
            className="border rounded-3xl hover:border-gray-800   min-[0px]:h-48 min-[0px]:w-36 min-[0px]:my-5 min-[0px]:mx-2  
            sm:h-60 sm:w-60 sm:m-10  lg:h-[300px] lg:w-[300px] lg:m-10 bg-gray-100  min-[376px]:w-40 shadow-md
            dark:bg-[#2c2b2b] dark:hover:border-white dark:border-[#2c2b2b]"
          >
            <img
              src="./images/cookies-set.png"
              alt="cookies"
              className="h-[30%] w-[30%] rounded-lg mr-[50%] mt-[8%]  bg-white "
            ></img>
            <br />
            <h1 className="text-start font-bold ml-7 ">COOKIES</h1>
            <h3 className="sm:block text-center min-[0px]:hidden">
              Yummy cookies,great for snacks!
            </h3>
            <br />
            <p className="dark:text-black border sm:mt-2 border-gray-500 bg-white rounded-3xl flex items-center sm:p-1 min-[0px]:w-[70%] sm:w-[50%] text-center">
              &nbsp; &nbsp; Explore &nbsp; <FaArrowRightLong />
            </p>
          </Link>
          <Link
            to="/others"
            className="border rounded-3xl hover:border-gray-800   min-[0px]:h-48 min-[0px]:w-36 min-[0px]:my-5 min-[0px]:mx-2  
            sm:h-60 sm:w-60 sm:m-10  lg:h-[300px] lg:w-[300px] lg:m-10 bg-gray-100  min-[376px]:w-40 shadow-md
            dark:bg-[#2c2b2b] dark:hover:border-white dark:border-[#2c2b2b]"
          >
            <img
              src="./images/others.png"
              alt="others"
              className="h-[30%] w-[30%] rounded-lg mr-[50%] mt-[8%] bg-white "
            ></img>
            <br />
            <h1 className="text-start font-bold ml-7 ">OTHERS</h1>
            <h3 className="sm:block text-center min-[0px]:hidden">
              Tasty snacks, for any cravings!
            </h3>
            <br />
            <p className="dark:text-black border sm:mt-2 border-gray-500 bg-white rounded-3xl flex items-center sm:p-1 min-[0px]:w-[70%] sm:w-[50%] text-center">
              &nbsp; &nbsp; Explore &nbsp; <FaArrowRightLong />
            </p>
          </Link>
        </div>
      </center>
      <Run />
      <Contact />
    </>
  );
};

export default Main;
