import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row w-100%">
      <div className="w-100% h-16 bg-gray-100 flex items-center">
        <div className="pl-2 ">
          <Link className="text-3xl font-bold ">CAKES OF PARADISE</Link>
        </div>
        <div className="space-x-4 px-3 ">
          <Link>Login</Link>
          <button>Dark</button>
          <Link>Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
