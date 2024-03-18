import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-[72px] py-3 px-5 border-white/15 border-b flex justify-between items-center">
      <div className="flex items-center space-x-10">
        <Link to={"/"}>
          <img src={logo} alt="my logotype" width={"170px"} />
        </Link>
        <div className="space-x-10">
          <Link>Desing</Link>
          <Link>FrontEnd</Link>
          <Link>Backend</Link>
        </div>
      </div>
      <div className="bg-white/5 outline-none overflow-hidden rounded-full w-[30%] flex items-center">
        <input
          type="text"
          className="py-3 px-5 flex-1 bg-transparent outline-none"
          placeholder="Search a slivak"
        />
        <i className="bx bx-search px-4 text-xl"></i>
      </div>
    </header>
  );
};

export default Header;
