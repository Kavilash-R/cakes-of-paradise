import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Main = () => {
  return (
    <>
      <center className="w-full">
        <div className="py-8 ">
          <h1 className="min-[0px]:text-2xl md:text-3xl lg:text-5xl ">
            GREETINGS!!
          </h1>
          <br />
          <p className="min-[0px]:text-2xl md:text-3xl lg:text-4xl">
            Welcome, where every bite is a taste of happiness!
          </p>
          <br /> <br />
          <input
            type="text"
            className="w-[40%] h-10 text-center border-2 border-gray-400 bg-gray-100 rounded-xl"
            placeholder="Search"
          />
        </div>
        <div className="flex flex-wrap justify-center">
          <Link
            to="/cakes"
            className="border rounded-3xl hover:border-gray-800  min-[0px]:h-40 min-[0px]:w-40 min-[0px]:m-3   min-[303px]:h-32 min-[303px]:w-32 min-[303px]:m-3  
             min-[400px]:h-60 min-[400px]:w-60 min-[400px]:m-5   sm:h-60 sm:w-60 sm:m-10  lg:h-[300px] lg:w-[300px] lg:m-10 bg-gray-100"
          >
            <img
              src="./images/cakes-2.png"
              className="h-[30%] w-[30%] rounded-lg mr-[50%] mt-[8%]  "
            ></img>
            <br />
            <h1 className="text-start font-bold ml-7 ">CAKES</h1>
            <h3 className="sm:block text-center min-[0px]:hidden">
              Crafted with love and passion!
            </h3>
            <br />
            <p className=" border mt-2 border-gray-500 bg-white rounded-3xl flex items-center p-1 w-[50%] text-center">
              &nbsp;&nbsp; Explore &nbsp; <FaArrowRightLong />
            </p>
          </Link>

          <Link
            to="/puff"
            className="border rounded-3xl hover:border-gray-800  min-[0px]:h-40 min-[0px]:w-40 min-[0px]:m-3  
             min-[303px]:h-32 min-[303px]:w-32 min-[303px]:m-3 min-[400px]:h-60 min-[400px]:w-60 min-[400px]:m-5 sm:h-60 sm:w-60 sm:m-10  lg:h-[300px] lg:w-[300px] bg-gray-100"
          >
            <img
              src="./images/puffs-set.jpg"
              className="h-[30%] w-[30%] rounded-lg mr-[50%] mt-[8%]  "
            ></img>
          </Link>
          <Link
            to="/bread"
            className="border rounded-3xl hover:border-gray-800  min-[0px]:h-40 min-[0px]:w-40 min-[0px]:m-3 
              min-[303px]:h-32 min-[303px]:w-32 min-[303px]:m-3   min-[400px]:h-60 min-[400px]:w-60 min-[400px]:m-5   sm:h-60 sm:w-60 sm:m-10  lg:h-[300px] lg:w-[300px] bg-gray-100"
          >
            <img
              src="./images/bread.png"
              className="h-[30%] w-[30%] border bg-white rounded-lg mr-[50%] mt-[8%]  "
            ></img>
          </Link>
          <Link
            to="/chat"
            className="border rounded-3xl hover:border-gray-800  min-[0px]:h-40 min-[0px]:w-40 min-[0px]:m-3 
              min-[303px]:h-32 min-[303px]:w-32 min-[303px]:m-3   min-[400px]:h-60 min-[400px]:w-60 min-[400px]:m-5   sm:h-60 sm:w-60 sm:m-10  lg:h-[300px] lg:w-[300px] bg-gray-100"
          >
            <img
              src="./images/chat-items.jpg"
              className="h-[30%] w-[30%] rounded-lg mr-[50%] mt-[8%]  "
            ></img>
          </Link>
          <Link
            to="/cookies"
            className="border rounded-3xl hover:border-gray-800  min-[0px]:h-40 min-[0px]:w-40 min-[0px]:m-3 
            min-[303px]:h-32 min-[303px]:w-32 min-[303px]:m-3   min-[400px]:h-60 min-[400px]:w-60 min-[400px]:m-5   sm:h-60 sm:w-60 sm:m-10  lg:h-[300px] lg:w-[300px] bg-gray-100"
          >
            <img
              src="./images/cookies-set.png"
              className="h-[30%] w-[30%] rounded-lg mr-[50%] mt-[8%]  bg-white "
            ></img>
          </Link>
          <Link
            to="/others"
            className="border rounded-3xl hover:border-gray-800  min-[0px]:h-40 min-[0px]:w-40 min-[0px]:m-3 
              min-[303px]:h-32 min-[303px]:w-32 min-[303px]:m-3   min-[400px]:h-60 min-[400px]:w-60 min-[400px]:m-5   sm:h-60 sm:w-60 sm:m-10  lg:h-[300px] lg:w-[300px] bg-gray-100"
          >
            <img
              src="./images/others.png"
              className="h-[30%] w-[30%] rounded-lg mr-[50%] mt-[8%] bg-white "
            ></img>
          </Link>
        </div>
      </center>
    </>
  );
};

export default Main;
