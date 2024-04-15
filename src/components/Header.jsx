import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-[72px] sticky top-0 py-3 px-5 border-white/15 border-b flex justify-between items-center">
      <button className="text-2xl lg:hidden">
        <i className="bx bx-category"></i>
      </button>
      <div className="flex items-center space-x-10">
        <Link to={"/"}>
          <img src={logo} alt="my logotype" width={"170px"} />
        </Link>
        <div className="space-x-10 hidden lg:block">
          <Link to={'/report'}>Report <i className='bx bxs-report'></i></Link>
          <a href="https://github.com/Khamidov-M/slivait" target="_blanck" className="bg-white text-black px-3 rounded py-2"><i className='bx bx-git-repo-forked' ></i> Github repository</a>
        </div>
      </div>
      <div className="bg-white/5 outline-none overflow-hidden rounded-full w-[30%] items-center hidden lg:flex">
        <input
          type="text"
          className="py-3 px-5 flex-1 bg-transparent outline-none"
          placeholder="Search a slivak"
        />
        <i className="bx bx-search px-4 text-xl"></i>
      </div>
      <button className="text-2xl lg:hidden">
        <i className="bx bx-menu"></i>
      </button>
    </header>
  );
};

export default Header;
