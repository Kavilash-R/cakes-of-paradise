import React from "react";

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
      </center>
    </>
  );
};

export default Main;
