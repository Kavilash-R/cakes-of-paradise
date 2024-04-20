import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <>
      <Navbar cartItems={cartItems} />
      <div className=" dark:bg-[#131313] pb-80">
        <div className="  dark:text-white  text-2xl font-bold md:text-3xl flex justify-center py-7 md:py-7">
          Cart Items
        </div>
        <div className=" border border-black  bg-yellow-300 my-20 mx-5 md:mx-20 lg:mr-40  ">
          <div className=" py-5">
            {cartItems.length === 0 && (
              <div className=" mx-5 grid place-content-center md:text-xl">
                To purchase any items you need to add something to the cart
              </div>
            )}

            <div className="grid place-content-center ">
              {cartItems.map((item) => (
                <div key={item.id} className="flex  items-center ">
                  <div className=" items-start">
                    <img
                      className=" h-16 w-16 p-2 mr-3 md:pr-24 font-semibold text-sm md:text-xl md:h-20 md:w-24 "
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  <div className=" text-sm md:text-xl font-semibold lg:px-3">
                    {item.name}
                  </div>

                  <button
                    className=" border border-black bg-red-500 px-1 mx-1  md:text-xl "
                    onClick={() => handleRemoveProduct(item)}
                  >
                    -
                  </button>

                  <div className=" flex justify-end font-semibold lg:px-3 text-sm md:text-xl">
                    {item.quantity} * {item.price} INR
                  </div>
                  <button
                    className="border border-black bg-green-500 px-1  my-0 mx-2 md:text-xl"
                    onClick={() => handleAddProduct(item)}
                  >
                    +
                  </button>
                </div>
              ))}
            </div>
            <br />
            <div className="md:text-xl">
              <div className=" pr-3 ">
                <div className="flex justify-end">
                  <div className=" bg-gray-800 rounded-lg text-white  mr-3 ">
                    {cartItems.length >= 1 && (
                      <button className="px-3" onClick={handleCartClearance}>
                        clear
                      </button>
                    )}
                  </div>
                  <div className=" font-semibold text-sm md:text-xl flex justify-end">
                    Total Price :
                  </div>
                  <div className="font-semibold text-sm md:text-xl mx-4 md:pr-6">
                    {totalPrice} INR{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {cartItems.length >= 1 && (
          <div className=" flex justify-center my-8 md:my-16 md:text-2xl   ">
            <Link to="/purchase">
              <button className=" rounded-lg bg-red-600 px-5 py-1 hover:bg-orange-500 border hover:border-black">
                Purchase
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
