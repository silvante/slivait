import React from "react";
import me from "../assets/mardonbek.jpg";
import { categories } from "../../data";
import { NavLink, useLocation } from "react-router-dom";

const Aside = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <aside
      className={`border-white/15 border-r w-60 py-3 stiky top-[72px] flex-col justify-between h-[calc(100vh-72px)] hidden lg:flex`}
    >
      <div>
        <p className="w-full px-5 text-xl mb-3">Categories 🚀</p>
        <div className="navs">
          <NavLink
            to={`/`}
            className="inline-block hover:bg-white/10 py-3 w-full px-5 transition-all"
          >
            • all programs
          </NavLink>
          {categories.map((c) => {
            return (
              <NavLink
                to={`category/${c}`}
                key={c}
                className="inline-block hover:bg-white/10 py-3 w-full px-5 transition-all"
              >
                • {c}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-3 px-5 py-3 border-white/15 border-t w-full bottom-0 left-0">
        <img
          src={me}
          alt="my pfp"
          width={"50px"}
          className="rounded-full border"
        />
        <p>Mr Khamidov</p>
      </div>
    </aside>
  );
};

export default Aside;
