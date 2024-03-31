import React from "react";

const Block = () => {
  return (
    <>
      <div className="w-60 h-120 m-10 mr-6 border-b-8 bg-gray-200">
        <div>
          <img className="w-48 ml-6 h-48" src="" alt="" />
          <p className="w-100% text-center my-2">hello</p>
          <p className="w-100% text-center my-2">price</p>
        </div>
        <div>
          <center>
            <button className="text-center my-2 ">Cart</button> <br />
            <button className="text-center my-2 ">Purchase</button>
          </center>
        </div>
      </div>
    </>
  );
};

export default Block;
