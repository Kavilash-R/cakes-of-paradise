import React from "react";
import Navbar from "./Navbar";
import Block from "./Block";
const Cakes = () => {
  return (
    <>
      <Navbar />
      <div className="flex m-10 border bg-yellow-300">
        <div className="h-60 w-60  ">
          <div className="h-60 w-60 flex justify-center">
            <div className="h-60 w-60 bg-blue-500 ">
              <img className="h-48 w-56 mx-2" src="" alt="" />
              <p className="text-center w-100%">hello</p>
              <p className="text-center w-100%">price</p>
            </div>
          </div>
          <div className="">
            <center>
              <button className="text-center my-3">Add to Cart</button>
              <br />
              <button className="text-center my-3">Purchase</button>
            </center>
          </div>
        </div>
      </div>

      <div className="flex m-10 border bg-yellow-300">
        <div className="h-60 w-60  ">
          <div className="h-60 w-60 flex justify-center">
            <div className="h-60 w-60 bg-blue-500 ">
              <img className="h-48 w-56 mx-2" src="" alt="" />
              <p className="text-center w-100%">hello</p>
              <p className="text-center w-100%">price</p>
            </div>
          </div>
          <div className="">
            <center>
              <button className="text-center my-3">Add to Cart</button>
              <br />
              <button className="text-center my-3">Purchase</button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cakes;
