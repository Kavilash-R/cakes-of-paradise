import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <center className="w-full">
        <div className="py-16 ">
          <h1 className="min-[0px]:text-2xl md:text-3xl lg:text-4xl">
            GREETINGS!!
          </h1>{" "}
          <br />
          <input
            type="text"
            className="w-[30%] h-8 text-center"
            placeholder="Search"
          />
        </div>
        <div className="flex flex-wrap justify-center">
          <Link to="/cakes" className="h-60 w-60 m-10 bg-yellow-400"></Link>
          <Link to="/puff" className="h-60 w-60 m-10 bg-yellow-400"></Link>
          <Link to="/bread" className="h-60 w-60 m-10 bg-yellow-400"></Link>
          <Link to="/chat" className="h-60 w-60 m-10 bg-yellow-400"></Link>
          <Link to="/cookies" className="h-60 w-60 m-10 bg-yellow-400"></Link>
          <Link to="/others" className="h-60 w-60 m-10 bg-yellow-400"></Link>
        </div>
      </center>
    </>
  );
};

export default Main;
