import React from "react";
import { Link } from "react-router-dom";

const Block = () => {
  return (
    <>
      <div className="overflow-hidden my-10 ">
        <div className=" whitespace-nowrap  inline-flex overflow-hidden translate-x-3">
          <div className="h-40 w-80 m-5 bg-black">
            <Link to="/cakes">
              <img src="./images/blackforest.jpg" alt="" />
            </Link>
          </div>
          <div className="h-40 w-80 m-5 bg-black">
            <Link to="/cakes">
              <img src="./images/blackforest.jpg" alt="" />
            </Link>
          </div>
          <div className="h-40 w-80 m-5 bg-black">
            <Link to="/cakes">
              <img src="./images/blackforest.jpg" alt="" />
            </Link>
          </div>
          <div className="h-40 w-80 m-5 bg-black">
            <Link to="/cakes">
              <img src="./images/blackforest.jpg" alt="" />
            </Link>
          </div>
          <div className="h-40 w-80 m-5 bg-black">
            <Link to="/cakes">
              <img src="./images/blackforest.jpg" alt="" />
            </Link>
          </div>
          <div className="h-40 w-80 m-5 bg-black">
            <Link to="/cakes">
              <img src="./images/blackforest.jpg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Block;
