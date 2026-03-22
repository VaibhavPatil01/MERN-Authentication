import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-between items-center p-5 px-7 sm:p-6 sm:px-24 absolute top-0">
      <div className="flex gap-2 items-center">
        <img src={assets.mylogo} alt="" className="w-9 sm:w-12" />
        <h1 className="text-2xl font-bold sm:text-3xl">Auth</h1>
      </div>
      <button
        onClick={() => navigate("/login")}
        className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100"
      >
        Login <img src={assets.arrow_icon} alt="" />
      </button>
    </div>
  );
};

export default Navbar;
