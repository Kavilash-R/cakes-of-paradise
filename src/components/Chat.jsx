import React from "react";
import Navbar from "./Navbar";
const Chat = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center">
        <div className="w-60 h-[360px]  m-10 mr-6 xl:h-[420px] xl:w-[300px] ">
          <div className="border rounded-xl border-gray-300 bg-gray-200 hover:border-gray-700 hover:bg-gray-100">
            <img
              className="w-48 ml-6 h-48 mt-3 rounded-xl xl:ml-12"
              src="./images/pani puri.jpg"
              alt="cakes"
            />
            <p className="w-100% text-center my-2 font-medium hover:underline">
              Pani Puri
            </p>
            <div className="flex py-2 px-2 font-medium xl:px-10">
              <p className="w-100% px-5  ">Price:</p>
              <p className="px-5 ">30 INR</p>
            </div>
          </div>
          <div className="mt-5">
            <center>
              <button className=" font-semibold text-center py-1 bg-yellow-400 border  border-gray-400 rounded-lg w-[100%] hover:border-gray-800 hover:bg-yellow-500">
                Add to Cart
              </button>
              <br />
              <br />
              <button className=" font-semibold text-center py-1 bg-orange-400 border  border-gray-400 rounded-lg w-[100%]  hover:border-gray-800 hover:bg-orange-500">
                Purchase
              </button>
            </center>
          </div>
        </div>

        <div className="w-60 h-[360px]  m-10 mr-6 xl:h-[420px] xl:w-[300px] ">
          <div className="border rounded-xl border-gray-300 bg-gray-200 hover:border-gray-700 hover:bg-gray-100">
            <img
              className="w-48 ml-6 h-48 mt-3 rounded-xl xl:ml-12"
              src="./images/bhel puri.jpg"
              alt="cakes"
            />
            <p className="w-100% text-center my-2 font-medium hover:underline">
              Bhel Puri
            </p>
            <div className="flex py-2 px-2 font-medium xl:px-10">
              <p className="w-100% px-5  ">Price:</p>
              <p className="px-5 ">40 INR</p>
            </div>
          </div>
          <div className="mt-5">
            <center>
              <button className=" font-semibold text-center py-1 bg-yellow-400 border  border-gray-400 rounded-lg w-[100%] hover:border-gray-800 hover:bg-yellow-500">
                Add to Cart
              </button>
              <br />
              <br />
              <button className=" font-semibold text-center py-1 bg-orange-400 border  border-gray-400 rounded-lg w-[100%]  hover:border-gray-800 hover:bg-orange-500">
                Purchase
              </button>
            </center>
          </div>
        </div>

        <div className="w-60 h-[360px]  m-10 mr-6 xl:h-[420px] xl:w-[300px] ">
          <div className="border rounded-xl border-gray-300 bg-gray-200 hover:border-gray-700 hover:bg-gray-100">
            <img
              className="w-48 ml-6 h-48 mt-3 rounded-xl xl:ml-12"
              src="./images/dahi puri.jpg"
              alt="cakes"
            />
            <p className="w-100% text-center my-2 font-medium hover:underline">
              Dahi Puri
            </p>
            <div className="flex py-2 px-2 font-medium xl:px-10">
              <p className="w-100% px-5  ">Price:</p>
              <p className="px-5 ">45 INR</p>
            </div>
          </div>
          <div className="mt-5">
            <center>
              <button className=" font-semibold text-center py-1 bg-yellow-400 border  border-gray-400 rounded-lg w-[100%] hover:border-gray-800 hover:bg-yellow-500">
                Add to Cart
              </button>
              <br />
              <br />
              <button className=" font-semibold text-center py-1 bg-orange-400 border  border-gray-400 rounded-lg w-[100%]  hover:border-gray-800 hover:bg-orange-500">
                Purchase
              </button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
