import React from "react";
import Navbar from "./Navbar";
import Block from "./Block";

const Bread = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center">
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
    </>
  );
};

export default Bread;
