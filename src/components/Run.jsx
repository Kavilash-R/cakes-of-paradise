import React from "react";
import { Link } from "react-router-dom";
const Run = () => {
  return (
    <>
      <div className="w-100% bg-gray-200 mt-20 ">
        <div className="flex whitespace-nowrap overflow-x-auto mt-10">
          <Link className="mx-5  mt-10">
            <img
              className="h-80 w-60 rounded-xl "
              src="./images/brownie.jpg"
              alt="brownie"
            />
          </Link>
          <Link className="mx-5">
            <img
              className="h-80 w-60 rounded-xl "
              src="./images/chicken puff 1.jpg"
              alt="chicken puff"
            />
          </Link>
          <Link className="mx-5">
            <img
              className="h-80 w-60 rounded-xl "
              src="./images/plain bun.jpg"
              alt="plain bun"
            />
          </Link>
          <Link className="mx-5">
            <img
              className="h-80 w-60 rounded-xl "
              src="./images/wheat bread.jpg"
              alt="wheat bread"
            />
          </Link>
          <Link className="mx-5">
            <img
              className="h-80 w-60 rounded-xl "
              src="./images/white-forest-cake.jpg"
              alt="white cake"
            />
          </Link>
          <Link className="mx-5">
            <img
              className="h-80 w-60 rounded-xl"
              src="./images/bhel puri.jpg"
              alt="bhel puri"
            />
          </Link>
          <Link className="mx-5">
            <img
              className="h-80 w-60 rounded-xl "
              src="./images/chocochip cookies.jpeg"
              alt="choco chip cookies"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Run;
