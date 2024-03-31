import React from "react";
import { Link } from "react-router-dom";

const Block = () => {
  return (
    <>
      <div className="w-60 h-[360px]  m-10 mr-6  ">
        <div className="border rounded-xl border-gray-700 bg-gray-200">
          <img className="w-48 ml-6 h-48" src="" alt="cakes" />
          <p className="w-100% text-center my-2 ">hello</p>
          <p className="w-100% text-center my-2">Price:</p>
        </div>
        <div className="mt-5">
          <center>
            <button className="text-center py-1 bg-yellow-400 border  border-gray-800 rounded-lg w-[100%]  ">
              Add to Cart
            </button>
            <br />
            <br />
            <button className="text-center py-1 bg-orange-400 border  border-gray-800 rounded-lg w-[100%] ">
              Purchase
            </button>
          </center>
        </div>
      </div>
    </>
  );
};

export default Block;
