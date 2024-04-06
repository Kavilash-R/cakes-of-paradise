import React, { useState } from "react";
import Navbar from "./Navbar";

const Others = ({ id, imageSrc, name, price, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ id, name, price });
  };

  return (
    <>
      <Navbar />
      <div className="w-60 h-[360px] m-10 mr-6 xl:h-[420px] xl:w-[300px] ">
        <div className="border rounded-xl border-gray-300 bg-gray-200 hover:border-gray-700 hover:bg-gray-100 dark:bg-[#2c2b2b] dark:hover:border-white dark:border-[#2c2b2b] dark:text-white">
          <img
            className="w-48 ml-6 h-48 mt-3 rounded-xl xl:ml-12"
            src={imageSrc}
            alt="bread"
          />
          <p className="w-100% text-center my-2 font-medium hover:underline">
            {name}
          </p>
          <div className="flex py-2 px-2 font-medium xl:px-10">
            <p className="w-100% px-5">Price:</p>
            <p className="px-5">{price} INR</p>
          </div>
        </div>
        <div className="mt-5">
          <center>
            <button
              className="font-semibold text-center py-1 bg-yellow-400 border border-gray-400 rounded-lg w-[100%] hover:border-gray-800 hover:bg-yellow-500"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <br />
            <br />
            <button className="font-semibold text-center py-1 bg-orange-400 border border-gray-400 rounded-lg w-[100%] hover:border-gray-800 hover:bg-orange-500">
              Purchase
            </button>
          </center>
        </div>
      </div>

      <div className="w-60 h-[360px]  m-10 mr-6 xl:h-[420px] xl:w-[300px] ">
        <div
          className="border rounded-xl border-gray-300 bg-gray-200 hover:border-gray-700 hover:bg-gray-100
          dark:bg-[#2c2b2b] dark:hover:border-white dark:border-[#2c2b2b] dark:text-white"
        >
          <img
            className="w-48 ml-6 h-48 mt-3 rounded-xl xl:ml-12"
            src="./images/panner roll.jpeg"
            alt="cakes"
          />
          <p className="w-100% text-center my-2 font-medium hover:underline">
            Panner Roll
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
    </>
  );
};

const Other = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center dark:bg-[#131313]">
        <Others
          id="1"
          imageSrc="./images/sweetbread.jpg"
          name="Sweet Bread"
          price={30}
          addToCart={addToCart}
        />
        <Others
          id="2"
          imageSrc="./images/wheat bread.jpg"
          name="Wheat Bread"
          price={30}
          addToCart={addToCart}
        />
        {/* Add more BreadItem components for each bread type */}
      </div>
    </>
  );
};
export default Others;
